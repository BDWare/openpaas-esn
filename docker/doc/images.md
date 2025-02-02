# Images

We currently use several official images, and some custom ones:

- Redis: redis:6.2.1-alpine3.13 
- MongoDB: mongo:4.4.4
- Apache James: linagora/james-rabbitmq-project
- Elastic Search: elasticsearch:6.6.2
- RabbitMQ: rabbitmq:3.8.14-management
- Cassandra: cassandra:3.11.10
- Aoache Tika: apache/tika:1.25
- Sabre DAV: linagora/esn-sabre

**linagora/esn-base**

The OpenPaaS ESN uses a base image which contains all required npm and bower dependencies so that it is quick to build distributions on top of it.
This image is located under docker/dockerfiles/base/Dockerfile. You can build it from the project home directory with the following command:

``` sh
docker build -f ./docker/dockerfiles/base/Dockerfile -t linagora/esn-base .
```

Note that this one needs to be built as soon as a bower or an npm dependency is updated.

**linagora/esn**

The image which contains the current repository runtime. It is based on linagora/esn-base. The image can be built from the project home directory with the following command:
 
 ```sh
 docker build -t linagora/esn .
 ```

## Publishing Images to Docker Hub

The *linagora/esn-base* and *linagora/esn* images are automatically built and pushed to the Docker Hub with the help of [http://travis-ci.org](http://travis-ci.org) and the travis.yml descriptor:

```yaml
sudo: required

services:
  - docker

before_install:
  - docker build -f ./docker/dockerfiles/base/Dockerfile -t linagora/esn-base .
  - docker build -t linagora/esn .
  - docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
  - docker push linagora/esn-base
  - docker push linagora/esn

script:
  - docker ps
```

Refer to the official documentation for more details and options https://docs.travis-ci.com/user/docker/.

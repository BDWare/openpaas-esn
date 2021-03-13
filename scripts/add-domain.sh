#!/bin/sh
# ./add-domain.sh DOMAIN
docker exec esn_james java -jar /root/james-cli.jar -h localhost adddomain $1

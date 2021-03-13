#!/bin/sh
# ./add-user.sh EMAIL PASSWORD
docker exec esn_james java -jar /root/james-cli.jar -h localhost adduser $1 $2

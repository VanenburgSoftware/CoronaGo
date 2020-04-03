#!/bin/bash

port=80
if [ ! -z $1 ]
then
  port=$1
fi

currentApp=`default`
if [ ! -z $2 ]
then
  echo $2
  currentApp=$2
fi

echo 'Try to start in the port $port'

ps -ef | grep ngstart.sh

rm -f client.log

processId=`sudo lsof -t -i:$port`
echo "Killing process $processId"
if [ -z $processId ]
then 
	echo "Server not started"
else
	echo "Killing ng serve"
	sudo kill -9 $processId 
fi

currentDir=`pwd`
if [ ! -z $3 ]
then
  echo $3
  cd $3
fi


echo 'Writing logs to file  /home/evadev/logs/client_$currentApp.log'

ng serve --host localhost --disable-host-check --port $port --configuration hmr 2>&1 | tee -a /home/evadev/logs/client_$currentApp.log

cd $currentDir

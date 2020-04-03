#!/bin/bash

port=80
if [ ! -z $1 ]
then
  port=$1
fi

echo 'Try to kill the server in the port $port'

processId=`sudo lsof -t -i:$port`
echo "Killing process $processId"
if [ -z $processId ]
then 
	echo "Server not started"
else
	echo "Killing ng serve"
	sudo kill -9 $processId 
fi


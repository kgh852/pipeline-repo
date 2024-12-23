#!/bin/bash
cd /home/ec2-user/myapp
node server.js > /dev/null 2>&1 &
echo $! > server.pid

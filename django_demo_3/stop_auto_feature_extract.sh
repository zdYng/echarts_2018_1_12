#!/bin/sh
bot_pids=`ps -ef|grep 'python manage.py runserver webcharts4:8585'|grep -v grep|awk '{print $2}'`

for bot_pid in $bot_pids; do
      echo $bot_pid
      kill $bot_pid
done
echo "hello"

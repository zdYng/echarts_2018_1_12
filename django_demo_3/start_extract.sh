#!/bin/sh
sh stop_auto_feature_extract.sh
if [ ! -d "logs" ] ;then
     mkdir logs
fi

nohup python manage.py runserver webcharts4:8585 >logs/featureLog 2>&1 &

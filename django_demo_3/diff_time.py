# -*- coding:utf-8 -*-
import time
def diff_time(s_time):
    '''

    :param s_time:  s_time = '2016-08-10 00:00:00'
    :return:
    '''
    s_num = int(time.mktime(time.strptime(s_time,'%Y-%m-%d %H:%M:%S')))
    now_time = int(time.time())
    diff_time =now_time - s_num
    return diff_time
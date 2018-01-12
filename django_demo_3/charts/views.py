from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required  #auth可以设置每个用户的权限

# Create your views here.
from charts.models import Sfhd130Cols
from charts.models import SfhdPredictDataTest
import json,time,decimal
from django.db.models import Avg
from .forms import UserForm
# 方法
#时间戳转标准时间
def time_change(date):
    date = time.localtime(date)
    return time.strftime('%Y-%m-%d %H:%M:%S',date)

# 这是查数据库
def data_lists(cols,nums):
    '''
    :param cols:  ['time','t58te01a_av']
    :param nums:  行数  [100,200]
    :return:
    '''
    data_1 = list(Sfhd130Cols.objects.values(cols[0],cols[1])[nums[0]:nums[1]])
    nums_1 = []
    for i in data_1:
        nums_1.append(i[cols[1]])
    return nums_1
#list 格式化
def lists_way(lists):
    '''
    :param lists:  [1,2,3,4]
    :return:
    '''
    m = []
    for i in lists:
        m.append([i])
    return m
# lists 添加 内层lists
def lists_into_way(lists,m):
    '''
    :param lists: 要添加的lists
    :param m:  被添加的 lists
    :return:
    '''
    q = 0
    for i in m:
        i.append(lists[q])
        q+=1
    return m

# 主页
def index(request):

    return render(request,'charts/index.html')
# 测试 2
def chart_2_2(request):

    return render(request,'charts/chart_2.html')
###table_datas ########
def func_table_data(col):
    '''

    :param col:  参数  'amb05cq04bm_av'
    :return:
    '''
    datas = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:1])
    # time.sleep(4000)
    datas_1 = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(datas[0]['time']))
    datas_2 = datas[0][col]
    # datas_3 = list(SfhdPredictDataTest.objects.
    lists = json.dumps([datas_1, datas_2], indent=4)
    return lists

def func_table_data_2(col):
    '''

    :param col:  参数  'amb05cq04bm_av'
    :return:  [ time , canshu_r ,canshu_p,loss]  :  ['2016-08-11 16:31:06', 1004.101, 1004.197,'0.0000956']
    '''
    datas_r = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:1])      #   [{'e91ge01ap_av': 1003.311, 'time': 1470903801}]

    datas_1 = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(datas_r[0]['time']))
    datas_2 = datas_r[0][col]
    cur_time = datas_r[0]['time']
    datas_p = list(SfhdPredictDataTest.objects.order_by('-time').values('time', col).filter(time=cur_time)) #  [{'e91ge01ap_av': 1004.197, 'time': 1470904266}]
    if datas_p == []:
        cur_time -=1
        datas_p = list(SfhdPredictDataTest.objects.order_by('-time').values('time', col).filter(time=cur_time))
        if datas_p == []:
            datas_p_2 = '-'
            loss = '-'
        else:
            datas_p_2 = datas_p[0][col]
            loss = "%.7f" % (abs(datas_p_2 - datas_2) / datas_2)
    else:
        datas_p_2 = datas_p[0][col]
        loss = "%.7f"%(abs(datas_p_2-datas_2)/datas_2)
    # datas_3 = list(SfhdPredictDataTest.objects.
    lists = json.dumps([datas_1, datas_p_2,datas_2,loss], indent=4)
    return lists
#######  --- 1  -----##########
def table_data(request):
    lists = func_table_data_2('e91ge01ap_av')

    return HttpResponse(lists)
#######  --- 2  -----##########
def table_data_2(request):
    lists = func_table_data_2('b01te01a_av')
    return HttpResponse(lists)
#######  --- 3  -----##########
def table_data_3(request):
    lists = func_table_data_2('t1amtp_av')
    return HttpResponse(lists)
#######  --- 4  -----##########
def table_data_4(request):
    lists = func_table_data_2('am52sig1001_av')
    return HttpResponse(lists)
#######  --- 5 -----##########
def table_data_5(request):
    lists = func_table_data_2('am53sig7001_av')
    return HttpResponse(lists)
#######  --- 6 -----##########
def table_data_6(request):
    lists = func_table_data('amb05cq04bm_av')
    return HttpResponse(lists)

# 折线图 初始值的data函数：



###双线#####3
def func_2_data(col,num):
    '''

    :param col: 参数
    :param num:  点数
    :return:
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])

    dates = []  # time
    datas = []  # real
    datas_p = []  # predict
    n = 0
    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        cur_time = lis['time']
        a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))

        #存上一个点的数据,如果预测值不存在，则取上一个时间点的数据
        if a ==[]:
            cur_time-=1
            a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
            if a==[]:
                cur_time -= 1
                a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
                if a==[]:
                    datas_p.append(0)
                else:
                    datas_p.append(a[0][col])
            else:
                datas_p.append(a[0][col])
        else:
            datas_p.append(a[0][col])

        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])

        datas.append(lis[col])
    # 参考：datas_p = [878.263, 879.253, 879.536, 879.68, 880.258]
    datas_p = datas_p[::-1]  # 反序
    datas = datas[::-1]
    dates = dates[::-1]
    lists = json.dumps([dates, datas,datas_p], indent=4)
    return lists

def func_2_updata(col):
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:1])

    dates = []  # time
    datas = []  # real
    datas_p = []  # predict
    n=0
    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        cur_time = lis['time']
        a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
        if a ==[]:
            cur_time-=1
            a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
            if a==[]:
                cur_time -= 1
                a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
                if a==[]:
                    datas_p.append(0)
                else:
                    datas_p.append(a[0][col])
            else:
                datas_p.append(a[0][col])
        else:
            datas_p.append(a[0][col])
        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])
        datas.append(lis[col])
    # 参考：datas_p = [878.263, 879.253, 879.536, 879.68, 880.258]
    datas_p = datas_p[::-1]  # 反序
    datas = datas[::-1]
    dates = dates[::-1]
    lists = json.dumps([dates, datas, datas_p], indent=4)
    return lists


# 预测跑前面
def func_data_3(col,num,delt):
    '''

    :param col: e91ge01ap_av
    :param num: 100
    :param delt:  data与pre_data的相差的时间 30
    :return: [ [ ] , [ ] , [ ] ]
    '''

    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])

    date_1 = []  # time
    # date_2 = []  # pre_data多出来的时间
    datas = []  # real
    datas_p = []  # predict

    for i in lists:
        date_1.append(i['time'])
        datas.append(i[col])
    end_time = date_1[0]    # charts的当前时间
    datas = datas[::-1]    #实际值
    # 添加时间差值
    for i_2 in range(end_time+3,end_time+delt,3):
        date_1.append(i_2)
    for i_3 in date_1:
        a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
        # 判断pre在3秒内是否有值
        if a ==[]:
            i_3 -= 1
            a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
            if a == []:
                i_3 -= 1
                a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
                if a ==[]: datas_p.append(0)
                else: datas_p.append(a[0][col])
            else: datas_p.append(a[0][col])
        else: datas_p.append(a[0][col])
    date_1 = date_1[::-1]
    datas_p =  datas_p[::-1]
    for i_4 in range(0,len(date_1)-1):
        date_1[i_4] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date_1[i_4]))
    lists = json.dumps([date_1, datas, datas_p], indent=4)
    return lists

#更新函数3
def func_update_3(col,num,delt):
    '''

    :param col: e91ge01ap_av
    :param num: 1
    :param delt:  data与pre_data的相差的时间   30
    :return: [ [ ] , [ ] , [ ] ]
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])
    date_now = [] # current_time
    date_1 = []  # time
    datas = []  # real
    datas_p = []  # predict

    for i in lists:
        date_now.append(i['time'])
        date_1.append(i['time']+delt)
        datas.append(i[col])
    end_time = date_1[0]    # charts的当前时间
    datas = datas[::-1]    #实际值
    # 添加时间差值
    # for i_2 in range(end_time+3,end_time+delt,3):
    #     date_1.append(i_2)
    for i_3 in date_1:
        a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
        # 判断pre在3秒内是否有值
        if a ==[]:
            i_3 -= 1
            a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
            if a == []:
                i_3 -= 1
                a = list(SfhdPredictDataTest.objects.values('time',col).filter(time=i_3))
                if a ==[]: datas_p.append(0)
                else: datas_p.append(a[0][col])
            else: datas_p.append(a[0][col])
        else: datas_p.append(a[0][col])
    date_1 = date_1[::-1]
    datas_p =  datas_p[::-1]
    for i_4 in range(0,len(date_1)-1):
        date_1[i_4] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date_1[i_4]))
    lists = json.dumps([date_1, datas, datas_p], indent=4)
    return lists

#####预测参数 折线图########
### chart_1####
def charts_data(request):
    # if request.method =="POST":
    #     h = request.POST['hour']  #前端小时传值
    #     m = request.POST['minute']  #前端分钟传值
    #     s = request.POST['second']   #前端秒传值
    #     sum = int((h*3600+m*60+s)/3)  #计算总点数
    #
    #     lists = func_2_data_2('e91ge01ap_av', sum,5)
    #     return HttpResponse(lists)
    if request.method =="GET":
        lists = func_2_data_2( 'e91ge01ap_av',100,4)
        lists = json.dumps(lists, indent=4)
        return HttpResponse(lists)

def charts_update(request):
    lists  =  func_2_update_2( 'e91ge01ap_av',1,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)
###chart_2####
def charts_data_2(request):
    lists = func_2_data_2( 'b01te01a_av',50,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)

def charts_update_2(request):
    lists  =  func_2_update_2( 'b01te01a_av',1,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)
###chart_3####
def charts_data_3(request):
    lists = func_2_data_2( 't1amtp_av',50,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)

def charts_update_3(request):
    lists  =  func_2_update_2( 't1amtp_av',1,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)
###chart_4####
def charts_data_4(request):
    lists = func_2_data_2( 'am52sig1001_av',50,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)

def charts_update_4(request):
    lists  =  func_2_update_2( 'am52sig1001_av',1,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)
###chart_5####
def charts_data_5(request):
    lists = func_2_data_2( 'am53sig7001_av',50,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)

def charts_update_5(request):
    lists  =  func_2_update_2( 'am53sig7001_av',1,4)
    lists = json.dumps(lists, indent=4)
    return HttpResponse(lists)
###chart_6####
def charts_data_6(request):
    lists = func_2_data( 't1amtp_av',100)
    return HttpResponse(lists)

def charts_update_6(request):
    lists  =  func_2_updata( 't1amtp_av')
    return HttpResponse(lists)
##########################散点图##########################
# [  [ ]  ]
def scatter_data(request):
    # 1
    # 1
    cols_1 = ['time', 't58te01a_av']
    nums_1 = [200, 350]
    cols_2 = ['time', 'amb03cv03e02_av']
    data_1 = data_lists(cols_1, nums_1)  # 除氧器温度 x
    data_2 = data_lists(cols_2, nums_1)  # 磨煤机E出口温度设定 y
    nums_1 = lists_way(data_1)  # 格式化 【【】， 【】，。。 】
    m = lists_into_way(data_2, nums_1)

    lists1 = m
    # 2
    nums_2 = [350, 500]
    data_12 = data_lists(cols_1, nums_2)  # 除氧器温度 x
    data_22 = data_lists(cols_2, nums_2)  # 磨煤机E出口温度设定 y
    nums_12 = lists_way(data_12)
    m2 = lists_into_way(data_22, nums_12)
    lists2 = m2
    lists = json.dumps([lists1,lists2],indent=4)
    return HttpResponse(lists)

######雷达图############
def leida_data(request):
    nums = [[0, 30],[40,70],[80,110]]
    lists = []
    for ii in nums:
        cols_1 = ['time','am23sig0202_av']
        data_1 = data_lists(cols_1,ii)
        lists_1 = lists_way(data_1)
        cols_2 = ['time','b01te01a_av']
        data_2 = data_lists(cols_2,ii)
        cols_3 = ['time', 't31pt04b_av']
        data_3 = data_lists(cols_3,ii)
        cols_4 = ['time', 'e92vr01pv01_av']
        data_4 = data_lists(cols_4,ii)
        cols_5 = ['time', 't31pt04b_av']
        data_5 = data_lists(cols_5,ii)
        cols_6 = ['time', 'b06ft12aa_av']
        data_6 = data_lists(cols_6,ii)
        s = [data_2,data_3,data_4,data_5,data_6]
        for i in s:
            lists_1= lists_into_way(i, lists_1)
        q = 1
        for i in lists_1:
            i.append(q)
            q+=1
        lists.append(lists_1)

    lists = json.dumps(lists,indent=4)
    return HttpResponse(lists)

######面积图###########
def mj_func_data(col,num):
    '''
    :param num: 5000
    :param col: 'e91ge01ap_av'
    :return:
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])

    dates = []  # time
    datas = []  # real
    datas_p = []  # predict
    n = 0
    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        cur_time = lis['time']
        a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))

        # 存上一个点的数据,如果预测值不存在，则取上一个时间点的数据
        if a == []:
            cur_time -= 1
            a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
            if a == []:
                cur_time -= 1
                a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
                if a ==[]:
                   datas_p.append(0)
                else:
                    datas_p.append(a[0][col])
            else:
                datas_p.append(a[0][col])
        else:
            datas_p.append(a[0][col])

        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])

        datas.append(lis[col])
    # 参考：datas_p = [878.263, 879.253, 879.536, 879.68, 880.258]
    datas_p = datas_p[::-1]  # 反序
    datas = datas[::-1]
    dates = dates[::-1]
    lists = json.dumps([dates, datas, datas_p], indent=4)
    return lists


###### 面积图——1 #######
def mianji_data(request):
    lists = mj_func_data('e91ge01ap_av',1000)
    return HttpResponse(lists)

def mianji_update(request):
    lists = mj_func_data('e91ge01ap_av',1)
    return HttpResponse(lists)

###### 面积图——2 #######
def mianji_data_2(request):
    lists = mj_func_data('b01te01a_av',1000)
    return HttpResponse(lists)
#
def mianji_update_2(request):
    lists = mj_func_data('b01te01a_av',1)
    return HttpResponse(lists)
###### 面积图——3 #######
def mianji_data_3(request):
    lists = mj_func_data('t1amtp_av',1000)
    return HttpResponse(lists)

def mianji_update_3(request):
    lists = mj_func_data('t1amtp_av',1)
    return HttpResponse(lists)
###### 面积图——4 #######
def mianji_data_4(request):
    lists = mj_func_data('am52sig1001_av',1000)
    return HttpResponse(lists)

def mianji_update_4(request):
    lists = mj_func_data('am52sig1001_av',1)
    return HttpResponse(lists)
###### 面积图——5 #######
def mianji_data_5(request):
    lists = mj_func_data('am53sig7001_av',1000)
    return HttpResponse(lists)

def mianji_update_5(request):
    lists = mj_func_data('am53sig7001_av',1)
    return HttpResponse(lists)
###### 面积图——6 #######
def mianji_data_6(request):
    lists = mj_func_data('t1amtp_av',5000)
    return HttpResponse(lists)

def mianji_update_6(request):
    lists = mj_func_data('t1amtp_av',2)
    return HttpResponse(lists)
########### 我是分割线##########

########  关系图 ###############
def gx_func_data(cols):
    '''

    :param cols:  ['AM24SIG0306_AV','  ' ]
    :return:
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', cols[0])[:2000])
    dates = []  # time
    datas_1 = []  #  datas_1
    datas_2 = []  #  datas_2

    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        a = list(Sfhd130Cols.objects.values('time', cols[1]).filter(time=lis['time']))
        # 存上一个点的数据,如果预测值不存在，则取上一个时间点的数据
        for i in a:
            datas_2.append(i[cols[1]])
        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])
        datas_1.append(lis[cols[0]])
    dates = dates[::-1]
    datas_1 = datas_1[::-1]
    datas_2 = datas_2[::-1]
    lists = json.dumps([dates,datas_1,datas_2],indent=4)
    return HttpResponse(lists)

def guanxi_data(request):
    cols = ['am24sig0306_av','am23sig0202_av']
    lists = gx_func_data(cols)
    return HttpResponse(lists)

def model_css(request):
    if request == 'GET':
        return render(request,'charts/model_css.html')


# 解决 预测值在前面的问题  预测值加一个delt T . line_data_1 [ ] + line_data_2 [ ] ==>  line [ ]
def func_2_data_2(col,num,delt):
    '''

    :param col:
    :param num:
    :param delt: 点个数
    :return:
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])

    dates = []  # time
    datas = []  # real
    datas_p = []  # predict
    n = 0
    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        cur_time = lis['time']+delt*3
        a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))

        #存上一个点的数据,如果预测值不存在，则取上一个时间点的数据
        if a ==[]:
            cur_time -= delt
            a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
            if a==[]:
                cur_time -= delt
                a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
                if a==[]:
                    datas_p.append(0)
                else:
                    datas_p.append(a[0][col])
            else:
                datas_p.append(a[0][col])
        else:
            datas_p.append(a[0][col])

        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])

        datas.append(lis[col])
    # 参考：datas_p = [878.263, 879.253, 879.536, 879.68, 880.258]
    datas_p = datas_p[::-1]  # 反序
    datas = datas[::-1]
    dates = dates[::-1]
    lists = [dates, datas,datas_p]
    return lists

def func_2_update_2(col,num,delt):
    '''

    :param col:
    :param delt: 点的个数
    :return:
    '''
    lists = list(Sfhd130Cols.objects.order_by('-time').values('time', col)[:num])

    dates = []  # time
    datas = []  # real
    datas_p = []  # predict
    n = 0
    for lis in lists:
        # datas_p.append(list(SfhdPredictDataTest.objects.values('time','e91ge01ap_av').filter(time=lis['time']))[0]['e91ge01ap_av'])
        cur_time = lis['time']+delt*3
        a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
        if a ==[]:
            cur_time -= delt
            a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
            if a==[]:
                cur_time -= delt
                a = list(SfhdPredictDataTest.objects.values('time', col).filter(time=cur_time))
                if a==[]:
                    datas_p.append(0)
                else:
                    datas_p.append(a[0][col])
            else:
                datas_p.append(a[0][col])
        else:
            datas_p.append(a[0][col])
        lis['time'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(lis['time']))
        dates.append(lis['time'])
        datas.append(lis[col])
    # 参考：datas_p = [878.263, 879.253, 879.536, 879.68, 880.258]
    datas_p = datas_p[::-1]  # 反序
    datas = datas[::-1]
    dates = dates[::-1]
    lists = [dates, datas, datas_p]
    return lists

#####预测参数 折线图########
def charts_10_datas(request):
    '''

    :param cols: [ '  '  , '  ' , '  ' , '  ']
    :param num:
    :return:  [ [ ] , [ ] , [ ] ]
    '''
    delt = 3
    lists_1 = func_2_data_2('e91ge01ap_av', 100 , delt)
    lists_2 = func_2_data_2('b01te01a_av', 100 , delt)
    lists_3 = func_2_data_2('t1amtp_av', 100 , delt)
    lists_4 = func_2_data_2('am52sig1001_av',100 , delt)
    lists_5 = func_2_data_2('am53sig7001_av', 100 , delt)

    lists = json.dumps([lists_1,lists_2,lists_3,lists_4,lists_5],indent=4)
    return HttpResponse(lists)


def charts_10_update(request):
    '''

    :param cols: [ '  '  , '  ' , '  ' , '  ']
    :param num:
    :return:  [ [ ] , [ ] , [ ] ]
    '''
    delt = 3
    lists_1 = func_2_update_2('e91ge01ap_av',1,delt)
    lists_2 = func_2_update_2('b01te01a_av' ,1,delt)
    lists_3 = func_2_update_2('t1amtp_av',1,delt)
    lists_4 = func_2_update_2('am52sig1001_av',1,delt)
    lists_5 = func_2_update_2('am53sig7001_av',1,delt)

    lists = json.dumps([lists_1, lists_2, lists_3, lists_4, lists_5],indent=4)
    return HttpResponse(lists)


#############################
#####网页设计#########
#######################
#注册
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect
@csrf_exempt
def register_view(req):
    context = {}
    if req.method =='POST':
        form = UserForm(req.POST)
        if form.is_valid():
            #获取表单数据
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            # 判断用户是否存在
            user = auth.authenticate(username=username,password=password)
            if user:
                context['userExit']=True
                return render(req,'charts/register.html',context)

            #添加到数据库
            user = User.objects.create_user(username=username,password=password)
            user.save()

            #添加到session
            req.session['username'] = username
            #调用auth登录
            auth.login(req,user)
            #重定向
            return redirect('/')
        else:
            context = {'isLogin':False}
        return render(req,'charts/register.html',context)

#登录
@csrf_exempt
def login_view(req):
    context = {}
    if req.method == 'POST':
        form = UserForm(req.POST)
        if form.is_valid():
            #获取用户密码
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            #获取表单数据与数据库对比
            user = authenticate(username=username,password=password)
            if user:
                auth.login(req,user)
                req.session['username'] = username
                return redirect('charts/page/index.html')
            else:
                context = {'isLogin':False,'pawd':False}
                return render(req,'charts/login.html',context)
    else:
        context = {'isLogin':False,'pawd':True}
    return render(req,'charts/login.html',context)

#登出
def logout_view(req):
    #清理cookies保存username
    auth.logout(req)
    return redirect('/')
#chart
def page_chart(req):
    return render(req,'charts/page/chart.html')
def page_index(req):
    return render(req,'charts/page/index.html')



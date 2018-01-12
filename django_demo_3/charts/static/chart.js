/**
 * Created by Administrator on 2018/1/11.
 */
Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
//表格数据
document.write('<script src="/static/table_data/table_data_5.js"><\/scr'+'ipt>');
document.write('<script src="/static/table_data/table_data_4.js"><\/scr'+'ipt>');
document.write('<script src="/static/table_data/table_data_3.js"><\/scr'+'ipt>');
document.write('<script src="/static/table_data/table_data_2.js"><\/scr'+'ipt>');
document.write('<script src="/static/table_data/table_data.js"><\/scr'+'ipt>');

var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据

var timeData = [
    '2009/6/12 2:00',
];

var option = {
    title: {
        text: '电厂参数预测',
        x: 'center'
    },

    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            },

        },
        show:true,
        formatter: function (v) {
            var arr = []
            arr.push( v[0].axisValue);
            arr.push('<div style="height: 10px"></div>');
            for(var i=0,len = v.length;i<len;i++){
              arr.push(v[i].marker);
              arr.push(v[i].seriesName);
              arr.push(' : ');
              arr.push(v[i].value);
              arr.push('<div style="height: 10px"></div>');
            }
            return arr.join('');
        }

    },
    legend: {
        type:'scroll',
        data:[
            '发电机有功功率参数 (real)','发电机有功功率参数 (predict)',
            '炉主给水温度参数 (real)','炉主给水温度参数 (predict)',
            '主汽压力参数 (real)','主汽压力参数 (predict)'
        ],
        //orient: 'vertical',
        right: '0px',
        top:'4%',
        height:'30',
        textStyle:{
            color:['black'],
            fontSize:12
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'},

    },
    grid: [{
        left: '10%',
        right:'5%',
        top:'11%',
        height: '22%'
    },
        {
        left: '10%',
        right:'5%',
        top: '40%',
        height: '22%'
      }, {
        left: '10%',
        right:'5%',
        top: '69%',
        height: '22%'
    }],
    xAxis : [
        {
            type:'category',
            boundaryGap : false,
            data:[],
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            data: [],
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
        },
        {
            gridIndex: 2,
            type : 'category',
            boundaryGap : false,
            data: [],
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
        }
    ],
    yAxis : [
        {
            name:'发电机有功功率',
            // itemStyle:{
            //     textStyle:{color: ['black'],},
            // },
            boundaryGap:[0,'100%'],
            type:'value',
            min:function (value) {
                return (value.min - 5).toFixed(2);

            },
            max:function (value) {
                return (value.max+5).toFixed(2);
            },
            splitLine : {
                show:false,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
            nameTextStyle:{
                color:['black'],
            }
        },
        {
            name:'3号炉主给水温度',
            gridIndex: 1,
            boundaryGap: [0, '100%'],
            type: 'value',
            min: function (value) {
                return (value.min - 2.5).toFixed(2);
            },
            max: function (value) {
                return (value.max + 2.5).toFixed(2);
            },
            splitLine : {
                show:false,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
            nameTextStyle:{
                color:['black'],
            }
        },
        {
            name:'主气压力',
            gridIndex: 2,
            boundaryGap:[0,'100%'],
            type:'value',
            min:function (value) {
                return (value.min - 2).toFixed(2);
            },
            max:function (value) {
                return  (value.max +1).toFixed(2);
            },
            splitLine : {
                show:false,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            axisLine:{
                lineStyle:{
                    color:['orange'],

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black'],
                }
            },
            nameTextStyle:{
                color:['black'],
            }
        }
    ],
    series : [
        {
            smooth:true,
            name:'发电机有功功率参数 (real)',
            type:'line',
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#FF8F33',
                    }
                }
            },
            data:[],
        },
        {
            smooth:true,
            name:'发电机有功功率参数 (predict)',
            type:'line',
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2E0344',
                    }
                }
            },
            data:[],
        },
        {
            smooth:true,
            name:'炉主给水温度参数 (real)',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#fe6553',
                    }
                }
            },
            data:[],
        },
        {
            smooth:true,
            name:'炉主给水温度参数 (predict)',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#1d6478',
                    }
                }
            },
            data:[],
        },
        {
            smooth:true,
            name:'主汽压力参数 (real)',
            type:'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#0080ff',
                    }
                }
            },
            data:[],
        },
        {
            smooth:true,
            name:'主汽压力参数 (predict)',
            type:'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#05a206',
                    }
                }
            },
            data:[],
        },
    ]
};
myChart.showLoading();

var data_0 = [];
var data_1 = [];
var data_1_p = [];
var data_2 = [];
var data_2_p = [];
var data_3 = [];
var data_3_p = [];

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var shifN = 4;
var currentTime ;
var currentTime4;
var currentTime5;
function update() {
    $.ajax({
        type:"get",
        url: "/charts_10_update/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (updatas) {
            updatas = eval(updatas);
            var temp ;
            if(updatas){
                data_0.shift();
                temp = updatas[0][0][0];
                currentTime = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                temp = new Date(new Date(temp).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");

                data_0.push(temp);
                data_1.shift();
                data_1.push(updatas[0][1][0]);
                data_1_p.shift();

                data_1_p.push(updatas[0][2][0]);
                data_2.shift();
                data_2.push(updatas[1][1][0]);
                data_2_p.shift();

                data_2_p.push(updatas[1][2][0]);
                data_3.shift();
                data_3.push(updatas[2][1][0]);
                data_3_p.shift();

                data_3_p.push(updatas[2][2][0]);
                myChart.setOption({
                    xAxis: [
                        {
                            data: data_0,
                        },
                        {
                            data: data_0,
                        },
                        {
                            data: data_0,
                        }
                    ],
                    series: [
                        {
                            name: "发电机有功功率参数 (real)",
                            data: data_1,
                            markLine: {
                                animation:false,
                                symbol: 'none',
                                data: [{
                                    xAxis: currentTime,
                                    label: {
                                        normal: {
                                            position:'middle',
                                            formatter: '当前时间: {c}'
                                        }
                                    },

                                }]
                            }
                        },
                        {
                            name: "发电机有功功率参数 (predict)",
                            data: data_1_p,

                        },
                        {
                            name: "炉主给水温度参数 (real)",
                            data: data_2,
                            markLine: {
                                animation:false,
                                symbol: 'none',
                                data: [{
                                    xAxis: currentTime,
                                    label: {
                                        normal: {
                                            position:'middle',
                                            formatter: '当前时间: {c}'
                                        }
                                    }
                                }]
                            }
                        },
                        {
                            name: "炉主给水温度参数 (predict)",
                            data: data_2_p,
                        },
                        {
                            name: "主汽压力参数 (real)",
                            data: data_3,
                            markLine: {
                                animation:false,
                                symbol: 'none',
                                data: [{
                                    xAxis: currentTime,
                                    lineStyle: {
                                        color: 'red',
                                    },
                                    label: {
                                        normal: {
                                            position:'middle',
                                            formatter: '当前时间: {c}'
                                        }
                                    }
                                }]
                            }
                        },
                        {
                            name: "主汽压力参数 (predict)",
                            data: data_3_p,
                        }
                    ]
                });
            }
        }
    });
}
//折线图1，2，3
$.ajax({
    type:"get",
    // async:true,
    url: "/charts_10_datas/",
    data:{},
    dataType:"json",
    cache:false,
    success:function(result){
        if(result){
            result= eval(result);


            data_0 = data_0.concat(result[0][0]);// 时间

            data_1      = data_1.concat(result[0][1]);    // 功率
            data_1_p    = data_1_p.concat(result[0][2]);  // 功率

            data_2      =  data_2.concat(result[1][1]);    // 温度
            data_2_p    = data_2_p.concat(result[1][2]);  // 温度

            data_3      = data_3.concat(result[2][1]);    // 气压
            data_3_p    = data_3_p.concat(result[2][2]);  // 气压

            // 向右平移shiftN个点
            for (var i = 0; i < data_0.length; i++) {
                data_0[i] = new Date(new Date(data_0[i]).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");

            }
            // 实际值后退shiftN个点
            for(var j = 0;j<shifN; j++) {
                data_1.shift();
                data_2.shift();
                data_3.shift();
            }

            myChart.hideLoading();
            setInterval("update()",3000);
        }
    },
    error:function(errorMsg){
        alert("图表请求数据失败！");
        myChart.hideLoading();
    }
})

//折线图4--高温再热器出口管屏壁温最大值
/**
 *
 */
var Chart_4 = echarts.init(document.getElementById('main_4'));
Chart_4.setOption({
    title:{

        text:'AM52SIG1001_AV',
        // subtext:' 高温再热器出口管屏壁温最大值',
        textStyle:{
            color: ['black'],

        },
        subtextStyle:{
            color:['black']
        },
        padding:[10,0,0,10]

    },

    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765',

            }
        },
        show:true,

    },
    legend: {

        data:['参数 (real)','参数 (predict)'],
        x: 'right',
        textStyle:{
            color:['black'],
            fontSize:12
        },
        padding:[10,10,0,0]
    },

    xAxis:{
        type:'category',
        boundaryGap:false,
        data:[],

        splitLine: {
            show: false,
            lineStyle:{
                color:['orange'],
            },
        },
        axisLine:{
            lineStyle:{
                color:['orange'],

            }
        },
        axisLabel:{
            textStyle:{
                color:['black'],
            }
        }
    },
    yAxis:{
        boundaryGap:[0,'100%'],
        type:'value',
        min:function (value){

            return (value.min-5).toFixed(2);

        },
        max:function (value) {

            return (value.max+5).toFixed(2);

        },
        splitLine: {
            show: false,
            lineStyle:{
                color:['orange'],
            },
        },
        axisLine:{
            lineStyle:{
                color:['orange'],

            },

        },
        axisLabel:{
            textStyle:{
                color:['black'],
            }
        },

    },
    series:[
        {
            smooth:true,
            name:'参数 (real)',
            type:'line',
            data:[],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#FF4B33',
                    }
                }
            },
        },
        {
            smooth:true,
            name:'参数 (predict)',
            type:'line',
            data:[],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#04400E',
                    }
                }
            },
        },
    ]
});
Chart_4.showLoading();
var dates_4 = [];
var datas_4 = [];
var datas_4_p = [];

function update_4() {
    $.ajax({
        type:"get",
        url: "/charts_update_4/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (updatas_4) {
            updatas_4 = eval(updatas_4);
            var temp;
            if(updatas_4){
                for(var n=0;n<updatas_4[0].length;n++){
                    dates_4.shift();
                    temp = updatas_4[0][0];
                    currentTime4 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                    temp = new Date(new Date(temp).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");
                    dates_4.push(temp);

                    datas_4.shift();
                    datas_4.push(updatas_4[1][n]);
                    datas_4_p.shift();
                    datas_4_p.push(updatas_4[2][n]);
                }
                Chart_4.setOption({
                    xAxis:{
                        data:dates_4
                    },
                    series:[
                        {
                            name:"参数 (real)",
                            data:datas_4,
                            markLine: {
                                animation:false,
                                symbol: 'none',
                                data: [{
                                    xAxis: currentTime4,
                                    label: {
                                        normal: {
                                            position:'middle',
                                            formatter: '当前时间: {c}'
                                        }
                                    }
                                }],
                            }
                        },
                        {
                            name:"参数 (predict)",
                            data:datas_4_p,
                        }

                    ]});
            }
        }
    });
}
$.ajax({
    type:"get",
    // async:true,
    url: "/charts_data_4/",
    data:{},
    dataType:"json",
    cache:false,
    success:function(result_4){
        if(result_4){
            result_4= eval(result_4);

            // for(var i=0;i<result_4[0].length;i++) {
            //
            //     dates_4.push(result_4[0][i]);
            //     datas_4.push(result_4[1][i]);
            //     datas_4_p.push(result_4[2][i]);
            //     // result.shift();
            // }
            //时间
            dates_4 = result_4[0];
            //真实值
            datas_4 = result_4[1];
            //预测值
            datas_4_p = result_4[2];
            // 向右平移shiftN个点
            for (var i = 0; i < dates_4.length; i++) {
                //时间轴上整体往前了30s
                dates_4[i] = new Date(new Date(dates_4[i]).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");

            }
            // 实际值去掉shiftN个值
            for(var j = 0;j<shifN; j++) {
                datas_4.shift();
            }
            Chart_4.hideLoading();
            setInterval("update_4()",3000);
        }
    },
    error:function(errorMsg){
        alert("图表请求数据失败！");
        Chart_4.hideLoading();
    }
})
//折线图5-低温再热器出口管屏壁温最大值
/**
 * Created by Administrator on 2017/12/20.
 */
var Chart_5 = echarts.init(document.getElementById('main_5'));
Chart_5.setOption({
    title:{

        text:'AM53SIG7001_AV',

        // text:'E91GE01AP_AV',
        // subtext : '低温再热器出口管屏壁温最大值',
        textStyle:{color: ['black'],},
        subtextStyle:{
            color:['black']
        },
        padding:[10,0,0,10]

    },

    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        },
        show:true,

    },
    legend: {

        data:['参数 (real)','参数 (predict)'],
        x: 'right',
        textStyle:{
            color:['black'],
            fontSize:12
        },
        padding:[10,10,0,0]

    },

    xAxis:{
        type:'category',
        boundaryGap:false,
        data:[],
        axisLabel : {
            rotate: 15,
        },
        splitLine: {
            show: false,
            lineStyle:{
                color:['orange'],
            },
        },
        axisLine:{
            lineStyle:{
                color:['orange'],

            }
        },
        axisLabel:{
            textStyle:{
                color:['black'],
            }
        }
    },
    yAxis:{
        boundaryGap:[0,'100%'],
        type:'value',
        min:function (value) {

            return (value.min-5).toFixed(2);

        },
        max:function (value) {

            return (value.max+5).toFixed(2);

        },
        splitLine: {
            show: false,
            lineStyle:{
                color:['orange'],
            },
        },
        axisLine:{
            lineStyle:{
                color:['orange'],

            },

        },
        axisLabel:{
            textStyle:{
                color:['black'],
            }
        },

    },
    series:[
        {
            smooth:true,
            name:'参数 (real)',
            type:'line',
            data:[],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#FF7F33',
                    }
                }
            },
        },
        {
            smooth:true,
            name:'参数 (predict)',
            type:'line',
            data:[],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#051E31',
                    }
                }
            },
        },
    ]
});
Chart_5.showLoading();
var date_5 = [];
var data_5 = [];
var data_5_p = [];

function update_5() {
    $.ajax({
        type:"get",
        url: "/charts_update_5/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (updatas) {
            updatas = eval(updatas);
            if(updatas){
                for(var n=0;n<updatas[0].length;n++){
                    date_5.shift();;
                    temp = updatas[0][0];
                    currentTime5 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                    temp = new Date(new Date(temp).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");
                    date_5.push(temp);
                    data_5.shift();
                    data_5.push(updatas[1][n]);
                    data_5_p.shift();
                    data_5_p.push(updatas[2][n]);
                }
                Chart_5.setOption({
                    xAxis:{
                        data:date_5
                    },
                    series:[
                        {
                            name:"参数 (real)",
                            data:data_5,
                            markLine: {
                                animation:false,
                                symbol: 'none',
                                data: [{
                                    xAxis: currentTime5,
                                    label: {
                                        normal: {
                                            position:'middle',
                                            formatter: '当前时间: {c}'
                                        }
                                    }
                                }]
                            }
                        },
                        {
                            name:"参数 (predict)",
                            data:data_5_p,
                        },
                    ]});
            }
        }
    });
}
$.ajax({
    type:"get",
    // async:true,
    url: "/charts_data_5/",
    data:{},
    dataType:"json",
    cache:false,
    success:function(result){

        if(result){
           var result_5= eval(result);

            // for(var i=0;i<result[0].length;i++) {
            //
            //     date_5.push(result[0][i]);
            //     data_5.push(result[1][i]);
            //     data_5_p.push(result[2][i]);
            //     // result.shift();
            // }
            //时间
            date_5 = result_5[0];
            //真实值
            data_5 = result_5[1];
            //预测值
            data_5_p = result_5[2];
            // 向右平移shiftN个点
            for (var i = 0; i < date_5.length; i++) {
                //时间轴上整体往前了30s
                date_5[i] = new Date(new Date(date_5[i]).getTime() + 3000 * shifN ).format("MM-dd hh:mm:ss");

            }
            // 实际值去掉shiftN个值
            for(var j = 0;j<shifN; j++) {
                data_5.shift();
            }

            Chart_5.hideLoading();
            setInterval("update_5()",3000);
        }
    },
    error:function(errorMsg){
        alert("图表请求数据失败！");
        Chart_5.hideLoading();
    }
})
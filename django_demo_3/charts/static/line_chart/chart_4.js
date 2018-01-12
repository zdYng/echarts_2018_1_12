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
var shifN =4;
var dates_4 = [];
var datas_4 = [];
var datas_4_p = [];
var currentTime4;
function update_4() {
    $.ajax({
        type:"get",
        url: "/charts_update_4",
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
    url: '/charts_data_4',
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
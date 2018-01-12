/**
 * Created by Administrator on 2017/12/20.
 */
var Chart_5 = echarts.init(document.getElementById('main_5'));
    Chart_5.setOption({
        title:{

            text:'AM53SIG7001_AV',

            // text:'E91GE01AP_AV',
            subtext : '低温再热器出口管屏壁温最大值',
            textStyle:{color: ['black'],},
            subtextStyle:{
                color:['black']
            },

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
            }

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
    var shifN =4;
    var currentTime_5;

    function update_5() {
                    $.ajax({
                        type:"get",
                        url:"/charts_update_5/",
                        data:{},
                        datatype:"json",
                        cache:false,
                        success:function (updatas) {
                            updatas = eval(updatas);
                            if(updatas){
                                var temp;
                                    // for(var n=0;n<updatas[0].length;n++){
                                temp=updatas[0][0];
                                currentTime_5 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                                temp = new Date(new Date(temp).getTime()+3000*shifN).format("MM-dd hh:mm:ss");
                                date_5.shift();
                                date_5.push(temp);
                                data_5.shift();
                                data_5.push(updatas[1][0]);
                                data_5_p.shift();
                                data_5_p.push(updatas[2][0]);
                                    // }
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
                                                            xAxis: currentTime_5,
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
                                                    data:data_5_p,
                                                }

                                            ]
                                    });
                                }
                            }
                        });
                 }
    $.ajax({
        type:"get",
        // async:true,
        url:"/charts_data_5",
        data:{},
        dataType:"json",
        cache:false,
        success:function(result){

            if(result){
                result= eval(result);

                for(var i=0;i<result[0].length;i++) {

                        date_5.push(result[0][i]);
                        data_5.push(result[1][i]);
                        data_5_p.push(result[2][i]);
                        // result.shift();
                }
                for(var i=0;i<date_5.length;i++){
                    date_5[i]=new Date(new Date(date_5[i]).getTime() + 3000* shifN).format("MM-dd hh:mm:ss")
                }
                for(var j=0;j<shifN;j++){
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
/**
 * Created by Administrator on 2017/12/20.
 */
var Chart_6 = echarts.init(document.getElementById('main_6'));
    Chart_6.setOption({
        title:{
            text:'E91GE01AP_AV',
            subtext : '发电机无功功率',
            textStyle:{color: ['black'],},
            subtextStyle:{
                color:['black']
            },
        },
       grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true,
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
                return (value.min-0.14).toFixed(2);

            },
            max:function (value) {
                return (value.max+0.12).toFixed(2);

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
                            color:'#06042F',
                        }
                    }
                },
        },
        ]
    });
    Chart_6.showLoading();
    var date_6 = [];
    var data_6 = [];
    var data_6_p = [];

    function update_6() {
                    $.ajax({
                        type:"get",
                        url:"/charts_update_6/",
                        data:{},
                        datatype:"json",
                        cache:false,
                        success:function (updatas) {
                            updatas = eval(updatas);
                            if(updatas){
                                    for(var n=0;n<updatas[0].length;n++){
                                        date_6.shift();
                                        date_6.push(updatas[0][n]);
                                        data_6.shift();
                                        data_6.push(updatas[1][n]);
                                        data_6_p.shift();
                                        data_6_p.push(updatas[2][n]);
                                    }
                                    Chart_6.setOption({
                                            xAxis:{
                                                data:date_6
                                            },
                                            series:[
                                                {
                                                    name:"参数 (real)",
                                                    data:data_6,
                                                },
                                                {
                                                    name:"参数 (predict)",
                                                    data:data_6_p,
                                                },
                                            ]
                                    });
                                }
                            }
                        });
                 }
    $.ajax({
        type:"get",
        // async:true,
        url:"/charts_data_6",
        data:{},
        dataType:"json",
        cache:false,
        success:function(result){

            if(result){
                result= eval(result);

                for(var i=0;i<result[0].length;i++) {

                        date_6.push(result[0][i]);
                        data_6.push(result[1][i]);
                        data_6_p.push(result[2][i]);
                        // result.shift();



                }
                Chart_6.hideLoading();
                setInterval("update_6()",4000);
            }
        },
        error:function(errorMsg){
            alert("图表请求数据失败！");
            Chart_6.hideLoading();
        }
    })
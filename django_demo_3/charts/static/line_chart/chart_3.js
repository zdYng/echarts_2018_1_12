/**
 * Created by Administrator on 2017/12/20.
 */
var Chart_3 = echarts.init(document.getElementById('main_3'));
    Chart_3.setOption({
        title:{

            text:'T1AMTP_AV',
            subtext:'主汽压力',
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
                // value = value.toFixed(1);
                return (value.min - 2).toFixed(2);

            },
            max:function (value) {

                return  (value.max +1).toFixed(2);

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
                            color:'#FF8F33',
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
                            color:'#2E0344',
                        }
                    }
                },
        },
        ]
    });
    Chart_3.showLoading();
    var date_3 = [];
    var data_3 = [];
    var data_3_p = [];
    var shifN = 4;
    var currentTime_3 ;
    function update_3() {
                    $.ajax({
                        type:"get",
                        url:"/charts_update_3/",
                        data:{},
                        datatype:"json",
                        cache:false,
                        success:function (updatas_3) {
                            updatas_3 = eval(updatas_3);
                            if(updatas_3){
                                var temp;
                                    // for(var n=0;n<updatas_3[0].length;n++){
                                        date_3.shift();
                                        temp = updatas_3[0][0];
                                        currentTime_3 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                                         temp = new Date(new Date(temp).getTime()+3000*shifN).format("MM-dd hh:mm:ss");
                                        date_3.push(temp);
                                        // date_3.push(updatas_3[0][0]);
                                        data_3.shift();
                                        data_3.push(updatas_3[1][0]);
                                        data_3_p.shift();
                                        data_3_p.push(updatas_3[2][0])
                                    // }
                                    Chart_3.setOption({
                                            xAxis:{
                                                data:date_3
                                            },
                                            series:[
                                                {
                                                    name:"参数 (real)",
                                                    data:data_3,
                                                    markLine: {
                                                        animation:false,
                                                        symbol: 'none',
                                                        data: [{
                                                            xAxis: currentTime_3,
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
                                                    data:data_3_p,
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
        url:"/charts_data_3",
        data:{},
        dataType:"json",
        cache:false,
        success:function(result_3){

            if(result_3){
                result_3= eval(result_3);

                for(var i=0;i<result_3[0].length;i++) {

                        date_3.push(result_3[0][i]);
                        data_3.push(result_3[1][i]);
                        data_3_p.push(result_3[2][i]);
                        // result.shift();
                }
                for (var i = 0; i<date_3.length;i++){
                    date_3[i] = new Date(new Date(date_3[i]).getTime() + 3000* shifN).format("MM-dd hh:mm:ss")
                }
                for (var j = 0 ; j < shifN; j++){
                    data_3.shift()
                }
                Chart_3.hideLoading();
                setInterval("update_3()",3000);
            }
        },
        error:function(errorMsg){
            alert("图表请求数据失败！");
            Chart_3.hideLoading();
        }
    })
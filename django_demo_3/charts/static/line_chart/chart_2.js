var Chart_2 = echarts.init(document.getElementById('main_2'));
    Chart_2.setOption({
        title:{

            text:'B01TE01A_AV',
            subtext : '3号炉主给水温度_1',
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
                 rotate: 15
             },
            splitLine: {
                show: false,
                lineStyle:{
                    color:['orange']
                },
            },
            axisLine:{
                lineStyle:{
                    color:['orange']

                }
            },
            axisLabel:{
                textStyle:{
                    color:['black']
                }
            }
        },
        yAxis:{
            boundaryGap:[0,'100%'],
            type:'value',
            min:function (value) {
                // value = value.toFixed(1);
                return (value.min-2.5).toFixed(2);
            },
            max:function (value) {
                // value = value.toFixed(1);
                return (value.max+2.5).toFixed(2);
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
                            color:'#FF7B33',
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
                            color:'#093A11',
                        }
                    }
                },
        },
        ]
    });
    Chart_2.showLoading();
    var date_2 = [];
    var data_2 = [];
    var data_2_p = [];
    var shifN = 4;
    var currentTime_2 ;


    function update_2() {
                    $.ajax({
                        type:"get",
                        url:"/charts_update_2/",
                        data:{},
                        datatype:"json",
                        cache:false,
                        success:function (updatas) {
                            updatas = eval(updatas);
                            if(updatas){
                                var temp;

                                    // for(var n=0;n<updatas[0].length;n++){
                                temp = updatas[0][0];
                                currentTime_2 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                                temp = new Date(new Date(temp).getTime()+3000*shifN).format("MM-dd hh:mm:ss");

                                date_2.shift();
                                date_2.push(temp);
                                data_2.shift();
                                data_2.push(updatas[1][0]);
                                data_2_p.shift();
                                data_2_p.push(updatas[2][0]);
                                    // }
                                    Chart_2.setOption({
                                            xAxis:{
                                                data:date_2
                                            },
                                           series:[
                                                {
                                                    name:"参数 (real)",
                                                    data:data_2,
                                                    markLine: {
                                                        animation:false,
                                                        symbol: 'none',
                                                        data: [{
                                                            xAxis: currentTime_2,
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
                                                    data:data_2_p,
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
        url:"/charts_data_2",
        data:{},
        dataType:"json",
        cache:false,
        success:function(result){
            var datas=result;
            if(result){
                result= eval(result);

                for(var i=0;i<result[0].length;i++) {

                        date_2.push(result[0][i]);
                        data_2.push(result[1][i]);
                        data_2_p.push(result[2][i]);
                        // result.shift();
                }

                for(var i =0;i<date_2.length;i++){
                    date_2[i]=new Date(new Date(date_2[i]).getTime()+3000*shifN).format("MM-dd hh:mm:ss")
                }
                for (var j=0;j<shifN;j++){
                    data_2.shift();
                }

                Chart_2.hideLoading();
                setInterval("update_2()",3000);
            }
        },
        error:function(errorMsg){
            alert("图表请求数据失败！");
            Chart_2.hideLoading();
        }
    })
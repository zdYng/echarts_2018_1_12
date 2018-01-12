var Chart_1 = echarts.init(document.getElementById('main'));
    Chart_1.setOption({
        title:{

            text:'E91GE01AP_AV',
            subtext : '发电机有功功率',
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
        axisPointer: {
        link: {xAxisIndex: 'all'},

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
            min:function (value) {
                // value = value.toFixed(1);
                return (value.min - 5).toFixed(2);

            },

            // max:function (value) {
            //     return value.max + 0.5;
            //
            // },
            max:function (value) {
                // value = value.toFixed(1)
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
                            color:'#FF4B33'
                        }
                    }
                }

        },
            {
                smooth:true,
                name:'参数 (predict)',
                type:'line',
                data:[],
                itemStyle:{
                    normal:{
                        lineStyle:{
                            color:'#04400E'
                        }
                    }
                }
        },
        ]
    });
    Chart_1.showLoading();
    var date_1 = [];
    var data_1 = [];
    var datas_1 = [];
    var data_1_p = [];
    var updatas_1 = [];
    var shifN = 4;
    var currentTime_1;
    function update_1() {
                    $.ajax({
                        type:"get",
                        url:"/charts_update/",
                        data:{},
                        datatype:"json",
                        cache:false,
                        success:function (updatas) {
                            updatas = eval(updatas);
                            if(updatas){
                                var temp;
                                var updatas_1 = updatas;
                                    // for(var n=0;n<updatas_1[0].length;n++){
                                date_1.shift();
                                temp = updatas_1[0][0];
                                currentTime_1 = new Date(new Date(temp).getTime()).format("MM-dd hh:mm:ss");
                                temp = new Date(new Date(temp).getTime()+3000*shifN).format("MM-dd hh:mm:ss");

                                date_1.push(temp);
                                // date_1.push(updatas_1[0][0]);
                                data_1.shift();
                                data_1.push(updatas_1[1][0]);
                                data_1_p.shift();
                                data_1_p.push(updatas_1[2][0]);
                                    // }
                                    Chart_1.setOption({
                                            xAxis:{
                                                data:date_1
                                            },
                                            series:[
                                                {
                                                    name:"参数 (real)",
                                                    data:data_1,
                                                    markLine: {
                                                        animation:false,
                                                        symbol: 'none',
                                                        data: [{
                                                            xAxis: currentTime_1,
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
                                                    data:data_1_p,
                                                }

                                            ]
                                    });
                                    // $("#sum").click(function () {
                                    //     $.ajax({
                                    //         type:'post',
                                    //         async:false,
                                    //         url:'/charts_data',
                                    //         data:{},
                                    //         timeout:500,
                                    //         cache:false,
                                    //         success:function (btn_datas) {
                                    //             if(btn_datas){
                                    //                 date_1 = [];
                                    //                 datas_1 = [];
                                    //                 data_1_p=[];
                                    //                 btn_datas = eval(btn_datas)
                                    //                 for(var i=0;i<btn_datas[0].length;i++){
                                    //                        date_1.push(btn_datas[0][i]);
                                    //                        data_1.push(btn_datas[1][i]);
                                    //                        data_1_p.push(btn_datas[2][i]);
                                    //                 }
                                    //                 setInterval("update_1()",3000);
                                    //             }
                                    //         }
                                    //     })
                                    // })

                                }
                            }
                        });
                 }
    $.ajax({
        type:"get",
        // async:true,
        url:"/charts_data",
        data:{},
        dataType:"json",
        cache:false,
        success:function(result){
            if(result){
                result= eval(result);
                datas_1 = result;
                for(var i=0;i<datas_1[0].length;i++) {
                        date_1.push(datas_1[0][i]);
                        data_1.push(datas_1[1][i]);
                        data_1_p.push(datas_1[2][i]);
                        // result.shift();
                }
                //向右平移shifN个点
                for (var i =0;i<date_1.length;i++)
                {
                    date_1[i]=new Date(new Date(date_1[i]).getTime() + 3000* shifN).format("MM-dd hh:mm:ss")
                }
                //实际值后退shiftN个点
                for (var j =0;j<shifN;j++){
                    data_1.shift();
                }
                Chart_1.hideLoading();
                setInterval("update_1()",3000);
            }
        },
        error:function(errorMsg){
            alert("图表请求数据失败！");
            Chart_1.hideLoading();
        }
    })
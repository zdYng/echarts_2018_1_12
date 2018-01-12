/**
 * Created by Administrator on 2017/12/17.
 */
// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
$.ajax({
    type: "get",
    url: "/leida_data",
    data: {},
    dataType: "json",
    cache: false,
    success: function (result) {
        if (result) {
            result = eval(result)
            var myChart_3 = echarts.init(document.getElementById('leida'));
            var lineStyle = {
                normal: {
                    width: 1,
                    opacity: 0.5
                }
            };

            myChart_3.setOption({
                backgroundColor: '#161627',
                title: {
                    text: '6参数 - 雷达图',
                    left: 'center',
                    textStyle: {
                        color: '#eee'
                    }
                },
                legend: {
                    bottom: 5,
                    data: ['time_1', 'time_2', 'time_3'],
                    itemGap: 20,
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    selectedMode: 'single'
                },
                // visualMap: {
                //     show: true,
                //     min: 0,
                //     max: 20,
                //     dimension: 6,
                //     inRange: {
                //         colorLightness: [0.5, 0.8]
                //     }
                // },
                radar: {
                    indicator: [
                        {name: 'am23sig0202_av', max: 620},
                        {name: 'b01te01a_av', max: 290},
                        {name: 't31pt04b_av', max: 3.5},
                        {name: 'e92vr01pv01_av', max: 260},
                        {name: 't31pt04b_av', max: 3.5},
                        {name: 'b06ft12aa_av', max: 430}
                    ],
                    shape: 'circle',
                    splitNumber: 5,
                    name: {
                        textStyle: {
                            color: 'rgb(238, 197, 102)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                            ].reverse()
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.5)'
                        }
                    }
                },
                series: [
                    {
                        name: 'time_1',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: result[0],
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: '#F9713C'
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: 'time_2',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: result[1],
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: '#B3E4A1'
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.05
                            }
                        }
                    },
                    {
                        name: 'time_3',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: result[2],
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: 'rgb(238, 197, 102)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.05
                            }
                        }
                    }
                ]
            });
                    }
                }
});

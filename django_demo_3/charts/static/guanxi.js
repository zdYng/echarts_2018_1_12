/**
 * Created by Administrator on 2017/12/23.
 */
var gx_chart = echarts.init(document.getElementById('guanxi'));
gx_chart.setOption({
    title: {
        text: '温差关系图',

    },

    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765',
            }
        }
    },
    legend: {
        data: ['A侧高过入口温度', 'A侧高再出口温度'],
        y: 'top',
        textStyle:{
                color:['black'],
                fontSize:12
            }


    },
    dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {onZero: false},
            data: [],

        }
    ],
    yAxis: [
        {
            name: 'A侧高过入口温度',
            type: 'value',
            max: 'dataMax',
            min:'dataMin',
        },
        {
            name: 'A侧高再出口温度',
            nameLocation: 'start',
            max: 'dataMax',
             min:'dataMin',
            type: 'value',
            inverse: true
        }
    ],
    series: [
        {
            name: 'A侧高过入口温度',
            type: 'line',
            animation: false,
            areaStyle: {
                normal: {}
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            // markArea: {
            //     silent: true,
            //     data: [[{
            //         xAxis: '2009/9/12\n7:00'
            //     }, {
            //         xAxis: '2009/9/22\n7:00'
            //     }]]
            // },
            data: [],
        },
        {
            name: 'A侧高再出口温度',
            type: 'line',
            yAxisIndex: 1,
            animation: false,
            areaStyle: {
                normal: {}
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            // markArea: {
            //     silent: true,
            //     data: [[{
            //         xAxis: '2009/9/10\n7:00'
            //     }, {
            //         xAxis: '2009/9/20\n7:00'
            //     }]]
            // },
            data: [],
        }]
});
$.ajax({
    type:"get",
    url:"/guanxi_data",
    data:{},
    dataType:"json",
    cache:false,
    success:function (result) {
        if(result){
            result = eval(result);
            gx_chart.setOption({
                xAxis:{
                    data:result[0],
                },
                series:[
                    {
                        data:result[1],
                    },
                    {
                        data:result[2],
                    },
                    ]
            });


        }

    }

});

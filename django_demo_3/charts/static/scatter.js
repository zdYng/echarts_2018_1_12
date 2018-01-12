/**
 * Created by Administrator on 2017/12/15.
 */
$.ajax({
    type:"get",
    url:"/scatter_data",
    data: {},
    dataType:"json",
    cache:false,
    success:function (result) {
        if(result){
            result = eval(result)
            var myChart_5 = echarts.init(document.getElementById('scatter'));
myChart_5.setOption({
    title : {
        text: '两个时间区的样本分布',
        subtext: '抽样调查来自: MySQL 130Cols'
    },
    grid: {
        left: '3%',
        right: '3%',

        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                + params.value[0]+' '
                + params.value[1] ;
            }
            else {
                return params.seriesName + ' :<br/>'
                + params.name + ' : '
                + params.value + ' ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['时间区1','时间区2'],
        left: 'center'
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                // rotate:15,
                formatter: '{value}'+'\n'+'参数1:'+'\n'+'除氧器温度'
            },
            min:'dataMin',
            max:'dataMax',
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {

                formatter: '{value}'+'\n'+'参数2:'+'\n'+'磨煤机E出口温度设定'
            },
            min:'dataMin',
            max:'dataMax',

            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'时间区1',
            type:'scatter',
            data: result[0],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed',
                    }
                },
                data: [[{
                    name: '时间区1',
                    xAxis: 'min',
                    yAxis: 'min',
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    // { xAxis: 149.782 }
                ]
            }
        },
        {
            name:'时间区2',
            type:'scatter',
            data: result[1],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                },
                data: [[{
                    name: '时间区2',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    // { xAxis:  149.957 }
                ]
            }
        }
    ]
});
        }

    }
})


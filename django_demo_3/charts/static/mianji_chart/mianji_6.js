/**
 * Created by Administrator on 2017/12/21.
 */
/**
 * Created by Administrator on 2017/12/17.
 */
var mj_Chart_6 = echarts.init(document.getElementById('mianji_6'));
mj_Chart_6.setOption({

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
            boundaryGap:['20%','20%'],
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
                return value.min - 5;

            },

            // max:function (value) {
            //     return value.max + 0.5;
            //
            // },
            max:function (value) {
                return value.max+5;

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
     dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }, {
                    start: 0,
                    end: 100,
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
        series:[
            {
            smooth:true,
            name:'参数 (real)',
            type:'line',
            data:[]
        },
            {
            smooth:true,
            name:'参数 (predict)',
            type:'line',
            data:[]
        },
        ]
            });
var mj_date_6 = [];
var mj_data_6= [];
var mj_data_p_6 = [];
function update_mianji_6() {
     $.ajax({
        type:"get",
        url:"/mianji_update_6/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (updatas_4) {
            updatas_4 = eval(updatas_4);
            if (updatas_4) {
                var len = updatas_4.length;
                for (var n=0;n<len;n++){
                    // date_4.shift();
                    mj_date_6.push(updatas_4[0][n]);
                    // data_4.shift();
                    mj_data_6.push(updatas_4[1][n]);
                    // mjdata_p_4.push(updatas_4[2][n]);
                    mj_date_6.shift();
                    mj_data_6.shift();
                    // mjdata_p_4.shift();
                }
                mj_Chart_6.setOption({
                    xAxis:{
                        data:mj_date_6,
                    },
                    series:[{
                        name:'参数（e91ge01ap_av）',
                        data:mj_data_6,
                    },
                    //     {
                    //     name:'参数Predict（e91ge01ap_av）',
                    //     data:mjdata_p_4,
                    // },
                    ]
                })
            }
        }
    });

}

 $.ajax({
        type: "get",
        url: "/mianji_data_6",
        data: {},
        dataType: "json",
        cache: false,
        success: function (result) {
            if (result) {
                 result = eval(result);
                 mj_data_6 = result[1];
                 mj_date_6 = result[0];
                 mj_data_p_6 = result[2];
                 // mjdata_p_4 = result_4[2];
                // for(var i=0;i<result_4.length;i++){
                //     date_4.push(result_4[0][i]);
                //     data_4.push(result_4[1][i]);
                // }
                mj_Chart_6.setOption({
                    xAxis:{
                        data:mj_date_6
                    },
                    series:[
                        {

                        data:mj_data_6
                        },
                        {
                            data:mj_data_p_6
                        }

                        ]
                })
                // setInterval("update_mianji()",6000);


            }
        },
     error:function(errorMsg){
            alert("图表请求数据失败！");
            mj_Chart_6.hideLoading();
        }
    });
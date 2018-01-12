/**
 * Created by Administrator on 2017/12/17.
 */
var mj_Chart_1 = echarts.init(document.getElementById('mianji'));
mj_Chart_1.setOption({
                 title:{

            text:'E91GE01AP_AV',
            subtext : '发电机有功功率',
            textStyle:{color: ['black']},
            subtextStyle:{
                color:['black']
            }
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
            show:true

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

            splitLine: {
                show: false,
                lineStyle:{
                    color:['orange']
                }
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
                return (value.min - 5).toFixed(2);

            },
            max:function (value) {
                return (value.max+5).toFixed(2);

            },

            splitLine: {
                show: false,
                lineStyle:{
                    color:['orange']
                }
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
        }
        ]
            });
var mj_date_1 = [];
var mj_data_1 = [];
var mj_data_p_1 = [];
// function update_mianji() {
//      $.ajax({
//         type:"get",
//         url:"/mianji_update/",
//         data:{},
//         datatype:"json",
//         cache:false,
//         success:function (mj_updatas_1) {
//             mj_updatas_1 = eval(mj_updatas_1);
//             if (mj_updatas_1) {
//                 var len = mj_updatas_1[0].length;
//                 for (var n=0;n<len;n++){
//                     mj_date_1.push(mj_updatas_1[0][n]);
//                     mj_data_1.push(mj_updatas_1[1][n]);
//                     mj_data_p_1.push(mj_updatas_1[2][n]);
//                     mj_date_1.shift();
//                     mj_data_1.shift();
//                     mj_data_p_1.shift();
//
//                 }
//                 mj_Chart_1.setOption({
//                     xAxis:{
//                         data:mj_date_1,
//                     },
//                     series:[
//                         {
//                         // name:'参数（e91ge01ap_av）',
//                             data:mj_data_1,
//                         },
//                         {
//                             data:mj_data_p_1
//                         },
//                     //     {
//                     //     name:'参数Predict（e91ge01ap_av）',
//                     //     data:mjdata_p_4,
//                     // },
//                     ]
//                 })
//             }
//         }
//     });
//
// }
var mj_result_1 = [];
 $.ajax({
        type: "get",
        url: "/mianji_data/",
        data: {},
        dataType: "json",
        cache: false,
        success: function (mj_result1) {
            if (mj_result1) {
                 mj_result_1 = eval(mj_result1);
                 mj_data_p_1 = mj_result_1[2];
                 mj_data_1 = mj_result_1[1];
                 mj_date_1 = mj_result_1[0];
                 for (var i = 0;i<mj_result_1[0];i++){
                     mj_data_p_1.push(mj_result_1[2][i]);
                     mj_data_1.push(mj_result_1[1][i]);
                     mj_date_1.push(mj_result_1[0][i]);
                 }
                 mj_Chart_1.setOption({
                    xAxis:{
                        data:mj_date_1
                    },
                    series:[
                        {
                            data:mj_data_1
                        },
                        {
                            data:mj_data_p_1
                        }
                    ]
                });

                // setInterval("update_mianji()",3000);
            }
        },
     error:function(errorMsg){
            alert("图表请求数据失败！");
            mj_Chart_1.hideLoading();
        }
    });
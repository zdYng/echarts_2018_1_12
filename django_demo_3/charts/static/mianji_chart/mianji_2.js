/**
 * Created by Administrator on 2017/12/21.
 */
/**
 * Created by Administrator on 2017/12/17.
 */
var mj_Chart_2 = echarts.init(document.getElementById('mianji_2'));
mj_Chart_2.setOption({

               title: {

                   text: 'B01TE01A_AV',
                   subtext: '3号炉主给水温度_1',
                   textStyle: {color: ['black'],},
                   subtextStyle: {
                       color: ['black']
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
                return (value.min - 5).toFixed(2);

            },

            // max:function (value) {
            //     return value.max + 0.5;
            //
            // },
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
        },
        ]
            });
var mj_date_2 = [];
var mj_data_2 = [];
var mj_data_p_2 = [];
// function update_mianji() {
//      $.ajax({
//         type:"get",
//         url:"/mianji_update_2/",
//         data:{},
//         datatype:"json",
//         cache:false,
//         success:function (updatas_4) {
//             updatas = eval(updatas_4);
//             if (updatas_4) {
//                 var len = updatas_4.length;
//                 for (var n=0;n<len;n++){
//                     // date_4.shift();
//                     mj_date_2.push(updatas_4[0][n]);
//                     // data_4.shift();
//                     mj_data_2.push(updatas_4[1][n]);
//                     mj_data_p_2.push(updatas_4[2][n]);
//                     mj_date_2.shift();
//                     mj_data_2.shift();
//                     mj_data_p_2.shift();
//                     // mjdata_p_4.shift();
//                 }
//                 mj_Chart_2.setOption({
//                     xAxis:{
//                         data:mj_date_2,
//                     },
//                     series:[{
//
//                         data:mj_data_2,
//                     },
//                         {
//                             data:mj_data_p_2,
//                         }
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
var mj_result_2 = [];
 $.ajax({
        type: "get",
        url: "/mianji_data_2/",
        data: {},
        dataType: "json",
        cache: false,
        success: function (mj_result2) {
            if (mj_result2) {
                 mj_result_2 = eval(mj_result2);
                 mj_data_2 = mj_result_2[1];
                 mj_date_2 = mj_result_2[0];
                 mj_data_p_2 = mj_result_2[2];
                 // mjdata_p_4 = result_4[2];
                // for(var i=0;i<result_4.length;i++){
                //     date_4.push(result_4[0][i]);
                //     data_4.push(result_4[1][i]);
                // }
                mj_Chart_2.setOption({
                    xAxis:{
                        // data:mj_date_2
                        data:mj_result_2[0]
                    },
                    series:[
                        {
                            // data:mj_data_2
                            data:mj_result_2[1]
                        },
                        {
                            // data:mj_data_p_2
                            data:mj_result_2[2]
                        }
                        ]
                })
                // setInterval("update_mianji()",6000);


            }
        },
     error:function(errorMsg){
            alert("图表请求数据失败！");
            mj_Chart_2.hideLoading();
        }
    });
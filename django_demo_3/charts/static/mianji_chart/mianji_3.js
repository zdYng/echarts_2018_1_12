/**
 * Created by Administrator on 2017/12/21.
 */
/**
 * Created by Administrator on 2017/12/17.
 */
var mj_Chart_3 = echarts.init(document.getElementById('mianji_3'));
mj_Chart_3.setOption({
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
                return (value.min - 3).toFixed(2);

            },

            // max:function (value) {
            //     return value.max + 0.5;
            //
            // },
            max:function (value) {
                return (value.max+2).toFixed(2);

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
var mj_date_3 = [];
var mj_data_3 = [];
var mj_data_p_3 = [];
// function update_mianji() {
//      $.ajax({
//         type:"get",
//         url:"/mianji_update_3/",
//         data:{},
//         datatype:"json",
//         cache:false,
//         success:function (updatas_3) {
//             updatas_3 = eval(updatas_3);
//             if (updatas_3) {
//                 var len_3 = updatas_3.length;
//                 for (var n=0;n<len_3;n++){
//                     // date_4.shift();
//                     mj_date_3.push(updatas_3[0][n]);
//                     // data_4.shift();
//                     mj_data_3.push(updatas_3[1][n]);
//                     // mjdata_p_4.push(updatas_4[2][n]);
//                     mj_date_3.shift();
//                     mj_data_3.shift();
//                     // mjdata_p_4.shift();
//                 }
//                 mj_Chart_3.setOption({
//                     xAxis:{
//                         data:mj_date_3,
//                     },
//                     series:[{
//                         name:'参数（e91ge01ap_av）',
//                         data:mj_data_3,
//                     },
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
var mj_result_3 = [];
 $.ajax({
        type: "get",
        url: "/mianji_data_3/",
        data: {},
        dataType: "json",
        cache: false,
        success: function (mj_result3) {
            if (mj_result3) {
                 mj_result_3 = eval(mj_result3);
                 mj_data_3 = mj_result_3[1];
                 mj_date_3 = mj_result_3[0];
                 mj_data_p_3 = mj_result_3[2];
                 // mjdata_p_4 = result_4[2];
                // for(var i=0;i<result_4.length;i++){
                //     date_4.push(result_4[0][i]);
                //     data_4.push(result_4[1][i]);
                // }
                mj_Chart_3.setOption({
                    xAxis:{
                        data:mj_date_3
                    },
                    series:[
                        {

                        data:mj_data_3
                        },
                        {
                            data:mj_data_p_3
                        }

                        ]
                })
                // setInterval("update_mianji()",6000);


            }
        },
     error:function(errorMsg){
            alert("图表请求数据失败！");
            mj_Chart_3.hideLoading();
        }
    });
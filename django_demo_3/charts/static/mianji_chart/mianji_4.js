/**
 * Created by Administrator on 2017/12/21.
 */
/**
 * Created by Administrator on 2017/12/17.
 */
var mj_Chart_4 = echarts.init(document.getElementById('mianji_4'));
mj_Chart_4.setOption({

                title:{

            text:'AM52SIG1001_AV',
            subtext:'高温再热器出口管屏壁温最大值',
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
                return (value.min - 8).toFixed(2);

            },

            // max:function (value) {
            //     return value.max + 0.5;
            //
            // },
            max:function (value) {
                return (value.max+7).toFixed(2);

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
var mj_date_4 = [];
var mj_data_4 = [];
var mj_data_p_4 = [];
// function update_mianji() {
//      $.ajax({
//         type:"get",
//         url:"/mianji_update_4/",
//         data:{},
//         datatype:"json",
//         cache:false,
//         success:function (updatas_4) {
//             updatas_4 = eval(updatas_4);
//             if (updatas_4) {
//                 var len_4 = updatas_4.length;
//                 for (var n=0;n<len_4;n++){
//                     // date_4.shift();
//                     mj_date_4.push(updatas_4[0][n]);
//                     // data_4.shift();
//                     mj_data_4.push(updatas_4[1][n]);
//                     // mjdata_p_4.push(updatas_4[2][n]);
//                     mj_date_4.shift();
//                     mj_data_4.shift();
//                     // mjdata_p_4.shift();
//                 }
//                 mj_Chart_4.setOption({
//                     xAxis:{
//                         data:mj_date_4,
//                     },
//                     series:[{
//                         name:'参数（e91ge01ap_av）',
//                         data:mj_data_4,
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

 $.ajax({
        type: "get",
        url: "/mianji_data_4/",
        data: {},
        dataType: "json",
        cache: false,
        success: function (mj_result4) {
            if (mj_result4) {
                 var mj_result_4 = eval(mj_result4);
                 mj_data_4 = mj_result_4[1];
                 mj_date_4 = mj_result_4[0];
                 mj_data_p_4 = mj_result_4[2];
                 // mjdata_p_4 = result_4[2];
                // for(var i=0;i<result_4.length;i++){
                //     date_4.push(result_4[0][i]);
                //     data_4.push(result_4[1][i]);
                // }
                mj_Chart_4.setOption({
                    xAxis:{
                        data:mj_date_4
                    },
                    series:[
                        {

                        data:mj_data_4
                        },
                        {
                            data:mj_data_p_4
                        }

                        ]
                })
                // setInterval("update_mianji()",6000);


            }
        },
     error:function(errorMsg){
            alert("图表请求数据失败！");
            mj_Chart_4.hideLoading();
        }
    });
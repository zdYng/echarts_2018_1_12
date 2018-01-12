/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
function current_update_6() {
    $.ajax({
        type: "get",
        url: "/table_data_6/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas) {
            if(datas) {
                datas = eval(datas);

                // $("table td").contains('.*').eq(0).html(current_time);
                 $("tr:eq(6) td:eq(3)").html(datas[1]);
                 $("tr:eq(6) td:eq(1)").html(datas[0]);


            }
        }
    });
}
$.ajax({
        type: "get",
        url: "/table_data_6/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas) {
            if(datas) {
                datas = eval(datas);

                // $("table td").contains('.*').eq(0).html(current_time);
                 $("tr:eq(6) td:eq(3)").html(datas[1]);
                 $("tr:eq(6) td:eq(1)").html(datas[0]);
                 setInterval("current_update_6()",3000);

            }
        }
    });

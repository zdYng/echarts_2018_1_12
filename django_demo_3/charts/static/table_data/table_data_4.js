/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
function current_update_4() {
    $.ajax({
        type: "get",
        url: "/table_data_4/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas) {
            if(datas) {
                datas = eval(datas);

                // $("table td").contains('.*').eq(0).html(current_time);
                 $("tr:eq(4) td:eq(4)").html(datas[3]);
                 $("tr:eq(4) td:eq(3)").html(datas[2]);
                 $("tr:eq(4) td:eq(2)").html(datas[1]);
                 $("tr:eq(4) td:eq(1)").html(datas[0]);



            }
        }
    });
}
$.ajax({
        type: "get",
        url: "/table_data_4/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas) {
            if(datas) {
                datas = eval(datas);

                // $("table td").contains('.*').eq(0).html(current_time);
               $("tr:eq(4) td:eq(4)").html(datas[3]);
                 $("tr:eq(4) td:eq(3)").html(datas[2]);
                 $("tr:eq(4) td:eq(2)").html(datas[1]);
                 $("tr:eq(4) td:eq(1)").html(datas[0]);

                 setInterval("current_update_4()",3000);

            }
        }
    });

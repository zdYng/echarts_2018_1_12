/**
 * Created by Administrator on 2017/12/20.
 */
/**
 * Created by Administrator on 2017/12/20.
 */
function current_update_2() {
    $.ajax({
        type: "get",
        url: "/table_data_2/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas_2) {
            if(datas_2) {
                datas_2 = eval(datas_2);

                // $("table td").contains('.*').eq(0).html(current_time);
                //  $("tr:eq(2) td:eq(3)").html(datas[1]);
                //  $("tr:eq(2) td:eq(1)").html(datas[0]);
                 $("tr:eq(2) td:eq(4)").html(datas_2[3]);
                 $("tr:eq(2) td:eq(3)").html(datas_2[2]);
                 $("tr:eq(2) td:eq(2)").html(datas_2[1]);
                 $("tr:eq(2) td:eq(1)").html(datas_2[0]);


            }
        }
    });
}
$.ajax({
        type: "get",
        url: "/table_data_2/",
        data:{},
        datatype:"json",
        cache:false,
        success:function (datas_2) {
            if(datas_2) {
                datas_2 = eval(datas_2);

                // $("table td").contains('.*').eq(0).html(current_time);
                 $("tr:eq(2) td:eq(4)").html(datas_2[3]);
                 $("tr:eq(2) td:eq(3)").html(datas_2[2]);
                 $("tr:eq(2) td:eq(2)").html(datas_2[1]);
                 $("tr:eq(2) td:eq(1)").html(datas_2[0]);
                 setInterval("current_update_2()",3000);

            }
        }
    });

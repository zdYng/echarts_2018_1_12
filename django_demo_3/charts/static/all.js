/**
 * Created by Administrator on 2017/12/28.
 */
var shifN = 4;
Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};

document.write('<scr'+'ipt src="/static/table_data/table_data_5.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/table_data/table_data_4.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/table_data/table_data_3.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/table_data/table_data_2.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/table_data/table_data.js"><\/scr'+'ipt>');

// {#折线图#}
document.write('<scr'+'ipt src="/static/line_chart/chart_1.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/line_chart/chart_2.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/line_chart/chart_3.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/line_chart/chart_4.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/line_chart/chart_5.js"><\/scr'+'ipt>');

// {#其他#}
document.write('<scr'+'ipt src="/static/scatter.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/leida.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/guanxi.js"><\/scr'+'ipt>');

// {#mianji#}
document.write('<scr'+'ipt src="/static/mianji_chart/mianji.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/mianji_chart/mianji_2.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/mianji_chart/mianji_3.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/mianji_chart/mianji_4.js"><\/scr'+'ipt>');
document.write('<scr'+'ipt src="/static/mianji_chart/mianji_5.js"><\/scr'+'ipt>');

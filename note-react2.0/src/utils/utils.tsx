


export function FormatDate(fmt: string) {
    let dateObj = new Date()
    var o = {
        "M+": dateObj.getMonth() + 1, //月份 
        "d+": dateObj.getDate(), //日 
        "H+": dateObj.getHours(), //小时 
        "m+": dateObj.getMinutes(), //分 
        "s+": dateObj.getSeconds(), //秒 
        "q+": Math.floor((dateObj.getMonth() + 3) / 3), //季度 
        "S": dateObj.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        // @ts-ignore
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
}

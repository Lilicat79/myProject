const baseURL = 'http://134.175.154.93:8099';
const pageSize = 10;
function parseDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    // month - month > 10 ? month : ('0' + month);
    let day = date.getDate();
    day = day > 10 ? day : ('0' + day);
    let hours = date.getHours();
    // hours = hours > 10 ? hours : ('0' + hours);
    let minutes = date.getMinutes();
    // minutes = minutes > 10 ? minutes : ('0' + minutes);
    let seconds = date.getSeconds();
    return year + '-' + formatNum(month) + '-' + formatNum(day) + '-' + formatNum(hours) + ':' + formatNum(minutes) + ':' + formatNum(seconds)

    // return ''
}
function formatNum(num) {
    return num > 10 ? num : ('0' + num)
}
export default {
    baseURL,
    pageSize,
    parseDate
}

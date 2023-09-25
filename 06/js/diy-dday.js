var firstDay=new Date("2016-07-18");
var now = new Date();
var toFirst = firstDay.getTime();
var toNow = now.getTime();
var passedDay = Math.round((toNow-toFirst)/(24*60*60*1000));
document.querySelector("#accent").innerText=passedDay;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst+days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month=someday.getMonth()+1;
    var date = someday.getDate();
    document.querySelector("#date"+days).innerText=year+"년 "+month+"월 "+date+"일 ";
}
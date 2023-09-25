var now = new Date();

var firstDay=new Date("2016-07-18"); //처음 만난 날 정보
var toNow = now.getTime(); //오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리 초로 바꿈
var passedTime=toNow-toFirst; //오늘과 처음 만난 날 차이

var passedDay=Math.round(passedTime/(1000*60*60*24)); //밀리초를 날짜로 변환하고 반올림
document.querySelector("#accent").innerText=passedDay+"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(day){
    var future = toFirst+day*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month=someday.getMonth()+1;
    var date = someday.getDate();
    document.querySelector("#date"+day).innerText=year+"년 "+month+"월 "+date+"일";
}
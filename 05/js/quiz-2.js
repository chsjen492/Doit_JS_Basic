var num1=parseInt(prompt("비교할 첫 번째 숫자: "));
var num2=parseInt(prompt("비교할 두 번째 숫자: "));
compare(num1,num2);



function compare(a,b){
    if(a>b){
        alert(a+"(이)가 "+b+"보다 큽니다.");
    }
    if(a<b){
        alert(b+"(이)가 "+a+"보다 큽니다.");
    }
    if(a===b){
        alert(a+"와 "+b+"는 같습니다.");
    }
};
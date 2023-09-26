var itemList=[];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(){
    var item = document.querySelector("#item").value; //텍스트 필드에 입력된 값을 가져온다.
    if(item!=null){
        itemList.push(item); //입력 값이 존재하면 itemList 배열에 추가한다.
        document.querySelector("#item").value = ""; //id=item인 요소 값을 지운다
        document.querySelector("#item").focus();
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for(var i=0;i<itemList.length;i++){
        list+="<li>"+itemList[i]+"<span class = 'close' id="+i+">X</span></li>";
    }
    list+="</ul>";

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
    var id = this.getAttribute("id"); //이벤트가 발생한 요소 찾기
    itemList.splice(id,1);
    showList();
}
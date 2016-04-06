
//    input部分start
var txt=document.getElementById("txt");
txt.style.color = "#ccc";
txt.style.paddingLeft = "5px";
txt.onfocus = function(){
    if(txt.value == "请输入..."){
        txt.value= "";
        txt.style.color= "#333";
    }
}
txt.onblur =function(){
    if(txt.value=="") {
        txt.value = "请输入...";
        txt.style.color = "#999";
    }
}
//    input部分end
//    topbg部分start
var topbg = document.getElementById("topbg-bg");
var topbg_close = document.getElementById("topbg_close");
topbg_close.onclick = function(){
    topbg.style.display = "none";
}

// 生活服务的小图标
// var icons=document.getElementById("jdicon").getElementsByTagName("i");
// for(var i=0; i<icons.length; i++){
//     icons[i].style.backgroundPosition = "0 "+(-i*25)+"px";
// }
//    topbg部分end
//    1floor部分start
// var jdtab_lis = document.getElementById("jdtab_top_right").getElementsByTagName("li");
// var jdtab_divs = document.getElementById("jdtab_top_right").getElementsByTagName("div");
// for(var i=0; i<jdtab_lis.length; i++){
//     jdtab_lis[i].index = i;
//     jdtab_lis[i].onmouseover = function(){
//         for(var i=0; i<jdtab_lis.length; i++){
//             jdtab_lis[i].className = "";
//             jdtab_divs[i].className = "";
//         }
//         this.className = "jdtab_lis_bg";
//         jdtab_divs[this.index].className = "show";
//     }
// }
//    1floor部分end
//    jdbanner部分start
// var jdbanner_left = document.getElementById("jdbanner_left");
// var jdbanner_leftimg= jdbanner_left.children[0];
// var jdbanner_ul = jdbanner_leftimg.children[0];
// var jdbanner_ullis = jdbanner_ul.children;
// var jdcircle = document.getElementById("jdcircle");
// for(var i= 0; i<jdbanner_ullis.length; i++){
//     var newli = document.createElement("li");
//     newli.innerHTML = i+1;
//     jdcircle.appendChild(newli);
// }
// for(var i=0; i<jdcircle.children.length; i++){
//     jdcircle.children[0].className = "lbtnumber_color";
//     jdcircle.children[i].onmouseover = function(){
//     for(var i=0; i<jdcircle.children.length; i++){
//         jdcircle.children[i].className = "";
//     }
//     this.className = "lbtnumber_color";
//     }
// }

// var key = 0, smallnum=0;
// var timer = setInterval(fun,1000);
// function fun(){
//     key++;
//     if(key>jdbanner_ullis.length){
//         key = 0;
//     }
//     fn(jdbanner_ul,-key*jdbanner_ullis[0].offsetWidth);

//     smallnum++;
//     smallnum = smallnum < jdcircle.children.length? smallnum : 0;
//     for(var i=0; i<jdcircle.children.length; i++){
//         jdcircle.children[i].className = "";
//     }
//     jdcircle.children[smallnum].className = "lbtnumber_color";
// }

// function fn(box,num){
//     clearInterval(box.timer);
//     var speed = box.offsetLeft<num ? 10 : -10;
//     box.timer = setInterval(function(){
//         box.style.left = box.offsetLeft + speed + "px";
//         var count = num - box.offsetLeft;
//         if(Math.abs(count)<=10){
//             clearInterval(box.timer);
//             box.style.left = num + "px";
//         }
//     },1000);
// }


//    jdbanner部分end




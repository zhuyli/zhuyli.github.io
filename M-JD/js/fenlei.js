/**
 * Created by Administrator on 2016/1/8.
 */

window.onload = function () {
    fenLei();
}

function fenLei(){
    var fenleileft = document.getElementsByClassName("jd_content_left")[0];
    var leftul = fenleileft.getElementsByClassName("jd_category_left_con")[0];
    var fenleiheight1 = fenleileft.offsetHeight;
    var fenleiheight2 = leftul.offsetHeight;
    var leftlis = leftul.children;

    // 最开始的定位就是最左上角，定位就是0
    var max = 0;
    // 内容高度大于盒子高度 所以是负值
    var min = -(fenleiheight2 - fenleiheight1);
    // 给一个超出范围的值，再吸回去
    var distance = 150;


    function changeTranslateY(y){
        leftul.style.transform = "translateY("+ y +"px)";
        leftul.style.webkitTransform = "translateY("+ y +"px)";
    }
    
    function addTransition() {
        leftul.style.transition = "all 0.2s ease";
        leftul.style.webkitTransition = "all 0.2s ease";
    }
    function removeTransition() {
        leftul.style.transition = "none";
        leftul.style.webkitTransition = "none";
    }
    var startY = 0;
    var endY = 0;
    var moveY = 0;
    var currentY = 0; //  记录当前位置，只是一个记录值

    leftul.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    })
    leftul.addEventListener("touchmove", function (e) {
        endY = e.touches[0].clientY;
        moveY = startY - endY;

        // (currentY-moveY) 其实就是记录当前位移
        // (max+distance) 就是滑动到的最大位置就滑不动了
        if((currentY-moveY)<(max+distance) && (currentY-moveY)>(min-distance)){
            removeTransition();
            // currentY就是用来记录位置的，TranslateY在之前的位置的基础上在负移动moveY的距离
            changeTranslateY(currentY - moveY);
        }
    })
    leftul.addEventListener("touchend", function (e) {

        // 位移超过最大值时
        if((currentY-moveY)>max){
            // 在touchmove中吸回去后就直接在这里设置为最大值
            currentY = max;
            addTransition();
            changeTranslateY(currentY);
        }else if((currentY-moveY)<min){
            currentY = min;
            addTransition();
            changeTranslateY(currentY);
        }else {
            currentY = currentY-moveY;
        }

        startY = 0;
        endY = 0;
        moveY = 0;
    })

    // 左边ul动画
    zyl.tap(leftul, function (e) {
        for(var i=0; i<leftlis.length; i++){
            leftlis[i].className = "";
            leftlis[i].index = i;
        }
        var curli = e.target.parentNode;
        curli.className = "now";

        var translateY = -curli.index * 50;
        if(translateY>min){
            addTransition();
            changeTranslateY(translateY);
            currentY = translateY;
        }else {
            changeTranslateY(min);
            currentY = min;
        }

    var right = document.getElementsByClassName("jd_content_right")[0];
    right.style.transition = "all .2 ease";
    right.style.webkitTransition = "all .2 ease";
    right.style.opacity = 0;
        setTimeout(function () {
            right.style.opacity = 1;
        },200);
    });




}




// window.onload= function(){
//     leftCategory();
// };
// /*左侧滑动*/
// var leftCategory = function(){
//     /*拿DOM对象*/
//     /*父盒子*/
//     var parentDom = document.getElementsByClassName('jd_category_left')[0];
//     /*子盒子*/
//     var childDom = parentDom.getElementsByClassName('jd_category_left_con')[0];

//     var parentHeight = parentDom.offsetHeight;

//     var childHeight = childDom.offsetHeight;


//     /*左侧盒子定位的区间*/
//     var maxY = 0,minY = -(childHeight-parentHeight);
//     /*缓冲距离 150*/
//     var distance = 150;

//     /*改变位置的方法*/
//     var changeTranslateY = function(y){
//         childDom.style.transform = "translateY("+y+"px)";
//         childDom.style.webkitTransform = "translateY("+y+"px)";
//     }
//     /*加过渡*/
//     var addTransition = function(){
//         childDom.style.transition = "all .2s ease";
//         childDom.style.webkitTransition = "all .2s ease";/*兼容 老版本webkit内核浏览器*/
//     }
//     /*清除过渡*/
//     var removeTransition = function(){
//         childDom.style.transition = "none";
//         childDom.style.webkitTransition = "none";/*兼容 老版本webkit内核浏览器*/
//     }


//     var startY = 0;
//     var endY = 0;
//     var moveY = 0;
//     /*记录当前的Y的定位*/
//     var currY = 0;

//     /*1.滑动*/
//     childDom.addEventListener('touchstart',function(e){
//         /*初始的Y的坐标*/
//         startY = e.touches[0].clientY;

//     },false);
//     childDom.addEventListener('touchmove',function(e){
//         e.preventDefault();
//         /*不停的做滑动的时候记录的endY的值*/
//         endY = e.touches[0].clientY;
//         moveY = startY - endY;/*计算了移动的距离*/

//         /*2.滑动区间*/
//         /*就是滑动区间*/
//         if((currY-moveY)<(maxY+distance)&&(currY-moveY)>(minY -distance)){
//             removeTransition();
//             changeTranslateY(currY-moveY);
//         }
//     },false);
//     childDom.addEventListener('touchend',function(e){
//         /*在限制滑动区间之后 重新计算当前定位*/

//         /*判断是否在我们的合理定位区间内*/

//         /*先向下滑动 */
//         if((currY-moveY) > maxY){
//             currY = maxY;
//             addTransition();
//             changeTranslateY(currY);
//         }
//         /*想上滑动的时候*/
//         else if((currY-moveY) < minY){
//             currY = minY;
//             addTransition();
//             changeTranslateY(currY);
//         }
//         /*正常的情况*/
//         else{
//             currY = currY-moveY;
//         }

//         startY = 0;
//         endY = 0;
//         moveY = 0;
//     },false);

//     /*点击*/
//     var liList = childDom.getElementsByTagName('li');

//     /*点击事件*/
//     itcast.tap(childDom,function(e){
//         for(var i = 0 ; i < liList.length ; i ++){
//             liList[i].className = " ";
//             /*给每个li索引*/
//             liList[i].index = i;
//         }
//         /*取到我们的当前点击的li*/
//         var li  = e.target.parentNode;
//         li.className = "now";

//         /*计算移动的位置*/
//         /*将要定位的位置*/
//         var translateY = -li.index * 50;

//         /*如果满足在我们定位区间内  就用我们计算的值来做定位*/
//         if(translateY > minY){
//             addTransition();
//             changeTranslateY(translateY);
//             currY = translateY;
//         }else{
//             //addTransition();
//             changeTranslateY(minY);
//             currY = minY;
//         }

//         /*模拟加载效果*/
//         var rightDom = document.getElementsByClassName('jd_category_right')[0];
//         rightDom.style.transition = "all .2s ease";
//         rightDom.style.webkitTransition = "all .2s ease";
//         rightDom.style.opacity = 0;
//         setTimeout(function(){
//             rightDom.style.opacity = 1;
//         },200);

//     })
// }


/**
 * Created by Administrator on 2016/1/8.
 */

window.onload = function () {
    fenLei();
}

function fenLei(){
    var fenleileft = document.getElementsByClassName("jd_category_left")[0];
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

    var right = document.getElementsByClassName("jd_category_right")[0];
    right.style.transition = "all .2 ease";
    right.style.webkitTransition = "all .2 ease";
    right.style.opacity = 0;
        setTimeout(function () {
            right.style.opacity = 1;
        },200);
    });




}



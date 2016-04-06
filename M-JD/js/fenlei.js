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

    // �ʼ�Ķ�λ���������Ͻǣ���λ����0
    var max = 0;
    // ���ݸ߶ȴ��ں��Ӹ߶� �����Ǹ�ֵ
    var min = -(fenleiheight2 - fenleiheight1);
    // ��һ��������Χ��ֵ��������ȥ
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
    var currentY = 0; //  ��¼��ǰλ�ã�ֻ��һ����¼ֵ

    leftul.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    })
    leftul.addEventListener("touchmove", function (e) {
        endY = e.touches[0].clientY;
        moveY = startY - endY;

        // (currentY-moveY) ��ʵ���Ǽ�¼��ǰλ��
        // (max+distance) ���ǻ����������λ�þͻ�������
        if((currentY-moveY)<(max+distance) && (currentY-moveY)>(min-distance)){
            removeTransition();
            // currentY����������¼λ�õģ�TranslateY��֮ǰ��λ�õĻ������ڸ��ƶ�moveY�ľ���
            changeTranslateY(currentY - moveY);
        }
    })
    leftul.addEventListener("touchend", function (e) {

        // λ�Ƴ������ֵʱ
        if((currentY-moveY)>max){
            // ��touchmove������ȥ���ֱ������������Ϊ���ֵ
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

    // ���ul����
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



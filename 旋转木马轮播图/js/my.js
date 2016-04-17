
window.onload = function() {
    var arrow = document.getElementById("arrow");  // 三角
    var wrap = document.getElementById("wrap");   // 大盒子
    var slide = document.getElementById("slide");
    var lis = slide.children[0].children;   // 获得所有的li
    var json = [  //  包含了5张图片里面所有的样式
        {   //  1 最底层
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2 中间层的
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },

        {   // 3 最正中间的那一张
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4 中间层的
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5 最底层
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    wrap.onmouseover = function(){   // 鼠标经过显示 三角
        animate(arrow,{opacity:100});
        clearInterval(timer);
    }
    wrap.onmouseout = function(){  // 鼠标离开 隐藏三角
        animate(arrow,{opacity:0});
        clearInterval(timer);
        timer = setInterval(Move, 5000);
    }
    move(); // 页面执行也调用一次。不传参的情况下不用变换json而直接给每个图片添加相应的属性值
    // 两个按钮
    var flag = true;   // 用于函数节流，避免点击一次后还没反应完又点击
    var as = arrow.children;   // 2 个 a
    for(var k in as) {
        as[k].onclick = function() {
            // 当俺们点击的时候， 只做一件事情  ---- 交换json
            if(this.className == "prev"){  // 左侧按钮
                //  alert(1l1);
                if(flag == true) {   // 实现按钮只能点击一次
                    move(true);
                    flag = false; // 用于函数节流，避免点击一次后还没反应完又点击
                }
            }
            else
            {
              /*  当点击了 右侧按钮  ：
    把 数组里面的第一个值删掉 ，然后把这个值追加到 数组的最后面。
     json.push(json.shift());*/
               if(flag == true) {   // 实现按钮只能点击一次
                   move(false);
                   flag = false;  // 用于函数节流，避免点击一次后还没反应完又点击
               }
            }
        }
    }
    var timer = setInterval(Move,5000);
    function Move(){
        move(false);
    }
    function move(x){
        if(x != undefined) {   // 如果没有值传递过来，就应该  不执行 里面的语句直接遍历json
            if(x){
                // 交换 反向json   左侧
                // 当点击左键时，width为800的向下走，就等价于删除原本数组的最后一个添加到数组的第一个。
                json.unshift(json.pop())
            }else {
                // 正向 json
                // 当点击右键时，width为800的向上走，可以理解为是数组删除了原本的第一个值，并把它加到数组最后。
                json.push(json.shift());
            }
        }
        // 交换完毕 json 之后，就要 循环执行一次, 重新调换图片位置
        for(var i=0;i<json.length;i++) {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            },function(){ flag = true; })
        }
    }


}
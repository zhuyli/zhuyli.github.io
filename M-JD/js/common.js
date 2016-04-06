
window.zyl = {};
window.zyl.transitionEnd = function (obj,callback) {
    if(typeof(obj) == "object"){
        obj.addEventListener("transitionEnd", function (e) {
            callback && callback(e);
        });
        obj.addEventListener("webkitTransitionEnd", function (e) {
            callback && callback(e);
        });
    }
}

window.zyl.tap = function (obj,callback) {
    if(typeof obj != "object") return false;

    var startTime = 0, isMove = false;
    obj.addEventListener("touchstart", function () {
        startTime = Date.now();
    })
    obj.addEventListener("touchmove", function () {
        isMove = true;
    })
    document.addEventListener("touchstart", function (e) {
        if(Date.now()-startTime < 200 && isMove == false){
            callback && callback(e);
        }

        isMove = false;
        startTime = 0;
    })
}

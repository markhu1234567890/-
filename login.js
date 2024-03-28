 // 登录
 function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

//关闭手机号登录
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}
 // 关闭二维码登录
 function closeLoginPopup2() {
    document.getElementById("loginPopup2").style.display = "none";
}
// 关闭用户名登录
function closeLoginPopup3() {
    document.getElementById("loginPopup3").style.display = "none";
}


// 手机号登录换二维码
function changeLoginPopup(){
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
}

// 手机号登录换用户名
function changeLoginPopup2(){
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginPopup3").style.display = "block";
}
// 用户名登录换手机号
function changeLoginPopup3(){
    document.getElementById("loginPopup3").style.display = "none";
    document.getElementById("loginPopup").style.display = "block";
}
// 用户名登录换二维码
function changeLoginPopup4(){
    document.getElementById("loginPopup3").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
}
 // ��¼
 function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

//�ر��ֻ��ŵ�¼
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}
 // �رն�ά���¼
 function closeLoginPopup2() {
    document.getElementById("loginPopup2").style.display = "none";
}
// �ر��û�����¼
function closeLoginPopup3() {
    document.getElementById("loginPopup3").style.display = "none";
}


// �ֻ��ŵ�¼����ά��
function changeLoginPopup(){
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
}

// �ֻ��ŵ�¼���û���
function changeLoginPopup2(){
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginPopup3").style.display = "block";
}
// �û�����¼���ֻ���
function changeLoginPopup3(){
    document.getElementById("loginPopup3").style.display = "none";
    document.getElementById("loginPopup").style.display = "block";
}
// �û�����¼����ά��
function changeLoginPopup4(){
    document.getElementById("loginPopup3").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
}
let show = document.getElementById('show');
// getElementById는 아이디 값을 토대로 엘리먼트를 통째로 가져옴
// 헬로우만 가져오는 게 아니라..
console.log(show.getAttribute('id'));

function turnOn() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}
function turnOff() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(img1[0]);
}

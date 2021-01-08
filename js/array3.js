//array3.js

let numbers = [34, 55, 22, 10, 100, 6, 7];
// numbers.sort(function(a, b) {
//     if (a > b) {
//         return -1; //a가 b보다 클 경우 1을 리턴하시오 (양수의 값.. 내림차순 정렬하게 됨.)
//     }else {       //a가 b보다 클 경우 -1을 리턴하시오 (음수의 값.. 오름차순 정렬하게 됨.)
//         return -1;
//     }

// });

numbers.sort (function (a, b){
    return a - b; //a-b : 내림차순 (양수) , 오름차순 (음수)
});

// console.log(numbers);

let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum=0;

numbers.forEach(function (item, idx, ary) {  //forEach는 매개값을 세개까지만 받음. (a, b, c, d)까지 써봤자 d는 무의미.
    sum += item;   
    console.log(item, idx);            //첫번째는 배열의 요소 , 두번째는 인덱스 값, 세번째는 배열 그 자체를 가져옴
    let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);
});

let liTag = document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);


// number.js

let x = 10; 
let y = '5';

let result = x * y; //parseFloat 소숫점까지 가져옴.
// result = x / 0;  // 더하기 연산일 때만 parseInt 사용하면 됨 / *는 알아서 숫자로 인식하고 계산해줌.
console.log(result);

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1)+parseInt(num2));
}

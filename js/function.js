// function.js

function sum(num1, num2) {
    let result =  num1 + num2;
    console.log(result);
    return result
}

let result = sum('10','20');
document.write('<h1>' + result + '</h1>');
//펑션 내에서 리턴 매개변수는 따로 없음.
//펑션만 적었다고 끝이 아니라 호출까지 해줘야 함.

let myfunc = function(a, b) {
    let result = a * b;
    console.log('Hello');
    return result;
}
result  = myfunc(4, 6);
// 마이 펑 안에 들어있는 정의문을 실행하라는 의미.

let yourfunc = myfunc;
result = yourfunc(5, 7);

console.log(result);

let theotherfunc = function(n1, n2) {
    return n1 / n2;
}

function otherfunc(a, b, funcdef) {
    let result = funcdef(a, b);
    console.log('result: ' +  result)
}
otherfunc(20, 30, theotherfunc);
//펑션이 매개값으로도 쓰여질 수 있다.


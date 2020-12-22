let num = 10, num3 = 20;

let result = num + num3;
console.log("result: " + result + "입니다.");
// 자바 스크립트는 문장 끝에 ; 없어도 상관은 없지만 한 문장에 여러 내용을 적을 땐 컬럼 적어줘야 함.
// 아니면 줄을 바꾸던가

if (result > 30) {
    console.log("30보다 크다.")
} else {
    document.write("<h1>30보다 작거나 같다.</h1>");
}

document.getElementById()

var str= 'Hello, World';
str = 25;
str = 1 < 2;
str =  null;
str = function() {
    console.log('function')
}
str = 10 + 20;
console.log(typeof str, str);

num1= 10;
console.log(num1);

var str = "reload";
console.log(str);

let num2 = 20;
console.log(num2);

// var도 변수선언 키워드지만
// 우리는 주로 let을 쓰겠다 (오류가 나면 메세지를 보여주기 때문)

// 값이 무엇이 할당되냐에 따라 변수 타입이 계속 바뀜.
// 즉 값을 아무거나 다 할당 해줄 수 있다는 뜻.
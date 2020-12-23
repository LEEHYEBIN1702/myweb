// variable.js

// undefined
let something = 10;
// 자바 스크립트는 변수 값이 들어가는 순간 변수 타입이 지정된다.
something = 1 > 2 ;
something = "";
// 변수 값이 안 들어가 있으면 언디파인 상태.

if (something) {
    console.log("참입니다.")
} else {
    console.log("거짓입니다.")
}
// 값이 들어있으면 참, 없거나 0이면 거짓


//object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222',
}

let name = something.name;
let age = something['age']

for ( field in something ) {
console.log(field, something[field]); // 필드 값을 가져올 땐 표현식으로 가져오면 됨.
}

let nameAry = ['Hong', 'Park', "Kim", 'Hwang', 'Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi'

for(let i=0; i<nameAry.length; i++) {
    console.log('nameAry[' + i + '] => ' + nameAry[i]);
}
var i =1;
document.write ('<table border="1">');
document.write('<tr><td>순번</td><td>이름</td></tr>')
for(str of nameAry) {
    document.write('<tr>')
    document.write('<tr align= "center">')
    document.write('<td>' + i++ + '</td>')
    document.write('<td>' + str + '</td>')
    document.write('</tr>')
}
document.write('</table>')

//of는 배열이고 in은 필드값을 가져온다.


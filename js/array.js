// array.js

// let numbers = [3, 4, 8, 9, 12, 83, 22];
// let sum = 0;
// for(num of numbers) {
//     if (num %2 ==0) {
//     sum +=num;
//     console.log(num)
//     }
// }
// console.log("합계: " + sum);

let numbers = [3, 4, 8, 9, 12, 83, 22];
let sum = 0;
for (num of numbers){
    if (sum < num ) {
        sum = num;
    }   
}
console.log("가장 큰 수: " + sum);

let friend1 = {
    name: '송다희',
    age: 20,
    hobby: '코딩',
    grade:'a'
}
let friend2 = {
    name: '이나경',
    age: 22,
    hobby: '자바',
    grade:'b'
}
let friend3 = {
    name: '이혜빈',
    age: 25,
    hobby: '오라클',
    grade:'c'
}
let friends = [friend1, friend2, friend3];

var i = 1;
document.write('<table border="1">');
document.write('<tr><td>이름</td><td>나이</td><td>취미</td></tr>')
for (str of friends) {
    document.write('<tr>')
    document.write('<tr align= "center">')
    document.write('<td>' + str.name+ '</td>')
    document.write('<td>' + str.age+ '</td>')
    document.write('<td>' + str.hobby+ '</td>')
    document.write('</tr>')
}
document.write('</table>')


document.write('=====교수님=====')
// 얘가 좀 더 편함 (교수님 방식)
// 내용 추가 됐을 때 따로 더 코딩 안 해줘도 되는 방식.
document.write('<table border="1"><tr>');
for (field in friend1) {
    document.write('<th>' + field + '</th>');
}
document.write('</tr>');
for (friend of friends) {
    document.write('<tr>');
    document.write('<tr align= "center">')
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>')
    }
    document.write('</tr>');
}
document.write('</table>')
//of는 배열이고 in은 필드값을 가져온다.
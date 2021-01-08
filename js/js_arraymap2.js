// array.map2.js

//reduce

let students = [];

for(let i = 1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}


let result = students.every(function (a, b, c) {
    return a.score > 80;
})
console.log(result);

// every : 각각의 배열요소들이 밑의 조건을 모두 만족하면 true, 아니면 false

result = students.some(function (a, b, c) {
    return a.score > 80;
})
console.log(result);

//  some : 하나라도 만족하면 true, 아니면 false

result = students.map(function (a) {
    return a.sname;
}).indexOf('Hong1');

console.log(result);

// indexOf : 내가 찾고자 하는 요소들의 인덱스 위치를 출력
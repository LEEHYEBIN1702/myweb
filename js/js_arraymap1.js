// array.map1.js

let students = [];

let student = {
    sno: 1,
    sname: 'Hong',
    sgen: 'F',
    score: 80
}

for(let i = 1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}

// mapping
let stu = students.filter(function(a, b, c) {
    return a.sgen == 'F';
}).map(function(a, b, c) {
    let obj = {};
    obj.name = a.sname;
    obj.id = a.sno;
    obj.gen = a.sgen;
    obj.score = a.score;

    return obj;
})

console.log(stu);


// console.log(students);
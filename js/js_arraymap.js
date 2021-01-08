// array.map.js

let person = {}; // == new Object(), obj 타입의 변수
person.name = 'Hong';
person.age = 10;

person = {
    name: 'Hwang', 
    age: 15
}
console.log(person);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

person = new Person('Park', 20);
console.log(person);

let persons = []; // 배열타입의 persons 변수

persons.push(person);
persons.push(new Person('Choi', 21));
persons.push(new Person('Hong', 22));
persons.push(new Person('Hwang', 23));


// mapping
let names = persons.map(function (a, b, c) {
    console.log(a, b, c);
    let memeber = {};
    member.id = a.name + '-' + b;
    member.age = a.age;
    return member;
    // a = person object
});

// filter + map
let over21 = persons.filter(function (a, b, c) {
    return a.age > 21;
}).map(function(a, b, c) {
    return a.age;
})

console.log(over21);

names.forEach(function (a, b, c) {
    document.write('<h1>' + a.id + ' / ' + a.age + '</h1>');
});
// console.log(names);
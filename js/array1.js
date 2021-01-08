// array1.js

let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange'
fruits[fruits.length] = 'Mango'
fruits[2] = 'new Melon';
delete fruits[2];

// for (let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }
// 자바에선 요소 한번 넣으면 고정인데 자바 스크립트는 계속 넣어줄 수 있음.

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange'); //push는 마지막에 추가해주는 것 unshift는 앞쪽에 추가해주는 것.
fruits.unshift('Melon');

// fruits.pop(); //제일 뒤에서부터 하나씩 제거.
// fruits.shift(); //제일 앞에서부터 하나씩 제거.
// 멜론, 오렌지, 애플, 바나나 
let fruit = fruits.splice(1, 2, 'New Orange', 'New Apple'); //위치, 삭제할 갯수, 지워진 요소 대신 다른 요소를 채워넣을 수 있음.
console.log(fruit); //splice는 삭제도 할 수 있지만 추가도 할 수 있다. (유용함)

for (fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}

fruit['name']; // name based //fruit.name; 이렇게 적는 것도 가능..
fruits[0]; // index based 
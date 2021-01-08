//array_foreach.js

let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

persons.forEach(myCallBack); // callback 함수를 받았다. (스트링이나 인트 타입을 받는 게 아님)

function myCallBack(a, b, c) {
    // console.log(a, b, c);
}

persons = [];
let person = {
    name: '이혜빈',
    age: 20, 
    score: 90
}

persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons.push(person1);

// persons.push('송다희'); 이렇게 추가해주는 것도 가능은 한데 웬만하면 이렇게 쓰지 말고 타입 맞춰서 써주길 권고.

console.log(persons);

let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1')
function drawTable() {
    let titles = ['이름', '나이', '점수']
    // let tableTag = document.createElement('table');
    // tableTag.setAttribute('border', '1') mycaillfunc에서도 쓰게 하기 위해 위로 빼줌.

    let trTag =  document.createElement('tr');
    for (title of titles) {
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML = title;
        trTag.append(tdTag1);
        persons.forEach(myCallFunc);
    }
    // let tdTag =  document.createElement('td');
    // td.innerHTML='이름';
    // trTag.append(tdTag);
    // let tdTag1 =  document.createElement('td');
    // td1.innerHTML='나이';
    // trTag.append(tdTag1);
    // let tdTag2 =  document.createElement('td');
    // td2.innerHTML='점수';
    // trTag.append(tdTag2);

    tableTag.append(trTag); // 여기까지가 타이틀 생성

    persons.forEach(function(item, idx, ary) { //item은 오브젝트이기 때문에 이름, 나이, 점수 다 가지고 있다.
        let trTag =  document.createElement('tr');
    for (field in item) {
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML = item[field];
        trTag.append(tdTag1);
    }
      tableTag.append(trTag);
    }); // 여기까지가 데이터 생성.


    document.getElementById('show').append(tableTag);




}

function myCallFunc(item, idx, ary) {

    let trTag =  document.createElement('tr');
    for (field in item) {
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML = item[field];
        trTag.append(tdTag1);
    }
      tableTag.append(trTag);
     


}
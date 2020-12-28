// string.js
let str = 'please locate where "locate" occurs!';
let strLeng = str.length;
//str문자열의 크기.

console.log(strLeng);

// indexOf, lastIndexOf, search
// 문자열의 위치를 인덱스 기준으로 찾는 메소드

strLeng = str.indexOf('locate');
console.log(strLeng);
// 찾는 값이 없으면 -1을 리턴해줌.
// 앞의 로케이션

str.lastIndexOf('locate');
console.log(str.lastIndexOf('locate'));
// 뒤의 로케이션

console.log(str.search('locate'));
//서치 역시 마찬가지로 못 찾으면 -1을 리턴

//slice, substring, substr
//범위를 지정해서 값을 가져오는 메소드.
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(0,5);
// 0부터 시작해서 5번째 이전 값을 가져온다. 

let from = fruit.indexOf('Banana');
result =  fruit.substring(from, from + 6);
// 인덱스오브와 조합해서 쓸 수도 있음.
//문자열의 위치.

result =  fruit.substr(from, 6);
//문자열의 크기.

console.log(result);



//replace
let newFruit = fruit.replace('Banana', 'Orange');
// console.clear();
console.log(newFruit);
//바나나를 오렌지로 대체해줬다.


// toUpperCase, toLowerCase (대문자, 소문자 변환)
console.log ('     hello   '.trim().toUpperCase());

//concat, trim, (좌우 여백 더하기, 좌우 여백 잘라주는 기능.)
console.log ('     hello   '.trim());

//padStart, padEnd (비어있는 공란을 채워주는 메소드.)
// (오른쪽부터 채우고 싶으면 스타트, 왼쪽부터 채우고 싶으면 엔드)
console.log ('5'.padStart(4,'0'));

let uri = 'http://www.naver.net';
// net을 com으로 바꾸고 싶을 때..
console.log(uri.replace('net','com'));

// 만약 net이라는 값을 모르는 채로 com으로 바꿔야 한다면?
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));
// .이후부터의 값을 .com으로 대체한다.
//lastindex로 뒤에 있는 . 위치 값을 substring으로 변환해주고, 변환된 내용을 .com으로 변환해준다.

let fruits = fruit.split(','); //Apple, Banana, Kiwi
// 쉼표를 기준으로 내용을 잘라내서 배열을 생성해줌.

for (f of fruits) {
    console.log(f.trim());
}


console.log('-------------------------------');


let numbers = '990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 210201-3456789';
numbers += ' 200202-4567890';
numbers += ' 0003014567890';

// 2000년 이전, 이후 구분 -> 1,3이면 남자
// 2000년 이전, 이후 구분 -> 2,4이면 여자

function getGender(num) {
    let fNum = num.replace('-','').substr(6,1);
    let fYear = num.substr(0,2);
    if (fNum == '1') {
        return '남자';
    }else if (fNum == '2') {
        return '여자';
    }else if (parseInt(fYear) > 20 && fNum == '3') {
        return '남자';
    }else if (parseInt(fYear) >= 20 && fNum == '4') {
        return '여자';
    } else {
        return '잘못입력';
    }    
}

let numAry = numbers.split(' ');
for (num of numAry) {
    result = getGender(num);
    console.log('결과: ' +result);
}

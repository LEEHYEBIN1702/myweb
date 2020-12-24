//function2. js

// function nameFunc() {
// let name1 = document.getElementById('name').value;
// console.log('입력한 이름은: ' + name1);
// }
// nameFunc;


// let name1 = window.prompt("숫자를 입력하세요.");
// let name2 = window.prompt("숫자를 입력하세요.");


//     sum(name1, name2);

//     function sum(a, b) {
//         let n1 = parseInt(a); // '30'
//         let n2 = parseInt(b);
//         console.log(n1 + n2);
//     }


// let name1 = window.prompt("숫자를 입력하세요.");

// checkGrade (name1); // 90:A, 80:B, 70:c, 그외:D

//     function checkGrade(grade) {
//         let n1 = parseInt(grade); 
//         if (n1 >= 90) {
//            console.log('A 입니다.')
//         } else if (n1 >=80) {
//             console.log('B 입니다.')
//         } else if (n1 >= 70) {
//             console.log('C 입니다.')
//         } else {
//             console.log('D 입니다.')
//         }

//     }

// let name1 = window.prompt("숫자를 입력하세요.");
// let name2 = window.prompt("숫자를 입력하세요.");

// diffSum(name1, name2); //입력받은 두 수 사이의 합: 15 ~ 25

// function diffSum(a, b) {
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     if (15 < n1 + n2  && n1 + n2 < 25) {
//         console.log(n1 + n2);
//     } else {
//         console.log();
//     }
// }


// let numAry = [];
// for (let i = 0; i < 5; i++) {
// let name2 = window.prompt("숫자를 입력하세요.");
// numAry [i] = parseInt(name1);
// }

// findMax(name1, name2); 

//     function findMax(a, b) {
//         let n1 = parseInt(a); 
//         let n2 = parseInt(b);
//         if (15 <n1+n2< 25) {
//             console.log (n1+n2);
//         } else {
//             console.log();
//         }
//     }

    // let numAry = [];
    // for (let i = 0; i < 5; i++) {
    //     let name1 = window.prompt('숫자를 입력하세요.');
    //     numAry[i] = parseInt(name1);
    // }
    // findMax();

    // function findMax() {
    //     //numAry[]
    //     let max= 0;
    //     for (val of numAry) {
    //         if (max < val) {
    //             max = val
    //         }
    //     }
    // }
    // console.log("최대값: " + max);
   
    // let friend1 = {}
    // friend1.name = 'Hong';
    // friend1.age = 20;
    // friend3.hobby = 'reading';

    // let friend2 = {
    //     name : 'Hwang',
    //     age : 20
    // }

//     let friends = [friend1, friend2];
//     for (friend of friends) {
//     for (field in friend) {
//         console.log(friend[field]);
//     }
// }

// let friends = [];
// friends[0] = friend1
// friends[1] = friend2
// let numAry = [];




 let friends = []; // 배열
    for (let i = 0; i < 3; i++) {
        let name = window.prompt('이름을 입력하세요.');
        let age = window.prompt('나이를 입력하세요.');
        let friend = {}; // 오브젝트
        friend.name = name;
        friend.age = age;
        friends[i] = friend;
    }
    document.write('<table border="1"><tr>');
    document.write('<tr><td>이름</td><td>나이</td></tr>')
    for (friend of friends) {
        document.write('<tr>'); // 받아진 이름,나이 행만큼 줄이 만들어져야 하니까 밖에 써주는 것.
        document.write('<tr align= "center">')
        for (field in friend) {
            document.write('<td>' + friend[field] + '</td>')
        }
        document.write('</tr>');
    }
    document.write('</table>');
    

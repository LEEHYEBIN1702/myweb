let friends = [];
let i = 0; 
// 전역변수 한번 선언했기 때문에 인풋 프렌드 펑션이 호출 될 때 마다 증가함.

// function input_freind() {
//     let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let hobby = document.getElementById('hobby').value;

    // console.log(name.value, age.value, hobby.value);


//     let friend = {};
//     friend.name = name;
//     friend.age = age;
//     friend.hobby = hobby;

//     friends[i++] = friend;
//     // console.clear();

//  for (friend of friends) {
//         for(field in friend) {
//             console.log(friend[field]);
//         }
//     }


    // document.getElementById('show').innerHTML= name.value+','+age.value+','+hobby.value;
    // document.getElementById('result').innerHTML= name.value+','+age.value+','+hobby.value;
}
// 클릭하는 이벤트가 발생할 때 펑션을 실행하겠다.

function input_freind() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let hobby = document.getElementById('hobby').value;

    let liTag = document.createElement('li');
    liTag.innerHTML = name, age, hobby;
    document.getElementById('name, age, hobby').append(liTag);

    let ulTag = document.createElement('ul');
    ulTag.id = 'friends' = ;

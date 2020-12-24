
function input_freind() {
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let hobby = document.getElementById('hobby');
    console.log(name.value, age.value, hobby.value);

    // document.getElementById('show').innerHTML= name.value+','+age.value+','+hobby.value;
    document.getElementById('result').innerHTML= name.value+','+age.value+','+hobby.value;
}
// 클릭하는 이벤트가 발생할 때 펑션을 실행하겠다.


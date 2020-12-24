function input_freind() {
    let fruit = document.getElementById('fruit').value;
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = fruit;
    document.getElementById('fruits').append(liTag2);
    
    document.getElementById('fruit').value = '';
    // 입력 후 기본값이었던 멜론을 비워주는 기능

    console.log(fruit);
}

let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple'
ulTag.id = 'fruits';


let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';

ulTag.append(liTag);
ulTag.append(liTag1);


document.getElementById('show').append(ulTag);

console.log(ulTag);
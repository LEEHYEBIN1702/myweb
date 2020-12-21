var name = document.getElementById('show').innerHTML;
console.log(name);    
document.getElementById('show').innerHTML = "Happy";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; // <div>Nice</div>

document.getElementById('show').after(divTag);
//
var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML = "Apple"; // <li>Apple</li>
li_2.innerHTML = "Orange"; // <li>Orange</li>

document.getElementById('fruit').append(li_1);
document.getElementById('fruit').append(li_2);

// 
var grade = 4;
for (var i =1; i <=9; i++) {
    var str = grade + ' * ' + i + ' = ' + (grade*i);
console.log(str);
}

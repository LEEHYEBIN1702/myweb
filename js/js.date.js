// date.js
// 미완성임.. 
let today = new Date('2020-12-01'); //GMT:00:00:00: -> 09:00:00
// today.setMonth(0);
// console.log(today.getDay());

function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + dd);
    today = new Date(yyyy, mm, 0);
    console.log(today.getDate());
}

// setCal('2020', '06', '05');

let table = document.createElement('table');
    table.setAttribute('border', '1');
    let tr, td;

// 달력 요일
function CreateHeader() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    let tr = document.createElement('tr');
    
    for (day of days) {
    let th = document.createElement('th');
        th.innerHTML = day;
        tr.append(th);
    }
    table.append(tr);
}

// 달력 요소 출력
function showCal(yyyy, mm) {
    CreateHeader();
    // 현재 달의 1일
    let today = new Date(yyyy + '-' + mm + '-01');
    let firstDay = today.getDay();

    // 지난달의 마지막 일
    today = new Date(yyyy, mm, 0);
    let lastDay = today.getDate();
    
    tr = document.createElement('tr');

    for(let i = 1; i <= lastDay; i++) {
        
        td = document.createElement('td');
        td.innerHTML = i;
        tr.append(td);
        
        if(i % 7 == 0) {
            tr = document.createElement('tr');
        }
        table.append(tr);
    }   

    document.getElementById('show').append(table);
}

showCal(2019, 5);
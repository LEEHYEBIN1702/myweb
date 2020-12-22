function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write('<ul>');
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            document.write('<li class= "even">' + dan + ' * ' + i + ' = <b> ' + (dan * i) + '</b></li>');
        } else {
        document.write('<li class= "odd">'+ dan + ' * ' + i + ' = <b> ' + (dan * i) + '</b></li>');
        }
    }
    document.write('</ul>');
}


// function myFunc() {
//     document.write("<ul><li>Apple</li><li>Banana</li></ul>");
//     let dan = 4;
//     document.write('<ul>');
//     for (let i = 1; i <= 10; i++) {
//         // document.write('<p>' + dan + ' * ' + i + ' = <b> ' + (dan*i) + '</b></p>')
//         if (i % 2 == 1) {
//             document.write('<li class= "even">' + dan + ' * ' + i + ' = <b> ' + (dan * i) + '</b></li>');
//         } else {
//         document.write('<li class= "odd">'+ dan + ' * ' + i + ' = <b> ' + (dan * i) + '</b></li>');
//         }
//     }
//     document.write('</ul>');
// }

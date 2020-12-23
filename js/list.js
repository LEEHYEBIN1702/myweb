function myFunc() {
    // document.write('<style> .odd { background: yellow }')
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write ('<table border="1">');
    document.write('<tr>');
    for (let i = 1; i <= 10; i++) {
        document.write('<tr align= "center">')
        if (i % 2 == 1) {
        document.write('<td>' + dan + ' * ' + i + '</td>' + '<td>' + ' = </td>' + '<td> '+ (dan*i) + '</td>')
        } else {
            document.write('<td>' + dan + ' * ' + i + '</td>' + '<td>' + ' = </td>' + '<td> '+ (dan*i) + '</td>')    
        }
    }
    document.write('</tr>');
}

 // document.write('<p>' + dan + ' * ' + i + ' =<b> ' + (dan*i) + '</b></p>')

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

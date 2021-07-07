var myArray = ['Martin', 'Niklas', 'Manfred', 'Susi', 'Christoph'];
for (var key in myArray) {
    document.getElementById('output').innerHTML += key + '<br>';
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var key = myArray_1[_i];
    document.getElementById('output').innerHTML += key + '<br>';
}
for (var _a = 0, _b = Object.entries(myArray); _a < _b.length; _a++) {
    var _c = _b[_a], index = _c[0], value = _c[1];
    document.getElementById('output').innerHTML += index + ' ' + value + '<br>';
}

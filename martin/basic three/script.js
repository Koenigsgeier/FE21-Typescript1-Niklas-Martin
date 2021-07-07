var myArray = ['Martin', 'Niklas', 'Manfred', 'Susi', 'Christoph'];
for (var key in myArray) {
    document.getElementById('output').innerHTML += key + '<br>';
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var key = myArray_1[_i];
    document.getElementById('output').innerHTML += key + '<br>';
}

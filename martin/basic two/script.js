var person = [{
        fname: 'Martin',
        lname: 'Maier'
    }];
document.write(person[0].fname + ' ' + person[0].lname);
function loop() {
    person.forEach(function (person) {
        for (var i = 1; i <= 10; i++) {
            document.write(person.lname, '<br>');
        }
    });
}
person.forEach(function (person) {
    for (var i = 1; i <= 10; i++) {
        console.log(person.fname);
    }
});
(function () {
    setTimeout(function () { loop(); }, 5000);
})();

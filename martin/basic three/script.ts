let myArray: string[] = ['Martin', 'Niklas', 'Manfred', 'Susi', 'Christoph'];

for (const key in myArray) {
  document.getElementById('output').innerHTML += key + '<br>';
}

for (const key of myArray) {
  document.getElementById('output').innerHTML += key + '<br>';
}

for (const [index, value] of Object.entries(myArray)) {
  document.getElementById('output').innerHTML += index + ' ' + value + '<br>';
}


//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');
const myNo = document.querySelector('h2');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/4.jpg') {
      myImage.setAttribute ('src','images/1.jpg');
      myNo.textContent = 'No.1';
      
    } else {
      myImage.setAttribute ('src','images/4.jpg');
      myNo.textContent = 'No.4';
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'どっちが好き、' + myName + '？';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'どっちが好き、' + storedName + '？';
}

myButton.onclick = function() {
  setUserName();
}

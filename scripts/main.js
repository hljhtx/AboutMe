let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute('src','images/coding.jpg');
    } else {
      myImage.setAttribute('src','images/firefox2.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = ', ' + myName;
  }
let myHeading = document.querySelector('h1');
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi ' + storedName + ' !';
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Hi ' + storedName + ' !';
    }
  }

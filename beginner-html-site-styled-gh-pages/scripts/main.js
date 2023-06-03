var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
  }

document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
var myImage = document.querySelector("img");

myImage.onclick = function () {
let mySrc = myImage.getAttribute("src");
if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
} else {
    myImage.setAttribute("src", "images/firefox-icon.png");
}
};
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  myButton.onclick = function () {
    setUserName();
  };
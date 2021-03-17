// Write your code here!

const removeEle = document.getElementById("main");
removeEle.remove();

const newHeader = document.createElement("h1");

document.body.appendChild(newHeader);

newHeader.id = "victory";

newHeader.innerHTML = "Crystal is the champion";

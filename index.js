const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "images/imges/download.jpeg"){
        myImg.setAttribute("src", "images/imges/image.png");

    } else{
        myImg.setAttribute("src", "images/imges/download.jpeg")
    }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("enter your name");
    if(!myName){
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `mahimaluru invites you ${myName}`;
    }
    
}

// if(!localStorage.getItem("name")){
//     setUserName();
// } else{
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mahimaluru invites you again ${storedName}`;
// }

myButton.onclick = () => {
    setUserName();
}
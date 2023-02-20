const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 이미지를 자바스크립트로 만들기
bgImage.src = `img/${chosenImage}`; 
document.body.appendChild(bgImage);
bgImage.id = 'bgImage';
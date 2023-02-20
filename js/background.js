const images = ["1.JPG", 
                "2.JPG", 
                "3.JPG", 
                "4.JPG", 
                "5.JPG",
                "6.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 이미지를 자바스크립트로 만들기
bgImage.src = `img/${chosenImage}`; 
document.body.appendChild(bgImage);
bgImage.id = 'bgImage';
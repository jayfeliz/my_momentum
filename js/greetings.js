const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요하지 않은 변수이기 때문에 모두 대문자로 작성
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault(); //브라우저의 기본 동작(submit하면 페이지가 새로고침되는)을 막아주는 코드
	loginForm.classList.add(HIDDEN_CLASSNAME); //loginform에 hidden 클래스 추가하기 -> 로그인 창이 숨겨짐!
	const username = loginInput.value; //username을 기억하기
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}, Welcome!`;
	// greeting.innerText = "Hello " + username + ", Welcome!"; //위와 같은 코드
	greeting.classList.remove(HIDDEN_CLASSNAME) //greeting에 hidden 클래스 삭제하기 -> greeting 문구가 나타남!
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings
	paintGreetings(savedUsername);
	
}
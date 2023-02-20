const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; 
/* todos라는 리스트에 to do 목록들 저장하기 위한 것 
-> 새로고침시마다 리스트가 리셋되는것을 막기 위해 let으로 변수 선언하여 업데이트 될 수 있도록 하기 */

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    /* JSON.stringify : 변수를 문자열로 바꿈 
       -> local storage에는 array로 저장이 안됨. 
          나중에 우리가 todos를 array의 형태로 가져오려 하기 때문에, 
          array 형식의 문자열로 만들어서 localstorage에 저장하는 것이다.*/
}

function deleteToDo(event) {
    //어떤 항목의 delete 버튼이 클릭되었는지 알기 위해 event.target.parentElement를 확인한다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id를 제외한 다른 todo 목록들은 남겨두기 위하여 작성한 함수
    saveToDos(); //다시 목록을 불러주기
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); //html에서 그냥 li가 아니라 span을 하위에 추가하는 이유는 나중에 삭제할 수 있는 기능도 넣을 것이기 때문에 span으로 각각 생성하는 것
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);  //li가 span이라는 child를 가지게 됨, append는 마지막에 넣어주기
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { //todo 리스트에 각각 고유한 id를 주기 위해서 그냥 텍스트가 아닌 object 형태로 저장하기
        text: newTodo, //text에 todo input 텍스트를 넣어주고, 
        id: Date.now(), //id에 Date.now 함수를 써서 랜덤숫자를 준 것처럼 작동
    }
    toDos.push(newTodoObj);  //newTodo 들을 toDos에 푸시(넣어주기)
    paintToDo(newTodoObj);
    saveToDos(); // local starage에 to do 목록들 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // string으로 저장된 to do 목록들을 parsing하기(array로 가져오기!!)
    toDos = parsedToDos; // 새로고침 시 리셋되지 않도록 이전 todo리스트를 넣어준 것
    parsedToDos.forEach(paintToDo); //forEach는 array 각각의 요소에 대해서 함수를 실행하게 해준다. (for문을 사용하지 않아도!!)
}
const toDoForm = document.querySelector('.toDoForm');
const TODOS = 'todos'
let toDoList = [];

function saveToDo(){
    localStorage.setItem(TODOS, JSON.stringify(toDoList));
}
function delToDo(event){
    const olist = document.querySelector('.olist');
    
    const targetBtn = event.target;
    const targetLi = targetBtn.parentNode;

    olist.removeChild(targetLi);
    
    const cleanToDos = toDoList.filter(function(apple){
        return apple.id !== parseInt(targetLi.id)
    })
    toDoList = cleanToDos;
    
    saveToDo(toDoList);
}
function checkedToDo(event){
    const targetBtn = event.target;
    targetBtn.classList.toggle('default');
    targetBtn.classList.toggle('checked');
    
    const targetText = targetBtn.nextSibling;
    targetText.classList.toggle('done');
}

function showToDo(text){
    const li = document.createElement('li'),
          btn = document.createElement('a'),
          btn2 = document.createElement('a'),
          span = document.createElement('span');
    const ol = document.querySelector('.olist');
    const newId = toDoList.length + 1;
    
    const toDoObj = {
        text: text,
        id: newId
    }
    span.innerHTML= text;
//    btn.innerHTML= '✔︎';
//    btn2.innerHTML = 'x';
    btn.addEventListener("click", checkedToDo);
    btn.classList.add('default');
    btn2.classList.add('delBtn');
    btn2.addEventListener("click", delToDo);
    li.appendChild(btn);
    li.appendChild(span);
    li.appendChild(btn2);
    ol.appendChild(li);
    li.id = newId;

    toDoList.push(toDoObj);
    
    saveToDo();
}

function toDoHandler(event){
    event.preventDefault();
    const toDoInput = toDoForm.querySelector('input');
    const toDoValue = toDoInput.value;
    showToDo(toDoValue);
    toDoInput.value="";
    
}
function loadToDo(){
    const loadedToDo = localStorage.getItem(TODOS),
          parsedToDo = JSON.parse(loadedToDo);
    if (loadedToDo !== null){
        parsedToDo.forEach(function(index){
            showToDo(index.text);
        })
        
    }
}

function init(){
    toDoForm.addEventListener("submit", toDoHandler);
    loadToDo();
}
init();
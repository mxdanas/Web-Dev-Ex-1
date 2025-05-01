let todoList = [];

document.getElementById('AddTaskBtn').addEventListener('click', ()=>{
    addTodo();
});
function addTodo(){
    const inputElement = document.getElementById('taskName');
    const name = inputElement.value.trim();

    if(!name){
        alert('please enter a task');
        return;
    }
    todoList.push({
        name:name,
        isChecked: false
    });
    inputElement.value = '';
    renderTodo();
}
function renderTodo(){
    let todoListHtml = '';
    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const isChecked = todoObject.isChecked ? 'checked' : '';
        const className = todoObject.isChecked ? 'completed' : '';

        const html = `
            <div class="li">
                <input type="checkbox" ${isChecked} onchange="toggleCheckbox(${i})">
                <span class=" todoElement ${className} ">${name}</span>
                <button onclick="deleteTodo(${i})" class="delCss">Delete</button>
            </div>
        `;
        todoListHtml+=html;
    }
    document.getElementById('showToDos-js').innerHTML = todoListHtml;
}
function deleteTodo(index){
    todoList.splice(index,1);
    renderTodo();
}
function toggleCheckbox(index){
    todoList[index].isChecked = !todoList[index].isChecked;
    renderTodo();
}
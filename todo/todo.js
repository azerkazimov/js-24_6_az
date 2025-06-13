let todos = []
let nextId = 1

const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".todo-list")
const totalTaskSpan = document.querySelector(".total-tasks")
const completedTaskSpan = document.querySelector(".completed-tasks")
const clearCompletedBtn = document.querySelector(".clear-completed")
const clearAllBtn = document.querySelector(".clear-all")

function initApp() {
    updateStats()
}

function addTodoItem(text) {
    const todo = {
        id: nextId++,
        text: text,
        completed: false
    }
    todos.push(todo)

    const li = createTodoElement(todo)
    li.classList.add("fade-in")
    todoList.insertBefore(li, todoList.firstChild) // En yuxari elave et => add to top
    updateStats()
}

function createTodoElement(todo) {
    const li = document.createElement("li")
    li.className = "todo-item"
    li.dataset.id = todo.id

    if (todo.completed) {
        li.classList.add("completed")
    }

    li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? "cheched" : ""}>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn">Delete</button>
    `
    const chechbox = li.querySelector(".todo-checkbox")
    const deleteBtn = li.querySelector(".delete-btn")

    chechbox.addEventListener("change", () => toggleTodoWithAnimation(todo.id))
    deleteBtn.addEventListener("click", () => deleteTodoWithAnimation(todo.id))

    return li
}

function toggleTodoWithAnimation(id) {
    const todo = todos.find(elem => elem.id === id)
    const todoElement = document.querySelector(`[data-id="${id}"]`)

    if (todo && todoElement) {
        todo.completed = !todo.completed

        if (todo.completed) {
            todoElement.classList.add("dropping")
            setTimeout(() => {
                todoElement.classList.remove("dropping")
                renderAllTodos(false)
            }, 800);
        } else {
            todoElement.classList.add("rising")
            setTimeout(() => {
                todoElement.classList.remove("rising")
                renderAllTodos(false)
            }, 600);
        }

        updateStats()
    }
}

function deleteTodoWithAnimation(id) {
    const todoElement = document.querySelector(`[data-id="${id}"]`)
    if (todoElement) {
        todoElement.style.animation = "fadeOut 0.3s ease-out forwards"
        setTimeout(() => {
            todos = todos.filter(elem => elem.id === id)
            renderAllTodos(false)
        }, 300);
    }
}



function updateStats() {
    const total = todos.length // umumi say
    const completed = todos.filter(todo => todo.completed).length // completed sayi

    totalTaskSpan.textContent = total
    completedTaskSpan.textContent = completed

}

function renderAllTodos(animate = false) {

}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const text = todoInput.value.trim()

    if (text) {
        addTodoItem(text)
        todoInput.value = ""
        updateStats()
    }
})

initApp()
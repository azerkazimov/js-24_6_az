### Nümunə 1: Dinamik tapşırıqlar siyahısı

```javascript
class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.tasks = [];
        this.init();
    }
    
    init() {
        this.createForm();
        this.createTaskList();
    }
    
    createForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');
        
        input.type = 'text';
        input.placeholder = 'Tapşırığı daxil edin...';
        button.textContent = 'Əlavə et';
        
        form.appendChild(input);
        form.appendChild(button);
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask(input.value);
            input.value = '';
        });
        
        this.container.appendChild(form);
    }
    
    createTaskList() {
        this.taskList = document.createElement('ul');
        this.container.appendChild(this.taskList);
    }
    
    addTask(text) {
        if (!text.trim()) return;
        
        const task = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        this.tasks.push(task);
        this.renderTask(task);
    }
    
    renderTask(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        
        const span = document.createElement('span');
        span.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            li.classList.toggle('completed', task.completed);
        });
        
        deleteBtn.addEventListener('click', () => {
            this.deleteTask(task.id);
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        this.taskList.appendChild(li);
    }
    
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        const li = this.taskList.querySelector(`[data-id="${id}"]`);
        li.remove();
    }
}

// İstifadə
const todoList = new TodoList('todo-container');
```



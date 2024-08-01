let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


// add task button
function AddTask() {
    let taskInputElement = document.querySelector('.input');
    let taskInput = taskInputElement.value;
    if (taskInput.trim()) {
        createTask(taskInput);
        swal("Task Added", "", "success");
    } else {
        swal("Empty Task", "", "error");
    }
    taskInputElement.value = ''; 
}

// create task
function createTask(val) {
    tasks.push(val);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// remove task
function removeTask(index) {
    swal({
      title: "Are you sure to delete task?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        swal("Task Deleted!", {
          icon: "success",
        });
      } else {
        swal("Unless Task Exist");
      }
    });
    
}

//dispaly tasks
function displayTasks() {
    const tasksContainer = document.querySelector('.tasks'); 
    if(tasks.length ==0)  {
        tasksContainer.innerHTML = 'No Tasks';
    }
    else {
        tasksContainer.innerHTML = '';
        tasks.forEach((task, index) => {
                const taskBox = document.createElement('div');
                taskBox.classList.add('task-box');
                taskBox.innerHTML = `
                    <h3>${task}</h3>
                    <button onclick="removeTask(${index})">Delete</button>
                `;
                tasksContainer.appendChild(taskBox);
            }
        );
    }
}

displayTasks();


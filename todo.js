
document.querySelector('.btn').onclick = function myfunc() {
    let size = document.querySelector('.input').value.length;
    if (size == 0) {
        alert("Bhai sahab Task Likh to do ")
    }
    else {
        // adding new task in exsited tasks(in task div) 
        document.querySelector('.todo').innerHTML += `<div class = "task">
                                                
                                                <span id = "new">${document.querySelector('.input').value}
                                                </span>
                                                
                                                <button class="delete">
                                                <i class="fa-solid fa-trash-can"></i>
                                                </button>
                                                </div>`;


        //deleting of task

        let curr_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < curr_tasks.length; i++) {
            curr_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        // when task completed crossing of task 

        let complete = document.querySelectorAll(".task")
        for (let i = 0; i < complete.length; i++) {
            complete[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        // clearing input field after every task input

        document.querySelector(".newtask input").value = "";

    }

}


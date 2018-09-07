document.addEventListener('DOMContentLoaded', function () {

    var input = document.getElementById('taskInput');
    var btnAdd = document.getElementById('addTaskButton');
    var ul = document.getElementById('taskList');
    var btnFinish = document.getElementById('removeFinishedTasksButton');
    var body = document.querySelector('body');


    var tasks = document.createElement('div');
    tasks.innerText = 'Tasks to do: ';
    body.insertBefore(tasks, ul);
    var count = document.createElement('span');
    tasks.appendChild(count);

    function toCount() {
        var newLi = document.querySelectorAll('li');
        var doneTasks = document.querySelectorAll('.complete');
        counter = newLi.length - doneTasks.length;
        count.innerText = counter;
    }

    btnAdd.addEventListener('click', function () {

        var newList = document.createElement('li');
        var newH1 = document.createElement('h1');
        var btnDel = document.createElement('button');
        var btnCom = document.createElement('button');

        if (input.value.length > 5 && input.value.length < 100) {

            newH1.innerText = input.value;
            btnDel.innerText = 'delete';
            btnCom.innerText = 'complete';


            ul.appendChild(newList);
            newList.appendChild(newH1);
            newList.appendChild(btnDel);
            newList.appendChild(btnCom);

            toCount();

            btnCom.addEventListener('click', function () {
                newList.classList.toggle('complete');

                toCount();
            })

            btnDel.addEventListener('click', function () {
                newList.parentElement.removeChild(newList);
                newList.classList.toggle('complete');

                toCount();
            })

            input.value = '';


        }
        else {
            alert("task musi miec od 5 do 100 znakow");
        }
    });


    btnFinish.addEventListener('click', function () {

        var ListToDel = document.querySelectorAll('.complete');
        for (var i = 0; i < ListToDel.length; i++) {
            ListToDel[i].parentElement.removeChild(ListToDel[i]);
        }
    })


});




document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('to-do-form');
    const toDoList = document.getElementById('to-do-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const toDoText = document.getElementById('to-do').value.trim();

        if (toDoText === "") {
            alert("To-do's text cannot be blank");
            return;
        }

        if (toDoList.getElementsByTagName('li').length >= 10) {
            alert("Please complete some to-dos before adding new ones.");
            return;
        }

        const newToDo = document.createElement('li');
        newToDo.className = 'to-do-item list-group-item d-flex justify-content-between align-items-center';
        newToDo.innerHTML = `
            <p class="m-0">${toDoText}</p>
            <button class="btn btn-danger">Done</button>
        `;

        toDoList.appendChild(newToDo);
        document.getElementById('to-do').value = ''; // Clear input
    });

    // Delegate the click event for dynamically created elements
    toDoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            event.target.closest('li').remove();
        }
    });
});

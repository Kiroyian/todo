document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myInput');
    const dateInput = document.getElementById('myDate');
    const descriptionInput = document.getElementById('myDescription');
    const ul = document.getElementById('myUL');

    function newElement() {
        const title = input.value;
        const date = dateInput.value;
        const description = descriptionInput.value;

        if (title === '' || date === '' || description === '') {
            alert('You must fill out the title, date, and description!');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                <strong>${title}</strong> - ${description} (${date})
            </span>
            <div>
                <button class="completeBtn" onclick="markAsCompleted(this)">Mark as Completed</button>
                <button class="editBtn" onclick="editElement(this)">Edit</button>
                <button class="deleteBtn" onclick="deleteElement(this)">Delete</button>
            </div>
        `;
        ul.appendChild(li);

        input.value = '';
        dateInput.value = '';
        descriptionInput.value = '';
    }

    window.newElement = newElement;

    window.editElement = function(button) {
        const li = button.parentNode.parentNode;
        const parts = li.querySelector('span').innerHTML.split(' - ');
        const title = parts[0].replace('<strong>', '').replace('</strong>', '');
        const descriptionDate = parts[1].split(' (');
        const description = descriptionDate[0];
        const date = descriptionDate[1].replace(')', '');

        input.value = title;
        descriptionInput.value = description;
        dateInput.value = date;

        ul.removeChild(li);
    }

    window.deleteElement = function(button) {
        const li = button.parentNode.parentNode;
        ul.removeChild(li);
    }

    window.markAsCompleted = function(button) {
        const li = button.parentNode.parentNode;
        li.classList.toggle('checked');
    }
});

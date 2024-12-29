function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const list = document.getElementById("todo-list");
    const listItem = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        editTodo(listItem, textSpan);
    };

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.onclick = function () {
        listItem.classList.toggle("striked");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        list.removeChild(listItem);
    };

    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    input.value = "";
}

function editTodo(listItem, textSpan) {
    const newText = prompt("Edit your task:", textSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
        textSpan.textContent = newText.trim();
    }
}

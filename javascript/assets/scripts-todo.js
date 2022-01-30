function addTask() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var task = document.createElement("span");
    var checkbox = document.createElement("input");
    // item.setAttribute("class", "unchecked");
    task = document.getElementById("task").value;
    checkbox.type = "checkbox";
    if (document.getElementById("task").value === '') {
        alert("Insira alguma tarefa!");
    } else {
        item.appendChild(checkbox);
        item.appendChild(document.createTextNode(task));
        list.appendChild(item);
        document.getElementById("task").value = '';
    }
    item.addEventListener('click', checked);
}


function checked() {
    this.classList.toggle('checked');
}
const textInput = document.querySelector("#input-todo");
const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");
const addedText = document.querySelector(".todo-text");
const allRadio = document.querySelector("#all-radio");
const openRadio = document.querySelector("#open-radio");
const doneRadio = document.querySelector("#done-radio");

function addNewList() {
  addBtn.addEventListener("click", () => {
    const newText = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const newList = document.querySelector(".todo-list");

    if (textInput.value !== " " && textInput.value.length >= 5) {
      newText.innerHTML = textInput.value;
      newList.appendChild(newText);
      newText.appendChild(checkBox);
    }
    textInput.value = "";
    removeBtn.addEventListener("click", () => {
      if (checkBox.checked) {
        newText.remove();
        checkBox.remove();
      }
    });
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        newText.style.textDecoration = "line-through";
      } else {
        newText.style.textDecoration = "";
      }
    });
  });
}
addNewList();

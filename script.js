const textInput = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const addedText = document.querySelector(".todo-text");
const textToAdd = document.querySelector(".add-text");

addBtn.addEventListener("click", () => {
  addedText.innerHTML = textToAdd.value;
  const newList = document.createElement("li");
  textInput.classList.add("li");
});

// const textInput = document.querySelector("#input-todo");
// const addBtn = document.querySelector("#add-btn");
// const removeBtn = document.querySelector("#remove-btn");
// const allRadio = document.querySelector("#all-radio");
// const openRadio = document.querySelector("#open-radio");
// const doneRadio = document.querySelector("#done-radio");

// function addNewList() {
//   addBtn.addEventListener("click", () => {
//     const newText = document.createElement("li");
//     const checkBox = document.createElement("input");
//     checkBox.setAttribute("type", "checkbox");
//     const newList = document.querySelector("#todo-list");

//     if (textInput.value !== " " && textInput.value.length >= 5) {
//       newText.innerHTML = textInput.value;
//       newList.appendChild(newText);
//       newText.appendChild(checkBox);
//     }

//     textInput.value = "";

//     addRemoveButtonEventListener(removeBtn, checkBox, newText);

//     checkBox.addEventListener("change", () => {
//       if (checkBox.checked) {
//         newText.style.textDecoration = "line-through";
//       } else {
//         newText.style.textDecoration = "";
//       }
//     });

//     console.log(newList);
//     console.log(checkBox);
//     console.log(checkBox.checked);
//   });
// }

// function addRemoveButtonEventListener(removeBtn, checkBox, newText) {
//   removeBtn.addEventListener("click", () => {
//     if (checkBox.checked) {
//       newText.remove();
//       checkBox.remove();
//     }
//   });
// }

// addNewList();

/* TRYING TO MAKE BETTER CODE */

// const listContainer = document.querySelector(".todo-list");
// const newInput = document.querySelector("#input-todo");
// const addButton = document.querySelector("#add-btn");

// const state = [
//   {
//     text: "",
//     isDone: false,
//   },
// ];

// function createList() {}

// function rander() {
//   state.forEach(function forEachNewList(list) {
//     const newList = document.createElement("li");
//     const newCheckbox = document.createElement("input");
//     newCheckbox.setAttribute("type", "checkbox");
//     newList.innerHTML = list;
//     listContainer.appendChild(newList);
//     newList.appendChild(newCheckbox);
//   });
// }

// rander();

class TodoApp {
  state = {
    filter: "all",
    input_value: "",
    todos: [{ text: "Your List", isDone: false }],
  };

  constructor() {
    this.initEventHandlers();
    this.render();
  }

  initEventHandlers = () => {
    document
      .querySelector("#input-todo")
      .addEventListener("input", this.handleInputEvent);
    document
      .querySelector("#filter-section")
      .addEventListener("input", this.handleCheckboxEvent);
    document
      .querySelector("#add-btn")
      .addEventListener("click", this.handleAddTodo);
    document
      .querySelector("#remove-btn")
      .addEventListener("click", this.handleRemoveDoneEvent);
  };

  handleInputEvent = () => {
    const inputElement = document.querySelector("#input-todo");
    const currentValue = inputElement.value;
    this.state.input_value = currentValue;
    this.render();
  };

  handleCheckboxEvent = (event) => {
    const clickedCheckbox = event.target;
    const filterMode = clickedCheckbox.getAttribute("data-filter");
    this.state.filter = filterMode;
    this.render();
  };

  handleAddTodo = () => {
    const newTodoText = this.state.input_value;
    const newTodo = { text: newTodoText, isDone: false };
    this.state.todos.push(newTodo);
    this.render();
  };

  handleRemoveDoneEvent = () => {
    const onlyOpenTodos = this.state.todos.filter(
      (todo) => todo.isDone === false
    );
    this.state.todos = onlyOpenTodos;
    this.render();
  };

  /**
   * Render functions
   */

  renderCheckbox = (todo) => {
    const checkboxIsDone = document.createElement("input");
    checkboxIsDone.type = "checkbox";

    checkboxIsDone.addEventListener("input", () => {
      todo.isDone = !todo.isDone;
      this.render();
    });

    if (todo.isDone === true) {
      checkboxIsDone.checked = "checked";
    }

    return checkboxIsDone;
  };

  renderLiElement = (todo) => {
    const liElem = document.createElement("li");

    if (todo.isDone === true) {
      liElem.style.textDecoration = "line-through";
    }
    liElem.textContent = todo.text;
    return liElem;
  };

  render = () => {
    const todoList = document.querySelector("#todo-list");
    // delete all rendered todos

    todoList.innerHTML = "";
    // render todos
    this.state.todos.forEach((todo) => {
      const liElem = this.renderLiElement(todo);
      const checkboxElem = this.renderCheckbox(todo);

      liElem.appendChild(checkboxElem);
      todoList.appendChild(liElem);
    });
  };
}

const app = new TodoApp();

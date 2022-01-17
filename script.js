/* TRYING TO MAKE BETTER CODE */

class TodoApp {
  state = {
    filter: "all",
    input_value: "",
    todos: [],
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
    const radioBox = event.target;
    const filterMode = radioBox.getAttribute("data-filter");
    console.log(radioBox);
    console.log(event);
    console.log(filterMode);
    this.state.filter = filterMode;
    if (filterMode === "open") {
    }

    this.render();
  };

  handleAddTodo = () => {
    const newTodoText = this.state.input_value;
    this.state.input_value = "";
    const newTodo = { text: newTodoText, isDone: false };
    if (newTodoText !== "" && newTodoText.length >= 5) {
      this.state.todos.push(newTodo);
    }
    this.render();
  };

  handleRemoveDoneEvent = () => {
    const onlyOpenTodos = this.state.todos.filter(
      (todo) => todo.isDone === false
    );
    this.state.todos = onlyOpenTodos;
    this.render();
  };

  //   /**
  //    * Render functions
  //    */

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

    const inputField = document.querySelector("#input-todo");
    inputField.value = this.state.input_value;
    todoList.innerHTML = "";
    const filter = this.state.filter;
    let filterdTodos;

    // render todos

    if (filter === "all") {
      filterdTodos = this.state.todos;
    } else if (filter === "open") {
      filterdTodos = this.state.todos.filter((todo) => todo.isDone === false);
    } else if (filter === "done") {
      filterdTodos = this.state.todos.filter((todo) => todo.isDone === true);
    }

    filterdTodos.forEach((todo) => {
      const liElem = this.renderLiElement(todo);
      const checkboxElem = this.renderCheckbox(todo);
      liElem.appendChild(checkboxElem);
      todoList.appendChild(liElem);
    });
  };
}

const app = new TodoApp();

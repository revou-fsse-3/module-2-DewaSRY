import { Container, Children } from "/src/components/utils/type.js";

/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class TodoCard extends Children {
  /**
   *
   * @param {{
   * description:string, date:Date, id:number,
   * }} todo
   * @param {Date} date
   * @param {*} param2
   */
  constructor(todo, { onTodoEdit, onTodoDelete } = {}) {
    super();
    const [first, ...rest] = todo.description.split(" ");
    this.firstWord = first;
    this.description = [...rest].join("");
    if (!this.description) {
      this.firstWord = first.substring(0, 6);
      this.description = first.substring(6);
    }
    const date = new Date(todo.date);
    const hours = date.toLocaleTimeString();
    const yearsMon = date.toDateString();
    this.setContent = `
        <div class="todo-cards" id="${todo.id.toString()}"  draggable="true">
            <p>
            <span class="first">${this.firstWord}</span>
            ${this.description}
            </p>
            <div class="date">
            <span class="date">${yearsMon}</span> -
            <span class="hours">${hours}</span>
            </div>
            <input type="checkbox" name="" id="oppen-settings${todo.id}" />
            <label for="oppen-settings${todo.id}">&#x2026;</label>
            <div class="settings">
                <button>&#128394; Edit</button>
                <button>&#128465; Delete</button>
            </div>
        </div>
          `;
    this.checkboxInput = this.getContents("input[type='checkbox']")[0];
    const [edit, dele] = this.getContents("button");

    /**
     * @type {{HTMLElement}}
     */
    edit.addEventListener("click", () => {
      onTodoEdit();
      this.checkboxInput.checked = false;
    });
    dele.addEventListener("click", () => {
      onTodoDelete();
      this.checkboxInput.checked = false;
    });
  }
}

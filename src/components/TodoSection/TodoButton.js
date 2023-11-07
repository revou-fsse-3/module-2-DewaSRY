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
export default class TodoButton extends Children {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor({ createTodo, updateTodo }) {
    super();
    this.setContent = `
        <div class="wrapper" id="12">
            <span  onclick="todoForm.showModal()">&#65122;</span>
        </div>
        <dialog id="todoForm">
            <div class="todo-header">
                <h2>Add a new Note</h2>
                <span onclick="todoForm.close()">&#x274c;</span>
            </div>
            <form  method="dialog" id="todo-form">
                <label>Description</label>
                <textarea spellcheck="false" id="todo-desc"></textarea>
                <label>Date</label>
                <input type="datetime-local" spellcheck="false" id="todo-date"/>
                <input type="text" hidden>
                <button>Add new note</button>
            </form>
        </dialog>
        `;
    /**
     * @type {HTMLElement}
     */
    this.modal = this.getContent("todoForm");
    this.form = this.getContent("todo-form");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const description = e.target.querySelector("textarea").value;
      const date = e.target.querySelector("input[type='datetime-local']").value;
      const id = e.target.querySelector("input[type='text']").value;
      if (id) {
        const todo = {
          description,
          date,
          id,
        };
        updateTodo(todo);
      } else {
        createTodo(description, date);
      }

      this.modal.close();
    });
  }
}

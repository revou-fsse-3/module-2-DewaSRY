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
        <div class="wrapper" >
            <span  onclick="todoForm.showModal()">&#65122;</span>
        </div>
        <dialog id="todoForm">
            <div class="todo-header">
                <h2>Todo List Note</h2>
                <span onclick="todoForm.close()">&#x274c;</span>
            </div>
            <form  method="dialog" id="todo-form">
                <label>Describe Reminder</label>
                <textarea placeholder="Write Description ..." required spellcheck="false" id="todo-desc"></textarea>
                <label>Schedule  Date</label>
                <input required type="datetime-local" spellcheck="false" id="todo-date"/>
                <input type="text"id="todo-id" hidden>
                <button>Save Todo Note</button>
            </form>
        </dialog>
        `;
    /**
     * @type {HTMLDialogElement}
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
    document.addEventListener(
      "click",
      ({ target }) => {
        if (target.contains(this.form) && this.modal && this.modal.open) {
          this.modal.close();
        }
      },
      true
    );
  }
}

import { Container, Children } from "/src/components/utils/type.js";
/**
 * @type {{
 * getAllTodo:()=>void,
 * saveTodo:(NodeToSave:Object)=>void,
 * deleteTodo :(id:string)=>void
 * }}
 */
import TodoApi from "/src/api/TodoApi.js";
import TodoButton from "./TodoButton.js";
import TodoCard from "./TodoCard.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class TodoSection extends Container {
  constructor(root) {
    super(root);
    this.setContent = `
    <span class="page-title">
        <h1>Todo Notes</h1>
    </span>
        `;
    this.set(new TodoButton(this.TodoButtonHandler()));
    for (let todo of TodoApi.getAllTodo()) {
      this.set(new TodoCard(todo, this.cardsHandler(todo)));
    }
    /**
     * @type {{HTMLElement}}
     */
    this.modal = this.getContent("todoForm");
    this.desInput = this.getContent("todo-desc");
    this.dateInput = this.getContent("todo-date");
    this.idInput = this.getContent("todo-id");
  }
  TodoButtonHandler = () => {
    return {
      createTodo: (description, date) => {
        const id = TodoApi.saveTodo({
          description,
          date,
        });
        const todo = {
          description,
          date,
          id,
        };
        this.set(new TodoCard(todo, this.cardsHandler(todo)));
      },
      /**
       * @type {{
       * id:number,
       * date:Date,
       * description:string
       * }}
       */
      updateTodo: (todo) => {
        document.getElementById(todo.id).remove();
        this.set(new TodoCard(todo, this.cardsHandler(todo)));
      },
    };
  };

  /**
   * @type {{
   * id:number,
   * date:Date,
   * description:string
   * }}
   */
  cardsHandler(todo) {
    const { id, date, description } = todo;
    return {
      onTodoEdit: () => {
        this.desInput.value = description;
        this.dateInput.value = date;
        this.idInput.value = id;
        this.modal.showModal();
      },
      onTodoDelete: () => {
        document.getElementById(id).remove();
        const delId = TodoApi.deleteTodo(id);
      },
    };
  }
}

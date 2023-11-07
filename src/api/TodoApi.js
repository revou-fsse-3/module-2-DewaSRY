import LocalApi from "./LocalApi.js";
/**
 * @type {{
 * getAllTodo:()=>void,
 * saveTodo:(NodeToSave:Object)=>void,
 * deleteTodo :(id:string)=>void
 * }}
 */
export default class TodoApi {
  static local = new LocalApi("todoList");

  static getAllTodo() {
    const todo = TodoApi.local.getAllNodes();
    let fIdx = -1;
    let lIdx = todo.length - 1;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (fIdx < lIdx) {
          return {
            value: todo[++fIdx],
            done: false,
          };
        }
        return {
          value: todo[lIdx],
          done: true,
        };
      },
    };
  }
  /**
   * @param {{
   * description:string,
   * date:Date
   * }|{
   * description:string,
   * date:Date
   * id:string,
   * update:Date
   * }} todoSave
   */

  static saveTodo(todoSave) {
    return TodoApi.local.saveNode(todoSave);
  }
  static deleteTodo(id) {
    return TodoApi.local.deleteNode(id);
  }
}

class Reply {
  //added for test purpose
  constructor(...args) {
    this.args = args;
  }
  *getReply(msg) {
    for (let arg in this.args) {
      let reply = msg + this.args[arg];
      //generator should yield something
      yield reply;
    }
    //next call returns (yields) {done:true,value:undefined}
  }
  *otherFun() {
    yield this.getReply("Nice to meet you "); //yields Generator object
    yield this.getReply("See you "); //Yes, this can access
    //next call yields {done:true, value:undefined}
  }
  *evenMore() {
    yield* this.getReply("I miss you "); //yields generator result(s)
    yield* this.getReply("I miss you even more ");
  }
}
// console.log(todo.date.substring(5, 7));

import LocalApi from "./LocalApi.js";
/**
 * @type {{
 * getAllTodo:()=>void,
 * saveTodo:(NodeToSave:Object)=>void,
 * deleteTodo :(id:string)=>void
 * }}
 */
export default class NotesAPi {
  static local = new LocalApi("note-api");
  static getAllNotes() {
    return TodoApi.local.getAllNodes();
  }
  //   static getAllTodo() {
  //     const todo = TodoApi.local.getAllNodes();
  //     let fIdx = -1;
  //     let lIdx = todo.length - 1;
  //     return {
  //       [Symbol.iterator]() {
  //         return this;
  //       },
  //       next() {
  //         if (fIdx < lIdx) {
  //           return {
  //             value: todo[++fIdx],
  //             done: false,
  //           };
  //         }
  //         return {
  //           value: todo[lIdx],
  //           done: true,
  //         };
  //       },
  //     };
  //   }
  /**
   * @param {{
   *    body:string,
   * }} todoSave
   */

  static saveNote(note) {
    return TodoApi.local.saveNode(note);
  }
  static deleteNote(id) {
    return TodoApi.local.deleteNode(id);
  }
}

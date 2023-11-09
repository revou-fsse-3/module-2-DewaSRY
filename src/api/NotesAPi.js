import LocalApi from "./LocalApi.js";
/**
 * @type {{
 * getAllNote:()=>Object,
 * saveNote:(NodeToSave:Object)=>number,
 * deleteNote :(id:string)=>number
 * }}
 */
export default class NotesAPi {
  static local = new LocalApi("note-api");
  // static getAllNotes() {
  //   return NoteApi.local.getAllNodes();
  // }
  static getAllNote() {
    const Note = NotesAPi.local.getAllNodes();
    let fIdx = -1;
    let lIdx = Note.length - 1;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (fIdx < lIdx) {
          return {
            value: Note[++fIdx],
            done: false,
          };
        }
        return {
          value: Note[lIdx],
          done: true,
        };
      },
    };
  }
  /**
   * @param {{
   *    title:string
   *    body:string,
   * }|{
   * title:string
   *  body:string,
   * id:string,
   * update:Date
   * }
   * } NoteSave
   */

  static saveNote(note) {
    return NotesAPi.local.saveNode(note);
  }
  static createNotes() {
    const notesId = NotesAPi.local.saveNode({
      title: "Notes Title",
      body: "Write your notes there",
    });
    return NotesAPi.local.getNode(notesId);
  }

  static deleteNote(id) {
    return NotesAPi.local.deleteNode(id);
  }
  static getNote(id) {
    console.log(NotesAPi.collection);
    const notes = NotesAPi.local.getNode(id);
    return notes;
  }
}

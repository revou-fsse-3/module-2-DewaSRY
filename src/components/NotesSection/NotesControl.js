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
export default class NotesControl extends Children {
  constructor({ onAddNewNotes, onSaveNote } = {}) {
    super();
    this.setContent = `
    <div class="notes-control">
         <button >&#65122;</button>
         <button >Save</button>
    </div>

        `;
    const [add, save] = this.getContents("button");
    add.addEventListener("click", () => {
      onAddNewNotes();
    });
    save.addEventListener("click", () => {
      onAddNewNotes();
      onSaveNote();
    });
  }
}

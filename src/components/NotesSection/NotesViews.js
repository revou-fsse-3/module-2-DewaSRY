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
export default class NotesViews extends Children {
  constructor({} = {}) {
    super();
    this.setContent = `
      <label for="notes-title">Notes Title</label>
      <input type="text" id="notes-title" placeholder="Note Title " />
      <div id="notes-input" contenteditable="true">New Notes</div>
        `;
  }
}

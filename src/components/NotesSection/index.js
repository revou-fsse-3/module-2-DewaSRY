import { Container, Children } from "/src/components/utils/type.js";

import NotesControl from "./NotesControl.js";
import NotesList from "./NotesList.js";
import NotesViews from "./NotesViews.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class NotesSection extends Container {
  constructor(root) {
    super(root);
    this.setContent = `
    <span class="page-title">
        <h1>Notes</h1>
    </span>
        `;
    this.set(new NotesList());
    this.set(new NotesControl());
    this.set(new NotesViews());
  }
}

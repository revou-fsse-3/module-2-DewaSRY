import { Container, Children } from "/src/components/utils/type.js";
import NotesCard from "./NotesCard.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class NotesList extends Container {
  constructor() {
    super(document.createElement("nav"));
    this.setAtt("class", "notes-list");
    this.set(new NotesCard());
  }
}

import { Container, Children } from "/src/components/utils/type.js";
import NotesCard from "./NotesCard.js";
import NotesAPi from "/src/api/NotesAPi.js";

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
  /**
   * @param {
   * } cardsController
   */

  constructor(cardsController) {
    super(document.createElement("div"));
    this.setAtt("class", "notes-list");
    this.setAtt("id", "notes-list");
    for (let cards of NotesAPi.getAllNote()) {
      this.set(new NotesCard(cards, cardsController(cards)));
    }
  }
}

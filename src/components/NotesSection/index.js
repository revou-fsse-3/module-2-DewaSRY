import { Container, Children } from "/src/components/utils/type.js";

import NotesAPi from "/src/api/NotesAPi.js";

import NotesControl from "./NotesControl.js";
import NotesList from "./NotesList.js";
import NotesViews from "./NotesViews.js";
import NotesCard from "./NotesCard.js";
import ImageModal from "./ImageModal.js";
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
    this.set(new NotesList(this.NotesCardHandler));
    this.set(new NotesControl(this.NotesControllerHandler()));
    this.set(new NotesViews());
    this.set(new ImageModal(this.ImageModalHandler()));
    this.textArea = this.getContent("notes-input");
    this.title = this.getContent("notes-title");
    this.notesList = this.getContent("notes-list");
  }

  /**
   * @param {{
   * body:string,
   * title:string
   * }|{
   * body:string,
   * title:string
   * id:string,
   * update:Date
   * }} notes
   */

  NotesCardHandler = (notes) => {
    return {
      onSelected: () => {
        if (!notes) return;
        this.textArea.innerHTML = notes.body;
        this.title.value = notes.title;
        this.textArea.setAttribute("notes-id", notes.id);
      },
      onDelete: () => {
        this.textArea.innerHTML = "Write your notes there";
        this.title.value = "NotesTitle";
        NotesAPi.deleteNote(notes.id);
        const cards = this.getContents(`[data-id="${notes.id}"]`)[0];
        cards.remove();
      },
    };
  };
  NotesControllerHandler = () => {
    return {
      onAddNewNotes: () => {
        const newNodes = NotesAPi.createNotes();
        const card = new NotesCard(newNodes, this.NotesCardHandler(newNodes));
        this.notesList.prepend(card.getRoot());
      },
      onSaveNote: () => {
        const id = this.textArea.getAttribute("notes-id");
        if (!id) return;
        const body = this.textArea.innerHTML;
        const title = this.title.value;
        NotesAPi.saveNote({
          id,
          body,
          title,
        });
        const cards = document.querySelector(`[data-id="${id}"]`);
        if (cards) {
          cards.remove();
        }
        const saveNotes = NotesAPi.getNote(+id);
        if (!saveNotes) return;
        const card = new NotesCard(saveNotes, this.NotesCardHandler(saveNotes));
        this.notesList.prepend(card.getRoot());
      },
    };
  };
  ImageModalHandler = () => {
    return {
      insertImage: (img) => {
        this.textArea.insertAdjacentHTML(
          "beforeend",
          `
            <img
            src="${img}"
            id="image-tecno-5"
            alt="selected-image"
            width="300"
            height="300"
          />
        `
        );
      },
    };
  };
}

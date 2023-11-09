import { Container, Children } from "/src/components/utils/type.js";

import NotesAPi from "/src/api/NotesAPi.js";
// NotesAPi.saveNote({
//   title: "first",
//   body: "first notes",
// });
// NotesAPi.saveNote({
//   title: "second",
//   body: "second notes",
// });
// NotesAPi.saveNote({
//   title: "three",
//   body: "three notes",
// });

import NotesControl from "./NotesControl.js";
import NotesList from "./NotesList.js";
import NotesViews from "./NotesViews.js";
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
    this.set(new NotesViews(this.NotesViewsHandler()));
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
        console.log(cards);
        if (cards) {
          cards.remove();
        }

        const saveNotes = NotesAPi.getNote(+id);
        if (!saveNotes) return;
        console.log(saveNotes);
        const card = new NotesCard(saveNotes, this.NotesCardHandler(saveNotes));
        this.notesList.prepend(card.getRoot());
      },
    };
  };
  NotesViewsHandler = () => {
    return {};
  };
  // handlers() {
  //   return {
  //     onNoteSelect: (noteId) => {
  //       const selectedNote = this.notes.find((note) => note.id == noteId);
  //       this.setActiveNote(selectedNote);
  //     },
  //     onNoteAdd: () => {
  //       const newNote = {
  //         title: "New Note",
  //         body: "Take note...",
  //       };

  //       NotesAPI.saveNote(newNote);
  //       this.refreshNotes();
  //     },
  //     onNoteEdit: (title, body) => {
  //       NotesAPI.saveNote({
  //         id: this.activeNote.id,
  //         title,
  //         body,
  //       });

  //       this.refreshNotes();
  //     },
  //     onNoteDelete: (noteId) => {
  //       NotesAPI.deleteNote(noteId);
  //       this.refreshNotes();
  //     },
  //   };
  // }
}

// // console.log(TodoApi);
// const notes = document.getElementById("text-input");
// notes.innerHTML = `
// hewgwegehwe
// <img
//         src="/public/tekno-img/tekno-6.png"
//         id="image-tecno-6"
//         alt=""
//         width="350"
//         height="350"

//       />
// `;
// notes.addEventListener("blur", () => {
//   notes.childNodes.forEach((no) => {
//     console.log(no);
//   });
// });

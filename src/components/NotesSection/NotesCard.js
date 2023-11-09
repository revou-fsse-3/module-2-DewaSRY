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
export default class NotesCard extends Children {
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
  constructor(notes, { onSelected, onDelete } = {}) {
    super();
    this.setContent = `
    <div class="notes-cards" data-id="${notes.id}">
    <h2>${notes.title}</h2>
    <p>tesss...</p>

    <h3>
      <span> Update : </span>
      <span> 12/12/1/21 </span>
    </h3>

    <input type="checkbox" name="" id="oppen-settings${notes.id}" />
    <label for="oppen-settings${notes.id}">&#x2026;</label>
    <div class="settings">
    <button>&#128394; Edit</button>
    <button>&#128465; Delete</button>
    </div>
  </div>
        `;
    const [edit, del] = this.getContents("button");

    edit.addEventListener("click", () => {
      onSelected();
    });
    del.addEventListener("click", () => {
      onDelete();
    });
  }
}

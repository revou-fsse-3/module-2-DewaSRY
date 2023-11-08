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
  constructor(note, {} = {}) {
    super();
    this.setContent = `
    <div class="notes-cards">
    <h2>Halloo</h2>
    <p>Test...</p>

    <h3>
      <span> Update : </span>
      <span> 12/12/1/21 </span>
    </h3>

    <input type="checkbox" name="" id="oppen-settings" />
    <label for="oppen-settings">&#x2026;</label>
    <div class="settings">
      <button>&#128394; Edit</button>
      <button>&#128465; Delete</button>
    </div>
  </div>
        `;
  }
}

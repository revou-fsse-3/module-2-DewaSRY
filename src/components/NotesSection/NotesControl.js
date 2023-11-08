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
  constructor(note, {} = {}) {
    super();
    this.setContent = `
    <div class="notes-control">
         <button>&#65122;</button>
    </div>
        `;
  }
}

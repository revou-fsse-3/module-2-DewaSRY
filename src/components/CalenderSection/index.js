import { Container, Children } from "/src/components/utils/type.js";
import Calender from "./Calender.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class CalenderSection extends Container {
  constructor(root) {
    super(root);
    this.setContent = `
    <span class="page-title">
      <h1>calender</h1>
    </span>
    `;

    this.set(new Calender());
  }
}

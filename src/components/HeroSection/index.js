import { Container, Children } from "/src/components/utils/type.js";
import Picture from "./Picture.js";
import Quotes from "./Quotes.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class HeroSection extends Container {
  constructor(root) {
    super(root);
    this.setContent = `
        <span class="page-title">
            <h1>Notes Book</h1>
        </span>

        `;
    this.set(new Quotes());
    this.set(new Picture());
  }
}

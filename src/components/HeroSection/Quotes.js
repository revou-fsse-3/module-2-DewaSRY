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
export default class Quotes extends Children {
  constructor() {
    super();
    this.setContent = `
        <div  id="quote-container">
        <h2>From small beginnings come great things.</h2>
        <p> # General-Anonymous</p>
            <button id="next-btn"> Next Quotes </button> 
            <button id="send-btn" >Send to X  </button>  
        </div>
        `;
  }
}

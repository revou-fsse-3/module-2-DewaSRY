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
export default class ToggleNavigation extends Children {
  constructor() {
    super();
    this.root.innerHTML = `
        <input type="checkbox" id="toggle-navigation">
        <label aria-label="lorem ipsum" for="toggle-navigation">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        `;
  }
}

import { Container, Children } from "/src/components/utils/type.js";
import ThemeSwitcher from "./ThemeSwitcher.js";
import NavigationList from "./NavigationList.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class NavigationTable extends Container {
  constructor() {
    super(document.createElement("nav"));
    this.setAtt("id", "navigation-table");
    this.setAtt("class", "navigation-table");
    this.set(NavigationList);
    this.set(ThemeSwitcher);
  }
}

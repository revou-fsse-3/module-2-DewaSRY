import { Container, Children } from "/src/components/utils/type.js";
import NavigationTable from "./NavigationTable.js";
import ToggleNavigation from "./ToggleNavigation.js";
import HeaderLogo from "./HeaderLogo.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class HeaderSection extends Container {
  constructor(root) {
    super(root);
    this.set(ToggleNavigation);
    this.set(HeaderLogo);
    this.set(NavigationTable);

    this.navItem = this.getContent("navigation-table");
    this.toggleNavigation = this.getContent("toggle-navigation");
    let backdrop = null;
    this.toggleNavigation.addEventListener("change", () => {
      if (window.innerWidth > 1200) return;
      if (this.toggleNavigation.checked) {
        backdrop = this.handleNavigation();
      }
      if (!this.toggleNavigation.checked && document.contains(backdrop)) {
        backdrop.remove();
      }
    });
  }
  handleNavigation = () => {
    const div = document.createElement("div");
    const removeDiv = () => div.remove();
    window.addEventListener("resize", () => removeDiv());
    div.classList.add("backdrop");
    div.addEventListener("click", () => {
      this.toggleNavigation.checked = false;
      div.remove();
    });
    document.body.appendChild(div);
    return div;
  };
}

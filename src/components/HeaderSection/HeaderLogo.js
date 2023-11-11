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
export default class HeaderLogo extends Children {
  constructor() {
    super();
    this.setContent = `
        <div class="navigation-logo" id="navigation-logo">
            <h2>Note Book</h2>
        </div>
        `;
    this.navLogo = this.getContent("navigation-logo");
    this.handleScroll();
  }
  handleScroll() {
    let currentScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      if (currentScroll < window.scrollY) {
        this.navLogo.classList.add("scrollUp");
      } else {
        this.navLogo.classList.remove("scrollUp");
      }
      currentScroll = window.scrollY;
    });
  }
}

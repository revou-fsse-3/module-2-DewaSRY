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
export default class ThemeSwitcher extends Children {
  constructor() {
    super();
    this.setContent = `
    <div class="switch-mode">
        <p>Light</p>
        <p>Dark</p>
        <input type="checkbox" id="toggle-mode">
        <label for="toggle-mode"></label>
    </div>
          `;
    this.toggleMode = this.getContent("toggle-mode");
    this.toggleMode.addEventListener("change", this.switchTheme);
    this.initCurrentTheme();
  }

  switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  initCurrentTheme() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        this.toggleMode.checked = true;
      }
    }
  }
}

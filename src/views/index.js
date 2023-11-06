import Headers from "/src/components/Headers.js";
import Hero from "/src/components/Hero.js";
import HeaderSection from "/src/components/HeaderSection/index.js";

import { Container, Children } from "/src/components/utils/type.js";

const headerElement = document.getElementById("headers");
const heroElement = document.getElementById("hero");
const play = document.getElementById("play");
new HeaderSection(headerElement);
new Hero(heroElement);
play.addEventListener;

/**
 * @type {{
 * root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * }}
 */
class Text extends Children {
  constructor() {
    super();
    this.setContent = `
    <p id="hallo">hallo
    </p>
    `;
    this.para = this.getContent("hallo");
    console.log(this.para);
    this.para.addEventListener("click", () => console.log("hallo"));
  }
}

class Play extends Container {
  constructor(root) {
    super(root);
    this.set(Text);
  }
}
new Play(play);

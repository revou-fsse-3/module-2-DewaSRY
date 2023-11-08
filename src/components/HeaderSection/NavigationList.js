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
export default class NavigationList extends Children {
  constructor() {
    super();
    this.setContent = `
    <div class="navigation-list"  >
        <a href="/index.html">
        <img src="/public/navigation-item/Control-Panel.png" alt="Control-Panel" width="24" title="Dashboard">
            <h2>Dashboard</h2>
        </a>
        <a href="/notes.html"class="active"  >
        <img src="/public/navigation-item/Spiral-Bound-Booklet.png" alt="notes" width="24" title="Notes">
            <h2>Notes </h2>
        </a>
        <a href="/todo.html"class="active" >
        <img src="/public/navigation-item/Content.png" alt="todo" width="24" title="List">
            <h2>Todo</h2>
        </a>
        <a href="/about.html"class="active" >
        <img src="/public/navigation-item/Guitar.png" alt="todo" width="24" title="about">
            <h2>about</h2>
        </a>
    </div>
        `;
  }
}

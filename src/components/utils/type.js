/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
class Component {
  constructor(root) {
    this.root = root;
  }
  /**
   *@param {string} ele
   */
  set setContent(ele) {
    this.root.innerHTML = ele;
  }
  /**
   *
   * @param {string} id
   * @returns {HTMLElement}
   */
  getContent(id) {
    return this.root.querySelector("#" + id);
  }
  /**
   *
   * @param {string} selector
   * @returns
   */
  getContents(selector) {
    return this.root.querySelectorAll(selector);
  }
  setAtt(att, name) {
    this.root.setAttribute(att, name);
  }
}

/**
 * @type {{
 *  root: HTMLElement,
 *  getRoot: ()=>Document.fragment,
 * }}
 */
export class Children extends Component {
  constructor() {
    super(document.createElement("div"));
    this.fragment = document.createDocumentFragment();
  }
  /**
   * @returns {Document.fragment}
   */
  getRoot = () => {
    for (let node of this.root.childNodes) {
      if (node instanceof HTMLElement) {
        this.fragment.appendChild(node);
      }
    }
    return this.fragment;
  };
}

/**
 * @type {{
 * root : HTMLElement,
 * set : (Component)=> this
 * getRoot : ()=> this.root
 * }}
 */
export class Container extends Component {
  /**
   *
   * @param {HTMLElement} root
   */
  constructor(root) {
    super(root);
  }
  /**
   *
   * @param {Container| Children} Children
   * @returns {Container}
   */
  set(Children) {
    let childrenRoo = Children.getRoot();
    this.root.appendChild(childrenRoo);
    return this;
  }
  getRoot = () => {
    return this.root;
  };
}

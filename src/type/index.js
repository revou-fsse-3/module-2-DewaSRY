/**
 * @typedef {Object} component 
 * @property {HTMLElement} root;
 */

/** Container works as wrapper components
 * @type {component}
 */
export class Container{
    /**
     * 
     * @param {HTMLElement} root 
     */
    constructor(root) {
        this.root= root
    }
    /**
     * 
     * @param {Children} Children 
     * @returns {Container}
     */
    set(Children) {
        this.root.appendChild(Children.run());
        return this;
    }
    
}
/** Children works as component prototype
 * @type {component}
 */
export class Children{
    constructor() {
        this.root= fragment = document.createDocumentFragment();
    }
    /**
     * @returns {HTMLElement}
     */
    run() {
        return this.root;
    }
}
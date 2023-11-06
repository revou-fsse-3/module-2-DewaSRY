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
export default class Picture extends Children {
  constructor() {
    super();
    this.setContent = `
        <picture>
            <source media="(min-width: 2600px)" srcset="/public/city/city-1.png">
            <source media="(min-width: 2400px)" srcset="/public/city/city-5.png">
            <source media="(min-width: 2200px)" srcset="/public/city/city-4.png">
            <source media="(min-width: 2000px)" srcset="/public/city/city-3.png">
            <source media="(min-width: 1800px)" srcset="/public/city/city-2.png">
            
            <source media="(min-width: 1600px)" srcset="/public/city/city-1.png">
            <source media="(min-width: 1200px)" srcset="/public/city/city-5.png">
            <source media="(min-width: 1000px)" srcset="/public/city/city-4.png">
            <source media="(min-width: 800px)" srcset="/public/city/city-3.png">
            <source media="(min-width: 600px)" srcset="/public/city/city-2.png">
            <img src="/public/city/city-1.png" alt="" width="auto" >
        </picture>
        `;
  }
}

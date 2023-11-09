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

export default class NotesControl extends Children {
  constructor({ onAddNewNotes, onSaveNote } = {}) {
    super();
    this.setContent = `
    <div class="notes-control">
         <button >Add new Notes</button>
         <button >Save Notes</button>
         <button >Image</button>

     

    </div>

        `;

    const [add, save] = this.getContents("button");
    add.addEventListener("click", () => {
      onAddNewNotes();
    });
    save.addEventListener("click", () => {
      onAddNewNotes();
      onSaveNote();
    });
  }
  static imagePhat = [
    "/public/tekno-img/tekno-1.png",
    "/public/tekno-img/tekno-2.png",
    "/public/tekno-img/tekno-3.png",
    "/public/tekno-img/tekno-4.png",
    "/public/tekno-img/tekno-5.png",
    "/public/tekno-img/tekno-6.png",
    "/public/tnature/nature-1.png",
    "/public/tnature/nature-2.png",
    "/public/tnature/nature-3.png",
    "/public/tnature/nature-4.png",
    "/public/tnature/nature-5.png",
    "/public/tnature/nature-6.png",
  ];
}
/*


/**
 *        <div class="image-control">
            <input type="checkbox" id="imge-option" />
            <label for="imge-option"> 📷 </label>
            
            <form action="#" class="image-option">
              <button>Image</button>
            </form>
          </div>




            this.imageControl.addEventListener("change", (e) => {
      this.imageForm.style.bottom = e.clientX;
      this.imageForm.style.top = e.clientY;
    });
    this.imageForm = this.getContents("form.image-option")[0];
    this.imageControl = this.getContent("imge-option");
    NotesControl.imagePhat.forEach((im, id) => {
      this.imageForm.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="image-input">
            <input type="radio" id="image-${id}" name="drone" value="${im}" />
            <label for="image-${id}">
              <img
                src="${im}"
                id="image-tecno-5"
                alt="selected-image"
                width="40"
                height="40"
              />
            </label>
          </div>
          `
      );
    });
 * 
 * 
 */
/**
 * document.createRange()
  document.createRange().surroundContents()
  Node.cloneNode()
  window.getSelection()
  window.getSelection().getRangeAt(0).commonAncestorContainer
  appendChild
  insertBefore
  insertBefore + nextSibling
  replaceChild
 */

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
  constructor({ insertImage } = {}) {
    super();
    this.setContent = `
      <dialog id="image">
          <form  method="dialog" class="image-form" >
          </form>
          <button >Insert Image</button>
      </dialog>
        `;

    this.fromInput = this.getContents("form.image-form")[0];
    this.formBtn = this.getContents("button")[0];
    this.modal = this.getContent("image");
    NotesControl.imagePhat.forEach((img, id) => {
      this.fromInput.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="image-input">
          <input type="radio" id="image-${id}" name="drone" value="${img}" />
          <label for="image-${id}">
            <img
              src="${img}"
              id="image-tecno-5"
              alt="selected-image"
              width="190"
              height="190"
            />
          </label>
        </div>
      `
      );
    });
    document.addEventListener(
      "click",
      ({ target }) => {
        if (target.contains(this.fromInput) && this.modal && this.modal.open) {
          this.modal.close();
        }
      },
      true
    );
    this.fromInput.addEventListener("submit", (e) => {
      // e.preventDefault();
      console.log(e);
    });
    this.formBtn.addEventListener("click", (e) => {
      console.log(e);
      const imageSelected = document.querySelector(
        "input:checked[type='radio']"
      );
      insertImage(imageSelected.value);
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

import { Container, Children } from "/src/components/utils/type.js";
import QuoteApi from "/src/api/QuoteApi.js";
/**
 * @type {{
 *  root : HTMLElement,
 * setContent:(el:string)=>void,
 * getContent : (id:string)=> HTMLElement
 * getContents : (selector:string)=> HTMLElement[]
 * setAtt:(att:string, name:string)=>void
 * }}
 */
export default class Quotes extends Children {
  constructor() {
    super();
    this.setContent = `
        <div  id="quote-container">
        <h2 id="quotes-text">From small beginnings come great things.</h2>
        <p id="quotes-author"> # General-Anonymous</p>
            <button id="next-btn"> Next Quotes </button> 
            <button id="send-btn" >Send to X  </button>  
        </div>
        `;
    /**
     * @type {HTMLButtonElement}
     */
    const [nextQuotesBtn, sendToX] = this.getContents("button");
    this.quotesText = this.getContent("quotes-text");
    this.quotesAuthor = this.getContent("quotes-author");
    nextQuotesBtn.addEventListener("click", () => {
      const { author, tag, text } = QuoteApi.getQuote();
      this.textTypingEffect(text + "😎", this.quotesText);
      this.quotesAuthor.innerHTML = `#${tag} - ${author}`;
    });
    sendToX.addEventListener("click", () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${this.quotesText.innerHTML} - ${this.quotesAuthor.innerHTML}`;
      window.open(twitterUrl, "_blank");
    });
    if (window.innerWidth > 1190) {
      this.textTypingEffect(
        this.quotesText.textContent + "😎",
        this.quotesText
      );
    }
  }
  textTypingEffect(text, element, i = 0) {
    if (i === 0) {
      element.textContent = "";
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
      return;
    }
    setTimeout(() => this.textTypingEffect(text, element, (i = i + 1)), 100);
  }
}

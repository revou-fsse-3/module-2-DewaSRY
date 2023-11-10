class QuotesParser {
  constructor() {
    this.quotes = new Array();
    this.fetcher = new XMLHttpRequest();
    this.lastIndex =
      +localStorage.getItem("quotes-index") === undefined
        ? 0
        : localStorage.getItem("quotes-index") > 8621 || 0;
    this.data = [];
    this.fetcher.addEventListener("load", () => {
      const parserQuotes = JSON.parse(this.fetcher.responseText);
      this.data = Array.from(parserQuotes.slice(this.lastIndex));
    });
    this.fetcher.open("GET", "/public/data/quote.json");
    this.fetcher.send();
  }

  iterateQuotes() {
    let { data, lastIndex } = this;
    let end = 10,
      start = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (start === end) {
          localStorage.setItem("quotes-index", (lastIndex += 10));
          start = 0;
        }
        if (!data.length) {
          return {
            value: null,
            done: true,
          };
        }
        return {
          value: data[start++],
          done: false,
        };
      },
    };
  }
}

export default class QuoteApi {
  static qParser = new QuotesParser();
  static *generateQuotes() {
    for (let n of QuoteApi.qParser.iterateQuotes()) {
      yield n;
    }
  }
  static initGQuotes = QuoteApi.generateQuotes();
  static getQuote() {
    const data = QuoteApi.initGQuotes.next();

    if (!data.value && data.done) return null;
    if (!data.value) return QuoteApi.getQuote();
    else if (data.done) return null;
    return data.value;
  }
}

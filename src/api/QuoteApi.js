export default class QuoteApi {
  constructor() {
    this.quotes = new Array();
    this.lastindex = 0;
  }
  async startFetch() {
    try {
      const res = await fetch("/public/data/quote.json").then((res) =>
        res.json()
      );
      this.quotes.concat(res.slice(this.lastindex, 50));
      this.lastindex = this.quotes.length - 1;
    } catch (e) {
      return [];
    }
  }
}

// import quotes from "/public/data/quote.json"

export default class Hero{
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <span class="page-title">
            <h1>Notes Book</h1>
        </span>
        <div  id="quote-container">
        <h2>From small beginnings come great things.</h2>
        <p> # General-Anonymous</p>
            <button id="next-btn"> Next Quotes </button> 
            <button id="send-btn" >Send to X  </button>  
        </div>
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
        `
        this.noQuote = 0;
        this.nextQuote = this.root.querySelector("#next-btn");
        this.sendQuote = this.root.querySelector("#send-btn");

    }

    sendTox() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote.text} - ${currentQuote.author}`;
        window.open(twitterUrl, "_blank");
    }
}

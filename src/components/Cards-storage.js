

class CardStorage{
    cardsObject = {};
    constructor() {
        this.fetchCards()
    }
    saveCards(imgSrc, title, para, date) {
        const cardsId = title.replace(/\s/g, "") + date;
        console.log(title)
        console.log(cardsId)
        this.cardsObject[cardsId]={
            imgSrc, title, para, date,
        }
        LocalStorage.setLocalStorage(this.cardsObject)
    }
    updateCards(cardId, imgSrc, title, para, date) {
        console.log(this.cardsObject[cardId])
        console.log(cardId)
        delete this.cardsObject[cardId];

        this.saveCards(imgSrc, title, para, date);
    }
    fetchCards() {
        let response = LocalStorage.getLocalStorage();
        if (response) {
            this.cardsObject = response;
         
        } else {
            return null
        }
    }
    getCardsObject() {
         return this.cardsObject;
    }
    deleteCard(id) {
        delete this.cardsObject[id];
        LocalStorage.setLocalStorage(this.cardsObject);
    }
}



class LocalStorage{
    static getLocalStorage() {
        let destinationCards = localStorage.getItem('destination-cards');
        if (destinationCards) {
            return JSON.parse(destinationCards)
        } else {
            return null;
        }
    }
    static setLocalStorage(obj) {
        localStorage.setItem('destination-cards',JSON.stringify(obj) )
    }
}

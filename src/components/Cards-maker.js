class TodoCards{
  static  cardMaker(imgSrc, title, para, date,) {
        const cardDiv = document.createElement('div');
        const titleCards=document.createElement('h2')
        const paraCard = document.createElement("p");
        const imgCards = document.createElement("img");
      const dateCard = document.createElement("h3")
      
        // set cards content
        titleCards.textContent = title;
        paraCard.textContent = para;
        dateCard.textContent = date;
        imgCards.setAttribute('src',imgSrc)
        imgCards.setAttribute('alt',title)
        imgCards.setAttribute('width',300)
        imgCards.setAttribute('height',300)
        // insert cards content
        cardDiv.appendChild(imgCards);
        cardDiv.appendChild(titleCards);
        cardDiv.appendChild(paraCard);
        cardDiv.appendChild(dateCard);
        return cardDiv;
    }
}

// decorators to add control button
class ControlToDo{
   static addControl(todoCards, text ,className, fn ) {
        const buttonControl = document.createElement("button")
        buttonControl.setAttribute("class", className);
        buttonControl.addEventListener("click", fn)
        buttonControl.textContent = text;
        todoCards.appendChild(buttonControl);
    }
}
// decorators to add id attributes
class CardAttributes{
    static add(cards, attrObj) {
       const keyObj= Object.keys(attrObj)[0]
        cards.setAttribute(keyObj, attrObj[keyObj]);
    }
}


    
  
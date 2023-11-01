
const cardsContainer= document.getElementById('cards-containers')



const SaveCards = new CardStorage();
let cardsID

const ModalEl = new ModalElement()
const FormModalEle = new FormEl();

// console.log(SaveCards.fetchCards())
// console.log(Object.values(SaveCards.fetchCards()))



class MySchedule{

    static run() {
        const cardsObj = SaveCards.getCardsObject();
        console.log(Object.values(cardsObj).length)
        if (Object.values(cardsObj).length) {
            this.renderCard(cardsObj)
        } else {
            this.renderUsageCards()
        }
 

    }
    static renderCard(cardsObj) {
        const cardsId = Object.keys(cardsObj);
        cardsId.forEach((id) => {
            const {date,imgSrc,para ,title,cardId} = cardsObj[id];
            const cardsEle = TodoCards.cardMaker(imgSrc, title, para, date);
            CardAttributes.add(cardsEle, {
                key:id.trim()
            })
            ControlToDo.addControl(cardsEle, "Delete", "", () => {
                SaveCards.deleteCard(id)
                AlertService.run('Card get Delete, page will get Refresh', "/public/usages/go-when-you-ready.png")
                setTimeout(() => {
                    location.reload();
                },2000)
            });
            ControlToDo.addControl(cardsEle, "Edit", "", () => {
                // SaveCards.deleteCard(id);
                FormModalEle.setImg(imgSrc);
                FormModalEle.setPara(para);
                FormModalEle.setTitle(title);
                FormModalEle.setDate(date);
                // set teh id for delete
                
                cardsID=cardsEle.getAttribute("key")
                console.log(cardId)
                ModalEl.openModal();
            });
            cardsContainer.appendChild(cardsEle)
        })
    }
    static renderUsageCards() {
        cardsContainer.innerHTML = `
            <div>
                <img src="/public/usages/set-teh-destination.png" alt="" width="250" height="250">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit non alias consequatur ipsam magni quidem consequuntur praesentium iure nesciunt, numquam rem et incidunt. Sapiente delectus repudiandae id aliquid error?</p>
            </div>
        `

    }
}

MySchedule.run()


//update cards content
FormModalEle.getTodoForm.addEventListener('submit', () => {

    const { para, title, date, imgSrc } = FormModalEle.submit()

    SaveCards.updateCards(cardsID, imgSrc, title, para, date);
    ModalEl.closeModal();
    AlertService.run('Card get edit, page will get Refresh', "/public/usages/go-when-you-ready.png")
    setTimeout(() => {
        location.reload();
    },2000)

})


document.body.addEventListener("click", (e) => {
    if (!e.target.contains(FormModalEle.getTodoForm)) {
        // console.log("inside")
    } else {
        // console.log("outside")
        ModalEl.closeModal();
    }
},true)
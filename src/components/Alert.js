


const alertEl = document.getElementById("alert");


class AlertService{

    static run(message, imgSrc) {
        if (imgSrc) return AlertCards.run(message, imgSrc)
        return AlertMessage.run(message)
    }
}

class AlertMessage{
    static run(message) {
        const para = alertEl.querySelector('p');
        para.innerText = message;
        setTimeout(() => {
            para.innerText = "";
        },2000)
    }
}
class AlertCards{
    static run(message, imgSrc) {
        const img = document.createElement('img')
        img.setAttribute('src', imgSrc);
        img.setAttribute('width', 75);
        img.setAttribute('hight', 74);
        const para = alertEl.querySelector('p');
        para.innerText = message;
        alertEl.appendChild(img)
        alertEl.classList.add("alert-active")
        setTimeout(() => {
            alertEl.removeChild(img);
            para.innerText = "";
            alertEl.classList.remove("alert-active")
        },2000)
    }
}
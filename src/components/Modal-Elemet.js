
class ModalElement{

    constructor() {
        this.isModalOpen = false;
        this.dialogEl = document.getElementById("modal");
  }
    openModal() {
        this.isModalOpen = true;
        this.dialogEl.showModal()
    }
    closeModal() {
        this.dialogEl.close()
        this.isModalOpen = false;
    }
}

class FormEl{
    constructor() {
        this.isSubmit = true;
        this.getTodoForm = document.getElementById("form-card")
        this.para = document.getElementById('description-form');
        this.title = document.getElementById('title-form');
        this.date = document.getElementById('date-form')
        this.imgSrc =document.getElementById("img-preview")
        this.getTodoForm.addEventListener("submit", (e) => 
            e.preventDefault()
        )
    }
    submit() {
        let para = this.para.value;
        let title = this.title.value;
        let date = this.date.value;
        let imgSrc = this.imgSrc.getAttribute("src");
        this.resetForm()
        return {
          para,title,date,imgSrc
        }
    }
    setNotSubmit() {
        if (this.isSubmit) {
            this.isSubmit=false
        }
    }
    setPara(para) {
        this.setNotSubmit()
        this.para.value = para;
    }
    setTitle(title) {
        this.setNotSubmit()
        this.title.value = title;
    }
    setDate(date) {
        this.setNotSubmit()
        this.date.value = date;
    }
    setImg(imgSrc) {
        this.setNotSubmit()
        this.imgSrc.setAttribute('src', imgSrc);
    }
    resetForm() {
        this.isSubmit = true;
        this.setPara('');
        this.setDate('');
        this.setImg('');
        this.setTitle("");
    }

}
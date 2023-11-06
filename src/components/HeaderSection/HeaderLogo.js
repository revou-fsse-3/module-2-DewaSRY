import { Container ,Children } from " /src/type/index"



export default class HeaderLogo extends Children{
    constructor() {
        super();
        this.root.innerHTML = `
        <div class="navigation-logo ">
            <h2>Note Book</h2>
        </div>
        `
        this.navLogo= this.root.querySelector(".navigation-logo")
        this.handleScroll();
    }
    handleScroll() {
        let currentScroll = window.scrollY;
        window.addEventListener("scroll", () => {
            if (currentScroll < window.scrollY) {
                this.navLogo.classList.add("scrollUp")
            } else {
                this.navLogo.classList.remove("scrollUp")
                
            }
            currentScroll = window.scrollY;

        })
    }
}
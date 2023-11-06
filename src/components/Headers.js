

export default class Headers{
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <input type="checkbox" id="toggle-navigation">
        <label aria-label="lorem ipsum" for="toggle-navigation">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        <div class="navigation-logo ">
            <h2>Note Book</h2>

        </div>
        <nav class="navigation-table" id="navigation-table">
            <div class="navigation-list"  >
                <a href="/index.html">
                <img src="/public/navigation-item/Control-Panel.png" alt="Control-Panel" width="24" title="Dashboard">
                    <h2>Dashboard</h2>
                </a>
                <a href="/notes.html"class="active"  >
                <img src="/public/navigation-item/Spiral-Bound-Booklet.png" alt="notes" width="24" title="Notes">
                    <h2>Notes </h2>
                </a>
                <a href="/notes.html"class="active"  >
                <img src="/public/navigation-item/Guitar.png" alt="Guitar" width="24"title="Game">
                    <h2>Game </h2>
                </a>
                <a href="/notes.html"class="active" >
                <img src="/public/navigation-item/Content.png" alt="todo" width="24" title="List">
                    <h2>List</h2>
                </a>
            </div>

            <div class="switch-mode">
                <p>Light</p>
                <p>Dark</p>
                <input type="checkbox" id="toggle-mode">
                <label for="toggle-mode"></label>
            </div>
        </nav>
        `
        this.navItem= this.root.querySelector("#navigation-table")
        this.toggleNavigation = this.root.querySelector("#toggle-navigation")
        this.navLogo= this.root.querySelector(".navigation-logo")

        this.toggleMode = this.root.querySelector("#toggle-mode")
        this.toggleMode.addEventListener('change', this.switchTheme);
        this.initCurrentTheme()
        
        let backdrop= null
        this.toggleNavigation.addEventListener('change', () => {
            if (window.innerWidth > 1200) return;
            if (this.toggleNavigation.checked) {
                backdrop= this.handleNavigation();
            }
            if (!this.toggleNavigation.checked&&document.contains(backdrop) ) {
                backdrop.remove()
            }
            
        })

        this.handleScroll();

   
    }


    switchTheme(event) {
        if (event.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
    }
    initCurrentTheme() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
              this.toggleMode.checked = true;
            }
          }
    }

    handleNavigation=()=> {
        const div = document.createElement("div");
        const removeDiv=()=>div.remove();
        window.addEventListener ('resize', ()=>removeDiv());
        div.classList.add("backdrop")
        div.addEventListener("click", () => {
            this.toggleNavigation.checked = false;
            div.remove();
        })
        document.body.appendChild(div);
        return div;

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
    initiateClock() {
        var hour = this.root.querySelector("#hour");
        var minute = this.root.querySelector("#minute");
        var seconds = this.root.querySelector("#seconds");
        var clock = setInterval(
            function time(){
              var date_now = new Date();
              var hr = date_now.getHours();
              var min = date_now.getMinutes();
              var sec = date_now.getSeconds();
              
              if(hr < 10){
                  hr = "0" + hr;
              } 
              if(min < 10){
                  min = "0" + min;
              } 
              if(sec < 10){
                  sec = "0" + sec;
              }
        
              hour.textContent = hr;
              minute.textContent = min;
              seconds.textContent = sec;
            },1000
        ); 
    }
}



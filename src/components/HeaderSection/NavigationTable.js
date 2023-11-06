import { Container ,Children } from " /src/type/index"



export default class NavigationTable extends Container{
    constructor() {
        super(document.createElement("nav"));
        this.root.setAttribute("id", "navigation-table");
        this.classList.add('navigation-table')
    }
}
class NavigationList extends Container{
    constructor() {
        super(document.createElement("div"));
        this.classList.add('navigation-list')
        this.root.innerHTML = `
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

        `
        this.navItem = this.root.querySelector("#navigation-table");
        this.toggleNavigation = this.root.querySelector("#toggle-navigation")
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
}
class ThemeSwitcher extends Container{
    constructor() {
        super(document.createElement("div"));
        this.classList.add('switch-mode')
        this.root.innerHTML = `
            <p>Light</p>
            <p>Dark</p>
            <input type="checkbox" id="toggle-mode">
            <label for="toggle-mode"></label>
        </div>
        `
        this.toggleMode = this.root.querySelector("#toggle-mode")
        this.toggleMode.addEventListener('change', this.switchTheme);
        this.initCurrentTheme()

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
}

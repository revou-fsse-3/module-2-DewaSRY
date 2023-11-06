import { Container ,Children } from " /src/type/index"

export default class ToggleNavigation extends Children{
    constructor() {
        super();
        this.root.innerHTML = `
        <input type="checkbox" id="toggle-navigation">
        <label aria-label="lorem ipsum" for="toggle-navigation">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        `
    }
}
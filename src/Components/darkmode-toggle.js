class DarkModeToggle extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        this.render();
    }

    set toggleDarkMode(event) {
        this._toggleDarkMode = event;
        this.render();
    }

    render() {
        this.innerHTML = `
            <label class="inline-block relative w-16 h-9 mr-6 xl:mr-0 2xl:mr-10 3xl:mr-20" title="Toggle Dark Mode">
                <input type="checkbox" class="opacity-0 w-0 h-0 peer" id="toggle-dark-mode" checked>
                <span class="absolute cursor-pointer inset-0 bg-[#d4d5e4] peer-focus:shadow-sm peer-checked:bg-[#505156] transition-all duration-300 before:absolute before:h-7 before:w-7 before:left-1 before:bottom-1 before:bg-gradient-to-r before:from-yellow-400 before:to-red-400 before:transition-all before:duration-500 peer-checked:before:translate-x-7 rounded-full before:rounded-full toogle-moon z-10"></span>
            </label>
        `
        this.querySelector('#toggle-dark-mode').addEventListener('click', this._toggleDarkMode);
    }
}

customElements.define("darkmode-toggle", DarkModeToggle);
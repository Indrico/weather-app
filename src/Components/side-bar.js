class Sidebar extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        this.render();
    }

    set closeSideBar(event) {
        this._closeSideBar = event;
        this.render();
    }

    set searchLocation(event) {
        this._searchLocation = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <div>
            <div class="bg-black opacity-50 absolute top-0 left-0 h-screen w-screen z-20 transition-all duration-500 hidden" id="transparent-bg">
            </div>
            <div class="absolute top-0 left-0 h-screen w-screen xl:w-[34vw] transform -translate-x-full z-30 bg-white dark:bg-[#1E213A] p-8 transition-all duration-500" id="sidebar">
                <div class="dark:text-white flex justify-end cursor-pointer" id="close-sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex justify-between mt-8 items-center">
                    <input type="text" class="px-4 py-2 bg-transparent border-gray-200 dark:text-white border-2 outline-none" placeholder="&#xF002; Search Location" style="font-family:Muli, FontAwesome">
                    <button class="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer" id="search-location">Search</button>
                </div>
            </div>
        </div>
        `
        this.querySelector('#close-sidebar').addEventListener('click', this._closeSideBar);
        this.querySelector('#search-location').addEventListener('click', this._searchLocation);
    }
}

customElements.define("side-bar", Sidebar);
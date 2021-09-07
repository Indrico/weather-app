class Units extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set metric(event) {
    this._metric = event;
    this.render();
  }

  set imperial(event) {
    this._imperial = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="temperature active xl:text-lg 2xl:text-xl 3xl:text-2xl w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 rounded-full justify-center items-center flex mr-10" id="metric">
            °C
        </div>
        <div class="temperature xl:text-lg 2xl:text-xl 3xl:text-2xl w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 rounded-full justify-center items-center flex" id="imperial">
            °F
        </div>
        `;
    this.querySelector('#metric').addEventListener('click', this._metric);
    this.querySelector('#imperial').addEventListener('click', this._imperial);
  }
}

customElements.define('units-element', Units);

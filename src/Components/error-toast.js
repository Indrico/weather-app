class ErrorToast extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="fixed bottom-12 right-12 rounded-2xl font-semibold transform transition-all duration-500 opacity-0 translate-x-full bg-red-500 text-white z-50 w-auto p-4 font-2xl" id="error-element">
        Kota tidak ditemukan
      </div>
      `;
  }
}

customElements.define('error-toast', ErrorToast);

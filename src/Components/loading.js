/* eslint-disable no-underscore-dangle */
class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="fixed top-0 left-0 bg-blue-600 text-white z-50 w-full h-full flex justify-center items-center flex-col" id="loading-element">
        <div class="animate-spin h-[80px] w-[80px] inline-block after:block after:h-[64px] after:w-[64px] after:m-[8px] after:rounded-full after:border-[6px] loading-ring" viewBox="0 0 24 24">
        </div>
        <p class="mt-6 text-2xl font-semibold">Memuat</p>
        <p class="text-center mt-3 w-[80%] text-lg font-medium">Untuk mendapatkan cuaca di lokasi anda, pastikan izinkan browser untuk mengakses lokasi anda.</p>
      </div>
      `;
  }
}

customElements.define('loading-element', Loading);

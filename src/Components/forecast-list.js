import './forecast-item.js'

class ForecastList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    set forecasts(forecasts) {
        this._forecasts = forecasts;
        this.render();
    }

    renderError(message) {
        console.log(message);
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement('club-item')
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);
        });
    }
}

customElements.define("forecast-list", ForecastList);
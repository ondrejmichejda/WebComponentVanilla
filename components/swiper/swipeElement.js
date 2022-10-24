import Swiper from "../../library/Swiper/swiper-bundle.esm.browser.min.js";
import {html} from "./view";
import {myStyle, swiperStyle} from "./style";


class SwipeElement extends HTMLElement {

    constructor() {
        super();
    }

    get pictures() {
        return this.getAttribute('pictures').split(';') ?? null;
    }

    get wrapper() {
        return this.getAttribute('wrapper');
    }

    get cycle() {
        return this.getAttribute('cycle')
    }

    get direction() {
        return this.getAttribute('direction');
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML += swiperStyle;
        this.innerHTML += myStyle;
        this.innerHTML += html(this.wrapper, this.pictures);

        const swiper = new Swiper(".myswiper", {
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            direction: this.direction ?? 'horizontal',
            autoplay: {
                delay: +this.cycle ?? 2500,
                disableOnInteraction: true,
            }
        });
    }
}

customElements.define('swipe-element', SwipeElement);
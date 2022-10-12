import {view} from "./view";
import {mainStyle, noUiSliderStyle} from "./styles";
import wNumb from "./lib/wNumb.min.js";
import noUiSlider from "./lib/nouislider.min.js";


class TransfactoringCalculator extends HTMLElement {

    FormatCZK = wNumb({
        suffix: '&nbsp;CZK ',
        decimals: 0,
        thousand: '&nbsp;'
    });

    FormatEUR = wNumb({
        prefix: '€ ',
        decimals: 0,
        thousand: ','
    });

    optionCZK = {
        currency: 'CZK',
        start: [1000],
        step: 1000,
        format: {
            thousand: '&nbsp;',
            prefix: '',
            suffix: '&nbsp;CZK',
        },
        max: 60000,
    }

    optionEUR = {
        currency: 'EUR',
        start: [100],
        step: 100,
        format: {
            thousand: ',',
            prefix: '€',
            suffix: '',
        },
        max: 2400
    }

    option;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.option = this.optionCZK;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = view;

        this.shadow.innerHTML += noUiSliderStyle;
        this.shadow.innerHTML += mainStyle;

        this.initSlider1();
        this.initSlider2();

        /*document.addEventListener("DOMContentLoaded", () => {
            this.initSlider1();
            this.initSlider2();
        });*/
    }

    initSlider1() {
        const rangeSlider = this.shadow.querySelectorAll("#slider1")[0]; //document.getElementById('slider1');
        console.log(rangeSlider);
        noUiSlider.create(rangeSlider, {
            start: this.option.start,
            step: this.option.step,
            connect: [true, false],
            pips: {
                mode: 'range',
                density: 100000,
                format: wNumb({
                    decimals: 0,
                    thousand: this.option.format.thousand,
                    prefix: this.option.format.prefix,
                    suffix: this.option.format.suffix
                })
            },
            range: {
                'min': [0],
                'max': [this.option.max]
            }
        });

        const rangeSliderValueElement = this.shadow.querySelectorAll('#slider1-value')[0];

        rangeSlider.noUiSlider.on('update', (values, handle) => {
            // let number = parseInt(values[handle]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
            let number = this.FormatCZK.from(values[handle]);
            const currency = this.option.currency;
            if (currency === "CZK"){
                number = this.FormatCZK.to(number);
            }else {
                number = this.FormatEUR.to(number);
            }
            rangeSliderValueElement.innerHTML = number;
            // this.calculatePrice();
        });
    }

    initSlider2() {
        const rangeSlider2 = this.shadow.querySelectorAll('#slider2')[0];

        noUiSlider.create(rangeSlider2, {
            start: [30],
            step: 1,
            connect: [true, false],
            pips: {
                mode: 'range',
                density: 1000,
                format: wNumb({
                    decimals: 0,
                    thousand: ' ',
                    suffix: ' dnů'
                })
            },
            range: {
                'min': [0],
                'max': [90]
            }
        });

        const rangeSliderValueElement2 = this.shadow.querySelectorAll('#slider2-value')[0];

        rangeSlider2.noUiSlider.on('update', (values, handle) => {
            const number = parseInt(values[handle]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            rangeSliderValueElement2.innerHTML = number + " dnů";
            // calculatePrice();
        });
    }

    calculatePrice() {
        throw new Error('not implemented');
        /*value1 = parseInt($('#slider1-value').text().replace(/\s+/g, '').replace(',', '').replace('€', ''));
        value2 = parseInt($('#slider2-value').text().replace(/\s+/g, '').replace(',', ''));

        row1 = value1 * 0.8;
        row3 = value1 / 100 * 0.0666 * value2;
        row2 = value1 * 0.2 - row3;

        currency = $('.TransfactoringCalculator .currencies .currency.active').text();
        if (currency == "CZK") {
            row1 = FormatCZK.to(row1);
            row2 = FormatCZK.to(row2);
            row3 = FormatCZK.to(row3);
        } else {
            row1 = FormatEUR.to(row1);
            row2 = FormatEUR.to(row2);
            row3 = FormatEUR.to(row3);
        }

        $('.TransfactoringCalculator .row1 .right').html(row1);
        $('.TransfactoringCalculator .row2 .right').html(row2);
        $('.TransfactoringCalculator .row3 .right').html(row3);*/
    }
}

customElements.define('transfactoring-calculator', TransfactoringCalculator);
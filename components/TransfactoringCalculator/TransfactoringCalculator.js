import {view} from "./view";
import {mainStyle, noUiSliderStyle} from "./styles";
import wNumb from "../../library/wNumb/wNumb.min.js";
import noUiSlider from "../../library/noUiSlider/nouislider.min.js";


class TransfactoringCalculator extends HTMLElement {

    FormatCZK = wNumb({
        suffix: '&nbsp;CZK ',
        decimals: 0,
        thousand: '&nbsp;'
    });

    FormatEUR = wNumb({
        prefix: '€&nbsp;',
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
            prefix: '€&nbsp;',
            suffix: '',
        },
        max: 2400
    }

    option;
    translationsRaw = '';
    translations = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.option = this.optionCZK;
    }

    connectedCallback() {
        this.periodicTranslationCheck();
    }

    periodicTranslationCheck() {
        setTimeout(() => {
            let data;
            try {
                data = this.innerHTML;
            } catch (e) { }

            if(this.translationsRaw !== data){
                this.translationsRaw = data;
                this.translations = this.translationsRaw.split(';');
                this.render();
            }
            setTimeout(() => this.periodicTranslationCheck(), 1000);
        });
    }

    get url() {
        return this.getAttribute('url') ?? '#';
    }

    render() {
        this.shadow.innerHTML = view(this.translations, this.url);

        this.shadow.innerHTML += noUiSliderStyle;
        this.shadow.innerHTML += mainStyle;

        this.currencyChangeSubscription();

        this.initValueSlider();
        this.initDuedateSlider();
        this.calculatePrice();
    }

    initValueSlider() {
        const rangeSlider = this.shadow.querySelectorAll("#slider1")[0]; //document.getElementById('slider1');
        if (rangeSlider && rangeSlider.noUiSlider) {
            rangeSlider.noUiSlider.destroy();
        }

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
            if (currency === "CZK") {
                number = this.FormatCZK.to(number);
            } else {
                number = this.FormatEUR.to(number);
            }
            rangeSliderValueElement.innerHTML = number;
            this.calculatePrice();
        });
    }

    initDuedateSlider() {
        const rangeSlider = this.shadow.querySelectorAll('#slider2')[0];
        if (rangeSlider && rangeSlider.noUiSlider) {
            rangeSlider.noUiSlider.destroy();
        }

        noUiSlider.create(rangeSlider, {
            start: [30],
            step: 1,
            connect: [true, false],
            pips: {
                mode: 'range',
                density: 1000,
                format: wNumb({
                    decimals: 0,
                    thousand: ' ',
                    suffix: this.translations[9] ?? ' undefined'
                })
            },
            range: {
                'min': [0],
                'max': [90]
            }
        });

        const rangeSliderValueElement2 = this.shadow.querySelectorAll('#slider2-value')[0];

        rangeSlider.noUiSlider.on('update', (values, handle) => {
            const number = parseInt(values[handle]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            rangeSliderValueElement2.innerHTML = number + " dnů";
            this.calculatePrice();
        });
    }

    calculatePrice() {
        const value1 = parseInt(this.shadow.querySelectorAll('#slider1-value')[0].textContent.replace(/\s+/g, '').replace(',', '').replace('€', ''));
        const value2 = parseInt(this.shadow.querySelectorAll('#slider2-value')[0].textContent.replace(/\s+/g, '').replace(',', ''));

        let row1 = value1 * 0.8;
        let row3 = value1 / 100 * 0.0666 * value2;
        let row2 = value1 * 0.2 - row3;

        if (this.option.currency === "CZK") {
            row1 = this.FormatCZK.to(row1);
            row2 = this.FormatCZK.to(row2);
            row3 = this.FormatCZK.to(row3);
        } else {
            row1 = this.FormatEUR.to(row1);
            row2 = this.FormatEUR.to(row2);
            row3 = this.FormatEUR.to(row3);
        }

        this.shadow.querySelectorAll('#row1-value')[0].innerHTML = row1;
        this.shadow.querySelectorAll('#row2-value')[0].innerHTML = row2;
        this.shadow.querySelectorAll('#row3-value')[0].innerHTML = row3;
    }

    currencyChangeSubscription() {
        const btnCZK = this.shadow.querySelectorAll('#cur-czk')[0];
        const btnEUR = this.shadow.querySelectorAll('#cur-eur')[0];
        const curSpan = this.shadow.querySelectorAll('#cur-span')[0];

        btnCZK.addEventListener('click', () => {
            if (this.option === this.optionCZK) return;

            btnEUR.classList.remove('active');
            btnCZK.classList.add('active');
            this.option = this.optionCZK;
            curSpan.textContent = this.option.currency;
            this.initValueSlider();
        });

        btnEUR.addEventListener('click', () => {
            if (this.option === this.optionEUR) return;

            btnCZK.classList.remove('active');
            btnEUR.classList.add('active');
            this.option = this.optionEUR;
            curSpan.textContent = this.option.currency;
            this.initValueSlider();
        });

    }
}

customElements.define('transfactoring-calculator', TransfactoringCalculator);
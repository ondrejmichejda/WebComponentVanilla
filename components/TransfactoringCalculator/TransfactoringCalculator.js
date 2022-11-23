import {view} from "./view";
import {mainStyle, noUiSliderStyle} from "./styles";
import wNumb from "../../library/wNumb/wNumb.min.js";
import noUiSlider from "../../library/noUiSlider/nouislider.min.js";


class TransfactoringCalculator extends HTMLElement {

    FormatCurrency = null;
    optionCurrency = null;
    FormatEUR = wNumb({
        prefix: '€&nbsp;',
        decimals: 0,
        thousand: ','
    });
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
    dayTranslate = 'dnů';

    calculationConstant1 = 0.8;
    calculationConstant2 = 0.2;
    calculationConstant3 = 0.0666;

    currency = ' CZK';
    sliderStart = 1000;
    sliderStep = 1000;
    sliderMax = 60000;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.periodicTranslationCheck();
    }

    /**
     Translation:
     [0]Orientační kalkulačka;
     [1]Hodnota faktury s DPH ;
     [2]Splatnost faktury;
     [3]Minimální záloha ;
     [4]80% ihned ;
     [5]na váš účet;
     [6]Doplatek po úhradě na váš účet;
     [7]Cena;
     [8]CHCI LEPŠÍ NABÍDKU;
     ------------------------
     [9] dnů;
     ------------------------
     constants for calculation
     [10]0.8
     [11]0.2
     [12]0.0666
     ------------------------
     currency constants
     [13]CZK - currency
     [14]1000 - slider start
     [15]1000 - slider step
     [16]60000 - slider max
     example:
     Orientační kalkulačka;Hodnota faktury s DPH ;Splatnost faktury;Minimální záloha ;80% ihned ;na váš účet;Doplatek po
     úhradě na váš účet;Cena;CHCI LEPŠÍ NABÍDKU; dnů;0.8;0.2;0.0666; CZK;1000;1000;60000
     */
    periodicTranslationCheck() {
        setTimeout(() => {
            let data;
            try {
                data = this.innerHTML;
            } catch (e) {
            }

            if (this.translationsRaw !== data) {
                this.translationsRaw = data;
                this.translations = this.translationsRaw.split(';');

                try {
                    this.dayTranslate = this.translations[9] ?? 'dnů';
                    this.calculationConstant1 = +this.translations[10] ?? 0.8;
                    this.calculationConstant2 = +this.translations[11] ?? 0.2;
                    this.calculationConstant3 = +this.translations[12] ?? 0.0666;

                    this.currency = this.translations[13] ?? 'CZK';
                    this.sliderStart = +this.translations[14] ?? 1000;
                    this.sliderStep = +this.translations[15] ?? 1000;
                    this.sliderMax = +this.translations[16] ?? 60000;
                } catch (e) {
                    console.error(e);
                }

                this.FormatCurrency = wNumb({
                    suffix: this.currency,
                    decimals: 0,
                    thousand: '&nbsp;'
                });
                this.optionCurrency = {
                    currency: this.currency,
                    start: [this.sliderStart],
                    step: this.sliderStep,
                    format: {
                        thousand: '&nbsp;',
                        prefix: '',
                        suffix: this.currency,
                    },
                    max: this.sliderMax,
                }
                this.option = this.optionCurrency;
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
            let number = this.FormatCurrency.from(values[handle]);
            const currency = this.option.currency;
            if (currency === "EUR") {
                number = this.FormatEUR.to(number);
            } else {
                number = this.FormatCurrency.to(number);
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
                    suffix: this.dayTranslate ?? ' undefined'
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

        let row1 = value1 * this.calculationConstant1;
        let row3 = value1 / 100 * this.calculationConstant3 * value2;
        let row2 = value1 * this.calculationConstant2 - row3;

        if (this.option.currency === "EUR") {
            row1 = this.FormatEUR.to(row1);
            row2 = this.FormatEUR.to(row2);
            row3 = this.FormatEUR.to(row3);
        } else {
            row1 = this.FormatCurrency.to(row1);
            row2 = this.FormatCurrency.to(row2);
            row3 = this.FormatCurrency.to(row3);
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
            if (this.option === this.optionCurrency) return;

            btnEUR.classList.remove('active');
            btnCZK.classList.add('active');
            this.option = this.optionCurrency;
            curSpan.textContent = this.option.currency.trim();
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
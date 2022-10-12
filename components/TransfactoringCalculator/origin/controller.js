/*
$('.lp-TransfactoringCalculator .TransfactoringCalculator .header .currencies .currency').click(function() {
    if (!$(this).hasClass('active')) {
        $('.lp-TransfactoringCalculator .TransfactoringCalculator .header .currencies .currency.active').removeClass('active');
        $(this).addClass('active');
        currency = $(this).text();

        if (currency == "CZK") {
            rangeSlider.noUiSlider.updateOptions({
                start: [1000],
                step: <?php echo $TransfactoringCalculator['invoice_2']; ?>,
            range: {
                'min': [0],
                    'max': [<?php echo $TransfactoringCalculator['invoice_1']; ?>]
            },
            pips: {
                mode: 'range',
                    density: 100000,
                    format: wNumb({
                    decimals: 0,
                    thousand: '&nbsp;',
                    suffix: '&nbsp;CZK'
                })
            },

        });
        } else {
            rangeSlider.noUiSlider.updateOptions({
                start: [100],
                step: <?php echo $TransfactoringCalculator['invoice_4']; ?>,
            range: {
                'min': [0],
                    'max': [<?php echo $TransfactoringCalculator['invoice_3']; ?>]
            },
            pips: {
                mode: 'range',
                    density: 100000,
                    format: wNumb({
                    decimals: 0,
                    thousand: ',',
                    prefix: '€'
                })
            },
        });

        }
        calculatePrice();
    }
});

function calculatePrice() {
    value1 = parseInt($('#slider1-value').text().replace(/\s+/g, '').replace(',', '').replace('€', ''));
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
    $('.TransfactoringCalculator .row3 .right').html(row3);
}

$(document).ready(function() {
    calculatePrice();
});*/

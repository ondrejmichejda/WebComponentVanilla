<?php $calculator = get_field('calculator', 'option'); ?>
<div class="lp-calculator">
    <div class="container">
        <div class="calculator">
            <div class="outer-body">
                <div class="body">
                    <div class="header"><?php echo  $calculator["calculator_title"]; ?> <div class="currencies">
                            <div class="currency active"><?php echo $calculator["currency_1"]; ?></div>
                            <div class="currency"><?php echo $calculator["currency_2"]; ?></div>
                        </div>
                    </div>

                    <div class="title"><?php echo $calculator["slider1"]; ?> (<span class="currency"><?php echo $calculator["currency_1"]; ?></span>)</div>
                    <div class="slider-value" id="slider1-value"></div>
                    <div id="slider1" class="slider"></div>
                    <div class="slider-bottom"></div>

                    <div class="title"><?php echo $calculator["slider2"]; ?></div>
                    <div class="slider-value" id="slider2-value"></div>
                    <div id="slider2" class="slider"></div>
                    <div class="slider-bottom"></div>

                    <table>
                        <tr class="row1">
                            <td class="left">
                                <div class="row-text"><span class="text"><?php echo str_replace('%s', '<span>' . $calculator["row_1_text"] . '</span>', $calculator["row_1"]); ?></span><span class="line"></span></div>
                            </td>
                            <td class="right">-</td>
                        </tr>
                        <tr class="row2">
                            <td class="left">
                                <div class="row-text"><span class="text"><?php echo $calculator["row_2"]; ?></span><span class="line"></span></div>
                            </td>
                            <td class="right">-</td>
                        </tr>
                        <tr class="row3">
                            <td class="left">
                                <div class="row-text"><span class="text"><?php echo $calculator["row_3"]; ?></span><span class="line"></span></div>
                            </td>
                            <td class="right">-</td>
                        </tr>
                    </table>

                    <div class="text-center"><a class="button" href="<?php echo get_home_url() ?>/kontakt"><?php echo $calculator["button"]; ?></a></div>

                </div>
            </div>
            <div class="bottom"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/calculator-bottom.png" title="" alt=""></div>

            <script type="text/javascript">
                var FormatCZK = wNumb({
                    suffix: '&nbsp;CZK ',
                    decimals: 0,
                    thousand: '&nbsp;'
                });

                var FormatEUR = wNumb({
                    prefix: '€ ',
                    decimals: 0,
                    thousand: ','
                });

                var rangeSlider = document.getElementById('slider1');

                noUiSlider.create(rangeSlider, {
                    start: [<?php if ($calculator["currency_1"] == "CZK") echo "1000";
                            else echo "100"; ?>],
                    step: <?php echo $calculator['invoice_2']; ?>,
                    connect: [true, false],
                    pips: {
                        mode: 'range',
                        density: 100000,
                        format: wNumb({
                            decimals: 0,
                            <?php if ($calculator["currency_1"] == "CZK") echo "thousand: '&nbsp;', suffix: '&nbsp;CZK'";
                            else echo "thousand: ',', prefix: '€'"; ?>
                        })
                    },
                    range: {
                        'min': [0],
                        'max': [<?php echo $calculator['invoice_1']; ?>]
                    }
                });

                var rangeSliderValueElement = document.getElementById('slider1-value');

                rangeSlider.noUiSlider.on('update', function(values, handle) {
                    number = parseInt(values[handle]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
                    number = FormatCZK.from(values[handle]);
                    currency = $('.calculator .currencies .currency.active').text();
                    if (currency == "CZK") number = FormatCZK.to(number);
                    else number = FormatEUR.to(number);
                    rangeSliderValueElement.innerHTML = number;
                    calculatePrice();
                });

                var rangeSlider2 = document.getElementById('slider2');

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
                            suffix: ' <?php echo $calculator['days']; ?>'
                        })
                    },
                    range: {
                        'min': [0],
                        'max': [90]
                    }
                });

                var rangeSliderValueElement2 = document.getElementById('slider2-value');

                rangeSlider2.noUiSlider.on('update', function(values, handle) {
                    number = parseInt(values[handle]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    rangeSliderValueElement2.innerHTML = number + " <?php echo $calculator['days']; ?>";
                    calculatePrice();
                });

                $('.lp-calculator .calculator .header .currencies .currency').click(function() {
                    if (!$(this).hasClass('active')) {
                        $('.lp-calculator .calculator .header .currencies .currency.active').removeClass('active');
                        $(this).addClass('active');
                        currency = $(this).text();

                        if (currency == "CZK") {
                            rangeSlider.noUiSlider.updateOptions({
                                start: [1000],
                                step: <?php echo $calculator['invoice_2']; ?>,
                                range: {
                                    'min': [0],
                                    'max': [<?php echo $calculator['invoice_1']; ?>]
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
                                step: <?php echo $calculator['invoice_4']; ?>,
                                range: {
                                    'min': [0],
                                    'max': [<?php echo $calculator['invoice_3']; ?>]
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

                    currency = $('.calculator .currencies .currency.active').text();
                    if (currency == "CZK") {
                        row1 = FormatCZK.to(row1);
                        row2 = FormatCZK.to(row2);
                        row3 = FormatCZK.to(row3);
                    } else {
                        row1 = FormatEUR.to(row1);
                        row2 = FormatEUR.to(row2);
                        row3 = FormatEUR.to(row3);
                    }

                    $('.calculator .row1 .right').html(row1);
                    $('.calculator .row2 .right').html(row2);
                    $('.calculator .row3 .right').html(row3);
                }

                $(document).ready(function() {
                    calculatePrice();
                });
            </script>


        </div>
    </div>
</div>
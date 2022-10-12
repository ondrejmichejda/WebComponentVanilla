export const mainStyle = `
<style>

.calculator {
    width: 617px;
    max-width: 100%;
    z-index: 10;
    position:relative
}

.calculator .outer-body {
    -webkit-box-shadow: 0 0 100px 0 rgba(50, 50, 50, .75);
    box-shadow:0 0 100px 0 rgba(50, 50, 50, .75)
}

.calculator .body, .calculator .outer-body {
    -webkit-border-top-left-radius: 20px;
    -webkit-border-top-right-radius: 20px;
    -moz-border-radius-topleft: 20px;
    -moz-border-radius-topright: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius:20px
}

.calculator .body {
    font-size: 20px;
    line-heihgt: 1.5em;
    -webkit-box-shadow: 0 0 10px 0 rgba(50, 50, 50, .75);
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, .75);
    background-color: #fff;
    padding-left: 35px;
    padding-right:35px
}

.calculator .header {
    background-color: #4b266c;
    position: relative;
    color: #fff;
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    padding: 15px 145px 15px 15px;
    margin-bottom:35px
}

.calculator .header .currencies {
    position: absolute;
    top: 0;
    right: 0;
    width: 145px;
    text-align: center;
    background-color: #7ac4af;
    height: 70px;
    line-height: 70px;
    font-size:20px
}

.calculator .header .currencies .currency {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    padding-left: 10px;
    padding-right:10px
}

.calculator .header .currencies .currency.active {
    text-decoration: underline;
    color:#4b266c
}

.calculator .header .currencies .currency:hover {
    text-decoration:underline
}

.noUi-horizontal .noUi-handle {
    width: 28px;
    height: 28px;
    background-color: #4b266c;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    top: -10px;
    right: -13px;
    border-radius: 15px;
    outline: 0;
}

.noUi-handle:after, .noUi-handle:before {
    display:none
}

.calculator .title {
    font-size: 25px;
    color: #7ac4af;
    font-weight: 500;
    margin-bottom:5px
}

.calculator .slider-value {
    text-align: right;
    color: #4b266c;
    font-weight: 700;
    margin-bottom:10px
}

.noUi-horizontal {
    height: 7px;
    background-color: #f2f2f7;
    border:0
}

.noUi-connect {
    background-color:#4b266c
}

.slider {
    margin-bottom:80px
}

.noUi-marker-horizontal.noUi-marker {
    display:none
}

.noUi-value {
    font-size: 20px;
    color: #5d5d5d;
    -webkit-transform: translate(0);
    transform:translate(0)
}

.noUi-value:last-child {
    text-align: right;
    left: auto !important;
    right:0
}

table {
    width: 100%;
    margin-bottom:20px
}

table td {
    padding-bottom:20px
}

table .left {
    font-size: 25px;
    line-height: 1.2em;
    font-weight: 500;
    color:#7ac4af
}

table .left .text span {
    color:#4b266c
}

table .left .row-text {
    position:relative
}

table .left .row-text .text {
    display: inline-block;
    background-color: #fff;
    padding-right: 5px;
    position: relative;
    z-index:5
}

table .left .row-text .line {
    position: absolute;
    z-index: 1;
    border-bottom: 1px dashed #7ac4af;
    right: 0;
    bottom: 6px;
    width:100%
}

table .right {
    padding-left: 10px;
    color: #4b266c;
    font-size: 25px;
    line-height: 1.2em;
    font-weight: 700;
    text-align:right
}

.language-de table .left, .language-de table .right {
    font-size:15px
}

.language-en table .left, .language-en table .right {
    font-size:20px
}

.button {
    display: inline-block;
    font-size: 20px;
    line-height: 30px;
    padding: 8px 60px;
    color: #4b266c;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid #4b266c;
    border-radius:20px
}

.button:hover {
    color: #fff;
    background-color:#4b266c
}



@media (max-width: 1540px) {

    .calculator .header {
        font-size:25px
    }

    table .left, table .right {
        font-size:20px
    }
}

@media (max-width: 1240px) {
    

    .calculator {
        width:470px
    }

    .calculator .header {
        font-size: 20px;
        line-height: 30px;
        padding-top: 10px;
        padding-bottom:10px
    }

    .calculator .header .currencies {
        width: 110px;
        height: 50px;
        line-height: 50px;
        font-size:15px
    }

    .calculator .title {
        font-size:20px
    }

    .noUi-value, table .left, table .right {
        font-size:15px
    }
}

@media (max-width: 768px) {
    .calculator .header {
        padding-right: 15px;
        padding-bottom: 30px;
        padding-top: 0;
        line-height: 30px;
        text-align: center;
        font-size:18px
    }

    .calculator .header .currencies {
        bottom: 0;
        width: 100%;
        top: auto;
        padding-top: 0;
        padding-bottom: 0;
        height: 30px;
        line-height:30px
    }

    .calculator .body {
        padding-left: 15px;
        padding-right:15px
    }

    .calculator .slider-value, .calculator .title {
        font-size:17px
    }

    table .left, table .right {
        font-size:14px
    }
}

</style>
`;

export const noUiSliderStyle = `<style>/*! nouislider - 14.6.0 - 6/27/2020 */
.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;right:0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;-webkit-transform-style:preserve-3d;transform-origin:0 0;transform-style:flat}.noUi-connect{height:100%;width:100%}.noUi-origin{height:10%;width:10%}.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin{left:0;right:auto}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.noUi-touch-area{height:100%;width:100%}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform .3s;transition:transform .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;right:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;right:-6px;top:-17px}.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle{left:-17px;right:auto}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;box-shadow:inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB}.noUi-connects{border-radius:3px}.noUi-connect{background:#3FB8AF}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB}.noUi-active{box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB}.noUi-handle:after,.noUi-handle:before{content:"";display:block;position:absolute;height:14px;width:1px;background:#E8E7E6;left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-sub{background:#AAA}.noUi-marker-large{background:#AAA}.noUi-pips-horizontal{padding:10px 0;height:80px;top:100%;left:0;width:100%}.noUi-value-horizontal{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%,50%);transform:translate(50%,50%)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);padding-left:25px}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0,50%);transform:translate(0,50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);left:50%;bottom:120%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);top:50%;right:120%}.noUi-horizontal .noUi-origin>.noUi-tooltip{-webkit-transform:translate(50%,0);transform:translate(50%,0);left:auto;bottom:10px}.noUi-vertical .noUi-origin>.noUi-tooltip{-webkit-transform:translate(0,-18px);transform:translate(0,-18px);top:auto;right:28px}
</style>`;
export const view = `

    <div class="calculator">
      <div class="outer-body">
        <div class="body">
          <div class="header">#Kalkulator<div class="currencies">
            <div class="currency active">CZK</div>
            <div class="currency">EUR</div>
          </div>
          </div>
    
          <div class="title">#Hodnota faktury s DPH (<span class="currency">#Mena1</span>)</div>
          <div class="slider-value" id="slider1-value">1000 CZK</div>
          <div id="slider1" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <div class="title">#Splatnost faktury</div>
          <div class="slider-value" id="slider2-value">30 dnu</div>
          <div id="slider2" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <table class="table">
            <tr class="row1">
              <td class="left">
                <div class="row-text"><span class="text">#Vklad <span>80% do 24 hod</span> na vas ucet</span><span class="line"></span></div>
              </td>
              <td class="right">-</td>
            </tr>
            <tr class="row2">
              <td class="left">
                <div class="row-text"><span class="text">#Dodatecna platba na vas ucet</span><span class="line"></span></div>
              </td>
              <td class="right">-</td>
            </tr>
            <tr class="row3">
              <td class="left">
                <div class="row-text"><span class="text">Cena</span><span class="line"></span></div>
              </td>
              <td class="right">-</td>
            </tr>
          </table>
    
          <div style="text-align: center"><a class="button" href="#">#Chcem zacit</a></div>
    
        </div>
      </div>
      <!--<div class="bottom"><img src="zakulacen_trojuhelnik_na_spodku" title="" alt=""></div>-->
    </div>

`;
export const view = (translations, url) => { return `

    <div class="calculator">
      <div class="outer-body">
        <div class="body">
          <div class="header">${translations?.[0] ?? 'undefined'}
          <div class="currencies">
            <div id="cur-universal" class="currency active">${translations?.[13].trim()}</div>
            <div id="cur-eur" class="currency">EUR</div>
          </div>
          </div>
    
          <div class="title">${translations?.[1] ?? 'undefined'}(<span id="cur-span" class="currency">${translations?.[13].trim()}</span>)</div>
          <div class="slider-value" id="slider1-value">1000 CZK</div>
          <div id="slider1" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <div class="title">${translations?.[2] ?? 'undefined'}</div>
          <div class="slider-value" id="slider2-value">30 undefined</div>
          <div id="slider2" class="slider"></div>
          <div class="slider-bottom"></div>
    
          <table class="table">
            <tr class="row1">
              <td class="left">
                <div class="row-text"><span class="text">${translations?.[3] ?? 'undefined'}
                <span>${translations?.[4] ?? 'undefined'}</span>
                ${translations?.[5] ?? 'undefined'}</span><span class="line"></span></div>
              </td>
              <td id="row1-value" class="right">-</td>
            </tr>
            <tr class="row2">
              <td class="left">
                <div class="row-text"><span class="text">${translations?.[6] ?? 'undefined'}</span><span class="line"></span></div>
              </td>
              <td id="row2-value" class="right">-</td>
            </tr>
            <tr class="row3">
              <td class="left">
                <div class="row-text"><span class="text">${translations?.[7] ?? 'undefined'}</span><span class="line"></span></div>
              </td>
              <td id="row3-value" class="right">-</td>
            </tr>
          </table>
    
          <div style="text-align: center"><a class="button" href="${url}">${translations?.[8] ?? 'undefined'}</a></div>
    
        </div>
      </div>
    </div>

`};
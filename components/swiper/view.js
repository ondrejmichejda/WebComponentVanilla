export const html = (urls) => {
    let divs = '';

    if(Array.isArray(urls)) {
        urls.forEach(url => {
            divs += buildSlide(url);
        });
    }

    return `
        <div class="swiper myswiper">
          <div class="swiper-wrapper">
            <!--<div class="swiper-slide">Slide 1</div>-->
            ${divs}
          </div>
        </div>`;
}

function buildSlide(src) {
    return `<div class="swiper-slide"><img class="swiper-image" src="${src}"></div>`;
}
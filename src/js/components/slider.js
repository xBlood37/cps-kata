import Swiper, { Navigation, Pagination } from 'swiper'

function sliderInit() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: 30
      },
      768: {
        enabled: false,
        slidesPerView: 'auto'
      }
    }
  })
}

export default sliderInit

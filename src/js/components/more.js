const brandsInner = document.querySelector('.brands__inner')
const categoryInner = document.querySelector('.category__inner')
const moreButton = document.querySelectorAll('.more')

function textContentChanged(item) {
  return item.textContent === 'Cкрыть' ? (item.textContent = 'Показать все') : (item.textContent = 'Cкрыть')
}

function getMoreCard() {
  moreButton.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('more--rotate')
      if (e.target.id === 'brands') {
        brandsInner.classList.toggle('brands__inner--toogle')
        textContentChanged(item)
      }
      if (e.target.id === 'category') {
        categoryInner.classList.toggle('category__inner--toogle')
        textContentChanged(item)
      }
    })
  })
}

export default getMoreCard

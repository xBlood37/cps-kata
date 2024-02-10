const sidebarClose = document.querySelector('.sidebar-close')
const bodyOverlay = document.querySelector('.body-overlay')
const sidebar = document.querySelector('.sidebar')
const buttonBurger = document.querySelector('.button--burger')
const body = document.querySelector('.body')

export function closeModalForOverlay(menu, className, button) {
  window.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.call') && !target.closest(button) && target.closest('.body-overlay')) {
      menu.classList.remove(className)
      bodyOverlay.classList.remove('body-overlay--block')
      body.style.overflow = 'auto'
    }
  })
}

export function examBodyOverlay() {
  if (!bodyOverlay.classList.contains('body-overlay--block')) {
    bodyOverlay.classList.add('body-overlay--block')
    body.style.overflow = 'hidden'
  } else {
    bodyOverlay.classList.remove('body-overlay--block')
    body.style.overflow = 'auto'
  }
}

export function closeModalEsc(modal, className) {
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.classList.remove(className)
      bodyOverlay.classList.remove('body-overlay--block')
      body.style.overflow = 'auto'
    }
  })
}

function sidebarToggleMenu() {
  sidebar.classList.toggle('sidebar--active')
  examBodyOverlay()
}

export function sidebarMenu() {
  buttonBurger.addEventListener('click', sidebarToggleMenu)
  sidebarClose.addEventListener('click', sidebarToggleMenu)

  closeModalEsc(sidebar, 'sidebar--active')
  closeModalForOverlay(sidebar, 'sidebar--active', '.button--burger')
}

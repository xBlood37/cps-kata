const callModalAside = document.querySelector('.call')
const buttonCallAll = document.querySelectorAll('.button--call')
const callClose = document.querySelector('.call-close')

const sidebar = document.querySelector('.sidebar')

import { examBodyOverlay, closeModalEsc, closeModalForOverlay } from './sidebar'

function callModalToggleMenu() {
  if (sidebar.classList.contains('sidebar--active')) {
    sidebar.classList.remove('sidebar--active')
  }
  callModalAside.classList.toggle('call--active')
  examBodyOverlay()
}

export function callModal() {
  buttonCallAll.forEach((item) => {
    if (item.classList.contains('open-call')) {
      item.addEventListener('click', callModalToggleMenu)
      callClose.addEventListener('click', callModalToggleMenu)
    }
  })

  closeModalEsc(callModalAside, 'call--active')
  closeModalForOverlay(callModalAside, 'call--active', '.button--call')
}

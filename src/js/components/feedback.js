const feedbackModalAside = document.querySelector('.feedback')
const buttonChatAll = document.querySelectorAll('.button--chat')
const formClose = document.querySelector('.form-close')

const sidebar = document.querySelector('.sidebar')

import { examBodyOverlay, closeModalEsc, closeModalForOverlay } from './sidebar'

function feedbackToggleMenu() {
  if (sidebar.classList.contains('sidebar--active')) {
    sidebar.classList.remove('sidebar--active')
  }
  feedbackModalAside.classList.toggle('feedback--active')
  examBodyOverlay()
}

export function feedBack() {
  buttonChatAll.forEach((item) => {
    if (item.classList.contains('open-chat')) {
      item.addEventListener('click', feedbackToggleMenu)
      formClose.addEventListener('click', feedbackToggleMenu)
    }
  })

  closeModalEsc(feedbackModalAside, 'feedback--active')
  closeModalForOverlay(feedbackModalAside, 'feedback--active', '.button--chat')
}

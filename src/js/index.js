import '../scss/style.scss'

import sliderInit from './components/slider'
import getMoreCard from './components/more'
import { sidebarMenu } from './components/sidebar'
import { callModal } from './components/callModal'
import { feedBack } from './components/feedback'

sliderInit()
getMoreCard()
sidebarMenu()
callModal()
feedBack()

import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})

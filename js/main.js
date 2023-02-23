'use strict'

const tabItem = document.querySelectorAll('.tabs-btn__item')
const tabContant = document.querySelectorAll('.tabs-content-item')

tabItem.forEach(elem => elem.addEventListener('click', open));

function open(event){
   const tabTarget = event.currentTarget;
   const button = tabTarget.dataset.btn
   
   tabItem.forEach(item => item.classList.remove('tabs-btn__item--active'))
   tabContant.forEach(item => item.classList.remove('tabs-content-item--active'))

   tabTarget.classList.add('tabs-btn__item--active')
   document.querySelector(`#${button}`).classList.add('tabs-content-item--active')
}
// <Slick slider>
$(document).ready(function(){
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,

   });
 });
 
 // </Slick slider>
 // =================================================================================

function rotate() {
   let rotateText = document.querySelector('.inverted');
   let widthDiv = rotateText.clientWidth;
   let heightDiv = rotateText.clientHeight;
   
   if (rotateText) {
      rotateText.style.left = '-' + (widthDiv / 2 - heightDiv / 2) + 'px';
   }
}
rotate();
// =================================================================================

// <Картинка (img) в фон (background-image)>
function ibg() {
   let ibg = document.querySelectorAll('.ibg');
 
   for (i=0; i<ibg.length; i++) {
       if(ibg[i].querySelector('img')) {
           ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
       }          
   }
 }
 ibg();
 // </Картинка (img) в фон (background-image)>
 // =================================================================================

 const menuHeder = document.querySelector('.header')
 
 function scroll() {
   if (window.pageYOffset > 100) {
      if (!menuHeder.classList.contains('fixed')) {
         menuHeder.classList.add('fixed');
      }
   } else {
      menuHeder.classList.remove('fixed');
   }
 }
 window.addEventListener('scroll', function() {
   setTimeout(scroll, 500);
 });
 // =================================================================================

 // <Табы>
const buttonsContainer = document.querySelectorAll('.delicious-menu__links');
const tabs             = document.querySelectorAll('.delicious-menu__tabs');

function listenerTabs() {
   for (let index = 0; index < buttonsContainer.length; index++) {
      let indexfunc = index;
      buttonsContainer[index].addEventListener('click', function(event) {
         const clickTarget = event.target;
         const linkActive = buttonsContainer[indexfunc].querySelector('.active');

         event.preventDefault();
         
         if (clickTarget.classList.contains('delicious-menu__link')) {
            removeClass(linkActive, 'active');
            addClass(clickTarget, 'active');           
            openTab(indexfunc, clickTarget);  
         }        
      });
   }
}
function openTab(index, target) {
   let dataValue = target.dataset.value;
   let tabDeactivation = tabs[index].querySelector('.open');
   let tabActive = tabs[index].querySelector(`.tab--${dataValue}`);

   removeClass(tabDeactivation, 'open');
   addClass(tabActive, 'open');
}
function addClass(element, value) {
   if (element) {
      element.classList.add(value);
   }
}
function removeClass(element, value) {
   if (element) {
      element.classList.remove(value);
   }
}
document.addEventListener('DOMContentLoaded', function(e) {
   listenerTabs();
 })
 // </Табы>
 // =================================================================================

 // <Меню бургер>
const body =  document.querySelector('body');
const btnBurger = document.querySelector('.menu-header__burger');
const menu =  document.querySelector('.menu-header');
const header = document.querySelector('.header');

const toggleMenu = function() {
    menu.classList.toggle('open');
}
const toggleBurger = function() {
    btnBurger.classList.toggle('active');
}
btnBurger.addEventListener('click', function(e) {
   e.stopPropagation();
   toggleBurger();
   toggleMenu();
   body.classList.toggle('lock');
   
});
menu.addEventListener('click', function(e) {
   if (e.target.classList.contains('menu-header__link') && btnBurger.classList.contains('active')) {
      e.stopPropagation();
      toggleBurger();
      toggleMenu();
      body.classList.toggle('lock');
   }
})
// </Меню бургер>
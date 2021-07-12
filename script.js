'use strict';

const hamburger = document.getElementById('hamburger');
const hiddenNavbar = document.querySelector('.collapsed-nav');
const page2img = document.querySelector('.page2-left img');
const page4img = document.querySelectorAll('.page4 img');
const underline = document.querySelectorAll('.underline');
const homeImage = document.querySelector('.content-right img');
const page3img = document.querySelectorAll('.page3-col-2 img');

// initializations
function init(element,eclass) {
   element.classList.add(eclass);
}
function replace(element,rclass,aclass) {
   element.classList.remove(rclass);
   element.classList.add(aclass);
}

init(hiddenNavbar,'opacity');
init(hiddenNavbar,'display-none');

init(page2img,'scale');
page4img.forEach(element => {
   init(element,'scale');
});

underline.forEach(element=>{
   init(element,'scaleX');
   init(element,'transition');
});

page3img.forEach(element => {
   init(element,'fade-up');
});

// init(homeImage,'fade-right');

// slide in animation onload

// window.onload = function () {
//    setTimeout(() => {
//       replace(homeImage,'fade-right','fade-right-in');
//    }, 0);
// }

// home image animation
window.setTimeout(() => {
   replace(homeImage,'fade-right','fade-right-in');
}, 300);


// toggle hidden navbar

hamburger.addEventListener('click',function () {
   setTimeout(() => {
      hiddenNavbar.classList.toggle('opacity');
      hiddenNavbar.classList.toggle('display-none');
   }, 100);
})

// fade in animations

function offset(element) {
   const x = Math.round(window.scrollY + element.getBoundingClientRect().top);
   return x;
}

const array1 = [page2img,page4img[0],page4img[1],page4img[2]];
const array2 = [...underline];
const array3 = [page3img[0],page3img[1],page3img[2]];
// wow spread not working for array3


window.onscroll = function change() {

   // loop for img scale-in
   array1.forEach(element => {
      if (window.scrollY>offset(element)-550) {
         replace(element,'scale','scale-in');
         array1.shift(); 
   }
   });   

   // loop for underline
   array2.forEach(element => {
      if (window.scrollY>offset(element)-525) {
         replace(element,'scaleX','scaleX-in');
         array2.shift(); 
   }
   });   
   
   // loop for page3 images fade-up
   array3.forEach(element => {
      if (window.scrollY>offset(element)-550) {
         replace(element,'fade-up','fade-up-in');
         // array3.shift(); 
   }
   });   
   

}


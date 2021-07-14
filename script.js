'use strict';

const hamburger = document.getElementById('hamburger');
const hiddenNavbar = document.querySelector('.collapsed-nav');
const page2img = document.querySelector('.page2-left img');
const page4img = document.querySelectorAll('.page4 img');
const underline = document.querySelectorAll('.underline');
const homeImage = document.querySelector('.content-right img');
const page3img = document.querySelectorAll('.page3-col-2 img');
const home = document.querySelector('.home');
const ourProduct = document.querySelector('.page3');
const whyUs = document.querySelector('.page4');
const blogs = document.querySelector('.page5');
const contact = document.querySelector('footer');
const navButtons = document.querySelectorAll('ul li a');

let startPage3Slideshow = false;

const homeGallery = {
   image1:'images/home-gallery/DezyIt-Home-Mockup.png',
   image2:'images/home-gallery/Design Thinking Sprint - Centre3.png',
   image3:'images/home-gallery/Login-DezyIt.png',
   image4:'images/home-gallery/Useful Tips-Dezy It.png',
};

const page3Gallery ={
   set1:['images/page-3-gallery/page3-set-1-img-1.png','images/page-3-gallery/page3-set-1-img-2.png','images/page-3-gallery/page3-set-1-img-3.png'],

   set2:['images/page-3-gallery/page3-set-2-img-1.png','images/page-3-gallery/page3-set-2-img-2.png','images/page-3-gallery/page3-set-2-img-3.png'],

   set3:['images/page-3-gallery/page3-set-3-img-1.png','images/page-3-gallery/page3-set-3-img-2.png','images/page-3-gallery/page3-set-3-img-3.png'],
};

   //home page slideshow

   function homePageSlideshow() {

      Object.values(homeGallery).forEach((element, index) => {
         window.setTimeout(() => {
            // changing the src attribute
            homeImage.setAttribute('src',element);
         }, 4000 * index);
      });
   };
      
      
   // call the fn once then after every 9000ms
   homePageSlideshow();

   window.setInterval(homePageSlideshow,18000);


// page3 slideshow 

      page3Slideshow();
      window.setInterval(page3Slideshow,18000);


// initializations
function init(element,eclass) {
   element.classList.add(eclass);
};
function replace(element,rclass,aclass) {
   element.classList.remove(rclass);
   element.classList.add(aclass);
};

function changeColor() {
   // console.log(this);
   navButtons.forEach(xelement => {
      if (xelement.classList.contains('active')) {
         xelement.classList.remove('active');
      }
   });
   // active is assigned to click element
   this.classList.add('active');
};

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

// init(homeImage,'fade-right');    initialised class in the css since js takes time to load

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
});


// navigation active page

navButtons.forEach(element => {
   element.addEventListener('click',changeColor.bind(element));
   // now the function's this keyword points to the element which triggered the eventListener
});


// fade in animation

function offset(element) {
   const x = Math.round(window.scrollY + element.getBoundingClientRect().top);
   return x;
};

let array1 = [page2img,page4img[0],page4img[1],page4img[2]];
let array2 = [...underline];
let array3 = [page3img[0],page3img[1],page3img[2]];
// wow spread not working for array3

let array4 = [home,ourProduct,whyUs,blogs,contact];


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
         // array3.shift(); !array still in memory
   }
   });  

   // if (window.scrollY>1190) {
   //    startPage3Slideshow = true;
   // }
}

// need to write this fn outside onscroll 
function page3Slideshow() {

      Object.values(page3Gallery).forEach((element, index) => {
         window.setTimeout(() => {
            // changing the src attribute
            // console.log(page3img[0],element[0]);
            // console.log(page3img[1],element[1]);
            // console.log(page3img[2],element[2]);
            page3img[0].setAttribute('src',element[0]);
            page3img[1].setAttribute('src',element[1]);
            page3img[2].setAttribute('src',element[2]);
         }, 4000 * index);
      });
   }

   //when page3 images get loaded
   /* if (startPage3Slideshow) {
      page3Slideshow();
      window.setInterval(page3Slideshow,18000);
   }; */
      

   // To change active class of elements in navbar depending on the page position
   //array elements won't be discarded since need to check with every scroll

   // array4.forEach(element => {
   //    if (window.scrollY>offset(element)-550) {
   //       replace(element,'fade-up','fade-up-in');
   //       // array4.shift(); !array still in memory
   // }
   // });





/* большой слайдер */
const back = document.querySelector('.main-slider__arrow-wrapperleft'),
      next = document.querySelector('.main-slider__arrow-wrapperright'),
      wrapper = document.querySelector('.main-slider__wrapper'),
      width = window.getComputedStyle(wrapper).width,
      carousel = document.querySelector('.main-slider__carousel'),
      slides = document.querySelectorAll('.main-slider__slider');

      let offset = 0;
      let slideIndex = 1;

      carousel.style.width = 100 * slides.length + "%";
      carousel.style.transition = '2s';

      next.addEventListener('click', ()=>{
        if (offset == (+width.replace(/\D/ig, '') * (slides.length - 1))) {
          offset = 0;
        }else{
          offset += +width.replace(/\D/ig, '');
        }
        carousel.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
          slideIndex = 1
        }else{
          slideIndex++
        }
        dots.forEach(item=>{
          item.style.cssText = `
          width: 8px;
          height: 8px;
          background: #C4C4C4;
          border: none;
          border-radius: 100%;
          cursor: pointer;
          `
        })

        dots[slideIndex - 1].style.cssText = ` 
        width: 8px;
        height: 8px;
        background: #333152;
        border: none;
        border-radius: 100%;
        cursor: pointer;`
      })
    
      back.addEventListener('click', ()=>{
        if (offset == 0) {
          offset = (+width.replace(/\D/ig, '') * (slides.length - 1))
        }else{
          offset -= +width.replace(/\D/ig, '');
        }
        carousel.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
          slideIndex = slides.length
        }else{
          slideIndex--
        }
        dots.forEach(item=>{
          item.style.cssText = `
          width: 8px;
          height: 8px;
          background: #C4C4C4;
          border: none;
          border-radius: 100%;
          cursor: pointer;
          `
        })

        dots[slideIndex - 1].style.cssText = ` 
        width: 8px;
        height: 8px;
        background: #333152;
        border: none;
        border-radius: 100%;
        cursor: pointer;`
      })
      const dots = []
      for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div');
      dot.setAttribute('data-dots', i + 1)
      dot.style.cssText = ` 
      width: 8px;
      height: 8px;
      background: #C4C4C4;
      border: none;
      border-radius: 100%;
      cursor: pointer;`
      document.querySelector('.main-slider__dotted-wrapper').append(dot)
       if (i == 0) {
        dot.style.cssText =`
        width: 8px;
        height: 8px;
        background: #333152;
        border: none;
        border-radius: 100%;
        cursor: pointer;`
       }
       dots.push(dot);
       
      }
      dots.forEach((dot, i)=>{
        dot.addEventListener('click', (e)=>{
         const d = e.target.getAttribute('data-dots')
         slideIndex = d
         offset = (+width.replace(/\D/ig, '') * (d - 1))
         carousel.style.transform = `translateX(-${offset}px)`;
 
         dots.forEach(item=>{
           item.style.cssText = `
           width: 8px;
           height: 8px;
           background: #C4C4C4;
           border: none;
           border-radius: 100%;
           cursor: pointer;
           `
         })
 
         dots[slideIndex - 1].style.cssText = ` 
         width: 8px;
         height: 8px;
         background: #333152;
         border: none;
         border-radius: 100%;
         cursor: pointer;`
        })
        })
/* второй слайдер   */ 
   const wrapp = document.querySelector('.topsale__mainwrapper'),
         field = document.querySelector('.topsale__field'),
         width2 = window.getComputedStyle(wrapp).width,
         contentWrapper = document.querySelectorAll('.topsale__top-slidewrapper'),
         prevar = document.querySelector('.topsale__arrow-left'),
         nextar = document.querySelector('.topsale__arrow-right');
         
         let offset2 = 2340;

         field.style.width = 100 * contentWrapper.length + "%";

         nextar.addEventListener('click', ()=>{
          if (offset2 == +width2.replace(/\D/ig, '') * (contentWrapper.length )){
            offset2 = 0
          }else{
            offset2 += +width2.replace(/\D/ig, '')
          } 
          field.style.transform = `translateX(-${offset2}px)`
         })
         
         prevar.addEventListener('click', ()=>{
          if (offset2 == 0){
            offset2 = +width2.replace(/\D/ig, '') * (contentWrapper.length )
          }else{
            offset2 -= +width2.replace(/\D/ig, '')
          } 
          field.style.transform = `translateX(-${offset2}px)`
         })  





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

/*  создание фото в слайдере */

const field = document.querySelector('.topsale__field'),
      contentWrapper = document.querySelectorAll('.topsale__card'), 
     /*  width2 = window.getComputedStyle(contentWrapper[0]).width, */ 
      topSaleWrapper = document.querySelector('.topsale__top-slidewrapper'),
      prevar = document.querySelector('.topsale__arrow-left'),
      nextar = document.querySelector('.topsale__arrow-right');
      
 class Card {
  constructor(src, alt, content, newcontent, lowprice, descr, price, pastprice){
    this.src = src,
    this.alt = alt,
    this.content = content,
    this.newcontent = newcontent,
    this.lowprice = lowprice,
    this.descr = descr,
    this.price = price,
    this.pastprice = pastprice
  }

  render(){
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="topsale__card">
      <div class="topsale__top-imgwrapper">
        <img src=${this.src} alt=${this.alt}>
        <div class="topsale__hitsale">${typeof(this.content) === 'undefined' ? '' : this.content}</div>
        ${typeof(this.newcontent) === 'undefined' ? '': this.newcontent}
        ${typeof(this.lowprice) === 'undefined' ? '' : this.lowprice}
      </div>
      <div class="topsale__descr">${this.descr}</div>
      <div class="topsale__pricewrapper">
        <div class="topsale__price topsale__redprice ">${typeof(this.price) === 'undefined' ? '' : this.price}</div>
        ${typeof(this.pastprice) === 'undefined' ? '' : this.pastprice}
      </div>
     </div>`
     
     topSaleWrapper.append(div)
  }
}
async function getInfo(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error in path ${url} status ${res.status}`)
  }else{
    return await res.json()
  }
  
}

getInfo('http://localhost:3000/slideInfo')
.then((data)=>{
data.forEach(({src, alt, content, newcontent, lowprice, descr, pastprice, price})=>{
new Card(src, alt, content, newcontent, lowprice, descr, pastprice, price).render()
})
})       
/* второй слайдер   */ 
   /* const field = document.querySelector('.topsale__field'),
         contentWrapper = document.querySelectorAll('.topsale__card'),
         width2 = window.getComputedStyle(contentWrapper[0]).width,
         topSaleWrapper = document.querySelector('.topsale__top-slidewrapper'),
         prevar = document.querySelector('.topsale__arrow-left'),
         nextar = document.querySelector('.topsale__arrow-right'); */
  
  let offset2 = 0;

  topSaleWrapper.style.width = (100 * (contentWrapper.length - 4)) + "%";

  nextar.addEventListener('click', ()=>{
   const contentWrapper = document.querySelectorAll('.topsale__card'),
         width2 = window.getComputedStyle(contentWrapper[0]).width;
         
  if (offset2 == (+width2.replace(/\D/ig, '') + 30) * (contentWrapper.length - 4)){
    offset2 = 0
  }else{
    offset2 += (+width2.replace(/\D/ig, '') + 30)
  } 
  topSaleWrapper.style.transform = `translateX(-${offset2}px)`
  })
  
  prevar.addEventListener('click', ()=>{
   const contentWrapper = document.querySelectorAll('.topsale__card'),
         width2 = window.getComputedStyle(contentWrapper[0]).width;
         
  if (offset2 == 0){
    offset2 = (+width2.replace(/\D/ig, '') + 30) * (contentWrapper.length - 4)
  }else{
    offset2 -= (+width2.replace(/\D/ig, '') + 30)
  } 
  topSaleWrapper.style.transform = `translateX(-${offset2}px)`
  })  


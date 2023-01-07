import OPTIONS from './option.js';

// const createTemplate = () => {
//   const { TEMPLATE } = OPTION;
//   const container = document.createElement('div');
//   container.innerHTML = TEMPLATE();
// }

function createRipple(e,r4){
  const button = r4
  const { color, opacity, duration } = r4.s.options
  
  // 可以更改點擊時生成效果樣式的結構
  let ripples = document.createElement('span');
  
  //偵測滑鼠點擊位置
  let x = e.pageX - $(r4).offset().left;
  let y = e.pageY - $(r4).offset().top;

  // ripples.style.left = `${x}px`;
  // ripples.style.top = `${y}px`;
  ripples.style.cssText = `background: ${color};left: ${x}px;top: ${y}px;opacity: ${opacity};animation-duration: ${duration}ms`
  
  ripples.classList.add("circle");
  
  // 生成
  button.appendChild(ripples);
}
function hoverEnter(e) {
  const targets = $('.hover-btn:not(.hover-init)');
  if (!targets.length) return;
  targets.each((i, el) => {
    const self = $(el);
    
    const width = self.innerWidth() * 2.1;
    const ball = $(`<i class="hover-ball" style="width: ${width}px; height: ${width}px";></i>`);
    self.append(ball);
    const posX = e.clientX - el.getBoundingClientRect().left;
    const posY = e.clientY - el.getBoundingClientRect().top;
    ball.css({
      width: self.innerWidth() * 2.1,
      height: self.innerWidth() * 2.1,
      left: posX,
      top: posY,
    });
    self.addClass('hover-init');
  });
}

class Ripple4 extends HTMLElement {
  constructor() {
    super();
  };
  // static get observedAttributes() {
  //   return [];
  // };

  connectedCallback() {
    this.#create()
  };

  #create() {
    this.s = {};
    this.s.eventEffect = this.getAttribute('r4-hover') === 'true' ? true : OPTIONS.SETTINGS.hover;
    const options = {
      color: this.getAttribute('r4-color') || OPTIONS.SETTINGS.color,
      opacity: this.getAttribute('r4-opacity') || OPTIONS.SETTINGS.opacity,
      duration: this.getAttribute('r4-duration') || OPTIONS.SETTINGS.duration,
      hover: this.getAttribute('r4-hover') || OPTIONS.SETTINGS.hover,
      click: this.getAttribute('r4-hover-click') || OPTIONS.SETTINGS.click,
    };
    
    this.s.options = options;
    if(this.s.eventEffect){
      this.classList.add('hover-btn')
    }
    this.#init();
  };

  #init() {
    // const button = this;
    // button.classList.add("button");
    // this.#event();
    // if (this.s.eventEffect === 'true') {
    //   $(this).addClass('hover-btn');
    //   this.#hover();
    // } else {
    //   this.#event();
    // }

    this.#event();
    this.#hover();
  };
  #event() {
    const button = this
    button.addEventListener('click',function(e){
      if(button.s.options.click === true){
        // console.log(button.s.options.click);
        createRipple(e,button)
      }
    });
    // button.addEventListener('mouseenter',function(e){
    //   if(button.s.options.hover){
    //     hoverEnter(button)
    //   }
    // });
  };


  #hover() {
    const targets = $('.hover-btn:not(.btn-init)');
    const { click } = this.s.options
    if (!targets.length) return;
    targets.each((i, el) => {
      const self = $(el);
      const width = self.innerWidth() * 2.1;
      const ball = $(`<i class="hover-ball" style="width: ${width}px; height: ${width}px";></i>`);
      self.append(ball);
      self.on('mouseenter', function (e) {
          const posX = e.clientX - el.getBoundingClientRect().left;
          const posY = e.clientY - el.getBoundingClientRect().top;
          ball.css({
            width: self.innerWidth() * 2.1,
            height: self.innerWidth() * 2.1,
            left: posX,
            top: posY,
          });
        })
      self.on('mouseleave', function (e) {
        const posX = e.clientX - el.getBoundingClientRect().left;
        const posY = e.clientY - el.getBoundingClientRect().top;
        ball.css({ left: posX, top: posY });
      });
      self.addClass('hover-init');
    });
    // 判斷有hover效果的功能是否加上點擊 ripple
    if (click === true) this.#event()
  };
  


  // #mount(e) {
  //   const button = this
  //   const { color, opacity, duration } = this.s.options
    
  //   // 可以更改點擊時生成效果樣式的結構
  //   let ripples = document.createElement('span');
    
  //   //偵測滑鼠點擊位置
  //   let x = e.pageX - $(this).offset().left;
  //   let y = e.pageY - $(this).offset().top;

  //   // ripples.style.left = `${x}px`;
  //   // ripples.style.top = `${y}px`;
  //   ripples.style.cssText = `background: ${color};left: ${x}px;top: ${y}px;opacity: ${opacity};animation-duration: ${duration}ms`
    
  //   ripples.classList.add("circle");
    
  //   // 生成
  //   button.appendChild(ripples);
  // };
};

if (!customElements.get('ripple-btn')) {
  customElements.define('ripple-btn', Ripple4);
};

export default Ripple4;


// class Ripple4 extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.button();
//   }
//   button() {
//     const $button = $('ripple-btn');
//     $button.on('click', function(e){
//         // 可以更改點擊時生成效果樣式的結構
//         let ripples = $('<span></span>');

//         //偵測滑鼠點擊位置
//         let x = e.pageX - $(this).offset().left;
//         let y = e.pageY - $(this).offset().top;
//         ripples.css({
//             left: x + 'px',
//             top: y + 'px',
//         });

//         //生成
//         $(this).append(ripples);

//         //1秒後移除
//         setTimeout(() => {
//             ripples.remove()
//         },1000)
//     });
//     return this;
//   }
// }

// if (!customElements.get('ripple-btn')) {
//   customElements.define('ripple-btn', Ripple4);
// }

// export default Ripple4;

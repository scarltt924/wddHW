import OPTIONS from './option.js';

// const createTemplate = () => {
//   const { TEMPLATE } = OPTION;
//   const container = document.createElement('div');
//   container.innerHTML = TEMPLATE();
// }

class Ripple4 extends HTMLElement {
  constructor() {
    super();
  };
  
  static get observedAttributes() {
    return [];
  };

  connectedCallback() {
    this.#create()
  };

  #create() {
    const eventEffect = this.getAttribute('r4-event');
    const options = {
      color: this.getAttribute('r4-color') || OPTIONS.SETTINGS.color,
      opacity: this.getAttribute('r4-opacity') || OPTIONS.SETTINGS.opacity,
      duration: this.getAttribute('r4-duration') || OPTIONS.SETTINGS.duration,
      on: this.getAttribute('r4-event') || OPTIONS.SETTINGS.on,
    }
    this.s = {}
    this.s.options = options

    this.#event()

    const detectEvent = function() {
      if (eventEffect === 'mouseDown' || eventEffect === 'mouseHover') {
        return eventEffect 
      }
      else {
        return options.on
      }
    }
    detectEvent();
    console.log(detectEvent());
  };

  #init() {
    // const button = this;
    // button.classList.add("button");
    // this.#event();
  };

  #event() {
    const button = this
    button.addEventListener('click', (e) => {
      this.#mount(e);
    });
  };

  #mount(e) {
    const button = this
    const { color, opacity, duration } = this.s.options
    
    // 可以更改點擊時生成效果樣式的結構
    let ripples = document.createElement('span');
    
    //偵測滑鼠點擊位置
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;

    // ripples.style.left = `${x}px`;
    // ripples.style.top = `${y}px`;
    ripples.style.cssText = `background: ${color};left: ${x}px;top: ${y}px;opacity: ${opacity};animation-duration: ${duration}ms`
    
    ripples.classList.add("circle");
    
    // 生成
    button.appendChild(ripples);
  };
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

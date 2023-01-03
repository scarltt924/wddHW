// import OPTION from './option';

// const createTemplate = () => {
//   const { TEMPLATE } = OPTION;
//   const container = document.createElement('div');
//   container.innerHTML = TEMPLATE();
// }


class Ripple4 extends HTMLElement {
  constructor() {
    super();
  }
  // static get styles() {
  //   return css`
  //     button { color: red; }
  //   `;
  // }
  connectedCallback() {
    this.#init()
  }
  #event() {
    const button = this
    button.addEventListener('click', (e) => {
      this.#create(e);
    });
  }
  #create(e) {
    const button = this
    const buttons = e.currentTarget;
  
    // 可以更改點擊時生成效果樣式的結構
    let ripples = document.createElement('span');
  
    //偵測滑鼠點擊位置
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;

    ripples.classList.add("circle");
  

    const circle = buttons.getElementsByClassName("circle")[0];
    
    if (circle) {
      circle.remove();
    }

    // 生成
    button.appendChild(ripples);
  }
  #init() {
    const button = this
    button.classList.add("button");
    this.#event();
  }
}

if (!customElements.get('ripple-btn')) {
  customElements.define('ripple-btn', Ripple4);
}

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

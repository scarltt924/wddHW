// class Ripple4 extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.#create();
//   }
//   //建立按鈕結構
//   #create() {
//     this.#event()
//   }
//   #event() {
//     // super.create()
//     const $button = this
//     $button.on('click', function(e){ 
//       this.ripples = $('<span>❤</span>');
//       //偵測滑鼠點擊位置
//       let x = e.pageX - $(this).offset().left;
//       let y = e.pageY - $(this).offset().top;
//       ripples.css({
//         left: x + 'px',
//         top: y + 'px',
//       });


//       //生成
//       $(this).append(ripples);

//       //1秒後移除
//       setTimeout(() => {
//         ripples.remove()
//       },1000)
//     });
//   }
//   #append() {
    
//   }
// }


// if (!customElements.get('ripple-btn')) {
//   customElements.define('ripple-btn', Ripple4);
// }

// export default Ripple4;
class Ripple4 extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.button();
  }
  button() {
    const $button = this
    $button.on('click', function(e){
        // 可以更改點擊時生成效果樣式的結構
        let ripples = $('<span>❤</span>');
  
        //偵測滑鼠點擊位置
        let x = e.pageX - $(this).offset().left;
        let y = e.pageY - $(this).offset().top;
        ripples.css({
            left: x + 'px',
            top: y + 'px',
        });

        //生成
        $(this).append(ripples);
  
        //1秒後移除
        setTimeout(() => {
            ripples.remove()
        },1000)
    });
    return this;
  }
}

if (!customElements.get('ripple-btn')) {
  customElements.define('ripple-btn', Ripple4);
}

export default Ripple4;

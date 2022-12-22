class Ripple4 extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.button();
  }
  button() {
    const $button = $('ripple-btn');
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

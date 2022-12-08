// 先將 Modal4 引入
import Modal4 from '../fesd2022/modal4/modal4'

new Modal4('[data-modal-target]')
const modalsOpen = new Modal4('[data-modal-target]', {
    on: {
        // 開啟燈箱時 update lazyload
        open() {
            new Aost4('[data-aost]', {
                scroller: '[data-modal-id="ajaxMe"] .os-viewport',
                delay: 200
            })
            setTimeout(function () {
                Anchor4.run({
                    target: '.box.box4',
                    container: '[data-modal-id="ajaxMe"] .os-viewport',
                    spacer: '.box.box1',
                    on: {
                        afterScroll() {
                            alert('yo Man')
                        }
                    }
                })
            },1000)
        }
    }
})

// window._g.modalOpen = () => {
//     Modal4.open({
//         target: 'ajaxMe',
//         route: './ajax.html',
//         on: {
//             open() {
//                 new Aost4('[data-aost]', {
//                     scroller: '[data-modal-id="ajaxMe"] .os-viewport',
//                     delay: 200
//                 })
//                 setTimeout(function () {
//                     Anchor4.run({
//                         target: '.box.box4',
//                         container: '[data-modal-id="ajaxMe"] .os-viewport',
//                         spacer: '.box.box1',
//                     })
//                     setTimeout(function () {
//                         alert('yo Man')
//                     },2000)
//                 },1000)
//             }
//         }
//     })
// }

// 第一區塊
const s1Handler = function () {
    _g.imagePreview('.upload-btn',{
        sizeLimit: 1, //大小限制 (type: Number 單位: MB)
        on: {
            changeAfter() {
                console.log('yes');
                alert('恭喜!!!')
            },
            overLimit() {
                console.log('no!!!');
                alert('NO!!!')
            },
        },
    });

    function greetings() {
        const date = new Date();
        const hours = parseInt(date.getHours());
        if (hours >= 0 && hours < 12) {
            return 'Good morning !';
        } else if (hours >= 12 && hours < 18) {
            return 'Good afternoon !';
        } else if (hours >= 18 && hours < 24) {
            return 'Good evening !';
        }
    }
    const text = document.querySelector('.welcome-wrap').querySelector('.text p');
    text.innerText = greetings();
};


$(() => {
    _g.categorySlider('.category-slider', {
        breakpoint: 1200,
    });
    s1Handler();
});
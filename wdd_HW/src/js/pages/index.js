import { Aost4, Modal4 } from '../fesd2022/modal4/modal4'


// 第一區塊
const s1Handler = function() {
    _g.imagePreview('.upload-btn');

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

const ajaxFunction = function() {
    const myModal = $('modern-modal[data-modal-id="ajaxMe"]')
    myModal.open({
        target: 'ajaxMe',
        route: '.../ajax.html',
        container: 'main',
        on: {
            success() {
                console.log('yo');
            },
            open(modal) {
                const scrollers = modal.querySelectorAll('.os-viewport');
                const aostTest = new Aost4('[data-aost]', {
                    scroller: scrollers,
                })
                aostTest()
                console.log('ya');
            }
        },
    })
}



$(() => {
    _g.categorySlider('.category-slider', {
        breakpoint: 1200,
    });
    s1Handler();
    ajaxFunction();
});
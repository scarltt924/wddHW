import Modal4 from '../fesd2022/modal4/modal4'

// 燈箱
const modalHandler = function() {
    _g.modalOpen = () => {
        Modal4.open({
            target: 'ajaxMe',
            route: './ajax.html',
            on: {
                open() {
                    new Aost4('[data-aost]', {
                        scroller: '[data-modal-id="ajaxMe"] .os-viewport',
                        delay: 200
                    })
                    setTimeout(function() {
                        Anchor4.run({
                            target: '.box.box2',
                            container: '[data-modal-id="ajaxMe"] .os-viewport',
                            spacer: '.nav-bar',
                            on: {
                                afterScroll() {
                                    alert('yo Man')
                                }
                            }
                        })
                    }, 1000)
                }
            }
        })
    }
}

// 大頭貼
const imgPreviewHandler = function() {
    _g.imagePreview('.upload-btn', {
        sizeLimit: 1, //大小限制 (type: Number 單位: MB)
        on: {
            changeAfter() {
                console.log('yes');
                alert('更換成功!!!!')
            },
            overLimit() {
                console.log('no!!!');
                alert('NO!!!!!')
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

// 類別拖拉
const categoryHandler = function() {
    _g.categorySlider('.category-slider', {
        breakpoint: 1200,
    });
}

// 下拉選單
const dropdownHandler = function() {
    const $dropdown = $('dropdown-el');
    $dropdown.each((i, el) => {
        el.on('change', function() {
            const key = i + 1
            console.log('第' + key + '個下拉選單');
        })
    })
}

$(() => {
    modalHandler();
    imgPreviewHandler();
    categoryHandler();
    dropdownHandler();
});
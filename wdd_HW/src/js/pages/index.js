import Modal4 from '../fesd2022/modal4/modal4'

// // rippleButton
// const button = function() {
//     const $button = $('.rippleBtn')
//     $button.on('click', function(e){
//         // 可以更改點擊時生成效果樣式的結構
//         let ripples = $('<span>❤</span>');

//         //偵測滑鼠點擊位置
//         let x = e.pageX - $(this).offset().left;
//         let y = e.pageY - $(this).offset().top;
//         ripples.css({
//             left: x + 'px',
//             top: y + 'px',
//         });
        
//         //生成
//         $(this).append(ripples);

//         // 原生js ~ 寫法?
//         // let ripples = document.createElement('span')
//         // ripples.style.left = x + 'px';
//         // ripples.style.top = y + 'px';
//         // this.appendChild(ripples);

//         //1秒後移除
//         setTimeout(() => {
//             ripples.remove()
//         },1000)
//     })
//     $button.on('mouseenter', function(e){
//         // let ripples = $('<span>❤</span>');

//         // //偵測滑鼠點擊位置
//         // let x = e.pageX - $(this).offset().left;
//         // let y = e.pageY - $(this).offset().top;
//         // ripples.css({
//         //     left: x + 'px',
//         //     top: y + 'px',
//         // });
        
//         // //生成
//         // $(this).append(ripples);

//         // // 原生js ~ 寫法?
//         // // let ripples = document.createElement('span')
//         // // ripples.style.left = x + 'px';
//         // // ripples.style.top = y + 'px';
//         // // this.appendChild(ripples);

//         // //1秒後移除
//         // setTimeout(() => {
//         //     // $(this).css('background','#7a1b1b')
//         //     ripples.remove()
//         // },1000)
//     })
//     $button.on('mouseleave', function(e){

//         // $(this).css('background','#7a1b1b')
//         // ripples.remove()

//     })
// }

// function phone(brand, price, color){
//     this.brand = brand;
//     this.price = price;
//     this.color = color || false;
// }

// phone.prototype.photo = function(someone) {
//     if (this.color) {
//         console.log(this.price + '拍照');
//     } else {
//         console.log(this.price + '沒有此功能');
//     }
// }
// phone.prototype.call = function(someone) {
//     console.log('打電話給' + someone)
// }

// var sony = new phone('sony','200',true)
// console.log(sony);

// class phone2 {
//     constructor(brand, price, color) {
//         this.brand = brand;
//         this.price = price;
//         this.color = color || false;
//     }

//     photo() {
//         if (this.color) {
//             console.log(this.price + '照相');
//         } else {
//             console.log(this.price + '沒有照相功能');
//         }
//     }

//     call() {
//         console.log('打通電話給' + someone);
//     }
// }

// var apple = new phone2('apple','31000',false)
// console.log(apple);

class Person{
    constructor(age,weight){
        this.age=age;
        this.weight=weight;
        this.property='會在父類別實例中產生的屬性'
    }
    call_this(){
        return this;
    }
    showProperty(){
        console.log(`父類別實例的: ${this.property}`)
    }
    static SonCanNotUse(){
        console.log("老子專用");
        console.log(`父類別私有方法的: ${this.property}`)
		
        
    }
}
class SuperMan extends Person{
	constructor(age,weight,power){
    // 如果在super()之前就呼叫this 的話，會refference error
		super();
        this.property="子類用this初始化的property";
        super.property="子類用super初始化的property";
		this.power=power;
        super.showProperty();
	}
	hello(){
		console.log(`子類實例中，被super.property改掉的property${this.property}`);
	}
    static sonPrivateMethod(){
        super.showProperty();
    }
}

var kkman=new SuperMan(1,2,3)


// 燈箱
const modalHandler = function () {
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
                    setTimeout(function () {
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
const imgPreviewHandler = function () {
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
const categoryHandler = function () {
    _g.categorySlider('.category-slider', {
        breakpoint: 1200,
    });
}

// 下拉選單
const dropdownHandler = function () {
    const $dropdown = $('dropdown-el');
    $dropdown.each((i, el) => {
        el.on('change', function () {
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
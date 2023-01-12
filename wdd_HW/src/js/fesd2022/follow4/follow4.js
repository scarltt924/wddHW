import OPTIONS from './option'
import SHARED from './../shared/shared'

export default class Follow4 {
  constructor(el, options) {
    const { SETTINGS, EVENTS } = OPTIONS

    this.el = document.querySelector(el)
    this.options = options

    this.__events__ = Object.assign({}, EVENTS)

    if (this.options.on) {
      for (const [k, v] of Object.entries(this.options.on)) {
        this.__events__[k] = [v]
      }
    }

    this.#create()
  }

  #create() {

    console.log(this.el, 'Follow4');
    console.log(this.options, 'Follow4');

    this.emit('init')

    const follow = function (target, option) {
      const words = document.querySelector(target);
      console.log(words);
      console.log(option.speed);
    
      document.querySelectorAll('.test').addEventListener('mouseenter', function () {
        this.emit('enterModel')
      })
    
      document.querySelector(option.target).addEventListener('mousemove', function (e) {
        // console.log(words);
    
        const x = e.clientX * 100 * option.speed / window.innerWidth;
        const y = e.clientY * 100 * option.speed / window.innerHeight;
        // words.style.left = -x * speed;
        // words.style.top = -y * speed;
        console.log(x, y);
    
        const offset = {
          height: div.offsetHeight / 2,
          width: div.offsetWidth / 2
        }
    
        if (option.fixed) {
          words.style.transform = `translate(${-x}%,${-y}%)`;
        }
        else {
          words.style.top = `${e.pageY - (option.centerMouse ? offset.height : 0)}px`;
          words.style.left = `${e.pageX - div.offsetWidth / 2}px`;
        }
    
        console.log(`translate(${-x}%,${-y}%)`);
      })
    }


    // console.log(speed);
    // console.log('123');
    // const speed = document.getAttribute('data-speed')
    // var balls = document.getElementsByClassName("pupil");
    // document.onmousemove = function(e){
    //   var x = e.clientX * 100 / window.innerWidth + "%";
    //   var y = e.clientY * 100 / window.innerHeight + "%";
    //   balls.style.left = x;
    //   balls.style.top = y;
    //   balls.style.transform = "translate(-"+x+",-"+y+")";
    // };

    // var words = document.getElementsByClassName("word");
    // document.addEventListener('mousemove', function(e) {
    //   var x = e.clientX * 100 / window.innerWidth + "%";
    //   var y = e.clientY * 100 / window.innerHeight + "%";

    //   words.style.left = -x * speed * 10;
    //   words.style.top = -y * speed * 10;
    //   words.style.transform = "translate(-"+x * i * 10+",-"+y * i * 10+")";
    // });
  };
};

Object.assign(Follow4.prototype, SHARED)


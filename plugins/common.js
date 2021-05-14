import Vue from 'vue'

window.addEventListener('scroll', function () {
  if (this.scrollY >= 100) {
    document.querySelector('.fixed-this').classList.add('fixed-header')
    document.querySelector('#scroll').style.display = 'block'
  } else {
    document.querySelector('.fixed-this').classList.remove('fixed-header')
    document.querySelector('#scroll').style.display = 'none'
  }
})

export default function ({ }) {
  Vue.mixin({
    methods: {
      goBack() {
        window.history.back()
      },
      counter(id, start, end, duration) {
        let s = '';
        if (end.toString().charAt(0) === '+') {
          s = '+';
          end = +end.substring(1);
        }
        let obj = document.getElementById(id),
          current = start,
          increment = end > start ? duration : -duration,
          timer = setInterval(() => {
            current += increment;
            current = Math.ceil(current);
            obj.textContent = s + current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            if (current == end) {
              clearInterval(timer);
            }
          }, 10);
      }
    },
  })
}

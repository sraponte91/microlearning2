window.addEventListener('scroll', function () {
  if (this.scrollY >= 100) {
    document.querySelector('.fixed-this').classList.add('fixed-header')
    document.querySelector('#scroll').style.display = 'block'
  } else {
    document.querySelector('.fixed-this').classList.remove('fixed-header')
    document.querySelector('#scroll').style.display = 'none'
  }
});

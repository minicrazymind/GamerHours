/// Init GLIDE for carousel slideshow
var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 2,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 1
    }
  }
})

glide.mount();

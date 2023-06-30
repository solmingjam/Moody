$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 700,
});
      

let left = document.querySelector('.slick-prev')
let right = document.querySelector('.slick-next')
console.log(left)
left.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
right.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
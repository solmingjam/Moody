let profileBtn = document.querySelector('#profile-change')
let profileBox = document.querySelector('.profile-img__box')
let prpfileBasic = document.querySelector('.img-profile__img')
let anger = document.querySelector('#anger')
let disgust = document.querySelector('#disgust')
let joy = document.querySelector('#joy')
let sadness = document.querySelector("#sadness")
let title = document.querySelector('.header__title')

let color = '#d6a8e9'

profileBtn.addEventListener('click', () => {
    profileBox.classList.remove('hidden')

})
//앵거를 클릭을하면 콘솔로그에 hi가 나오게 만들고싶다
anger.addEventListener('click',() => {
    profileBox.classList.add('hidden')
    let img = prpfileBasic.src = 'asset/profile_/anger.png'
    localStorage.setItem('img', img)
    color = 'red'
    title.style.color = color
    localStorage.setItem('color', color)
    location.reload()
})

disgust.addEventListener('click', ()=> {
    profileBox.classList.add('hidden')
    img = prpfileBasic.src = 'asset/profile_/disgust.png'
    localStorage.setItem('img', img)
    color = 'green'
    title.style.color = color
    localStorage.setItem('color', color)
    location.reload()
})

joy.addEventListener('click', () => {
    profileBox.classList.add('hidden')
    img = prpfileBasic.src = 'asset/profile_/joy.png'

    localStorage.setItem('img', img)
    color = 'yellow'
    title.style.color = color
    localStorage.setItem('color', color)
    location.reload()
})

sadness.addEventListener('click', () => {
    profileBox.classList.add('hidden')
    img = prpfileBasic.src = 'asset/profile_/sadness.png'
    localStorage.setItem('img', img)
    color = '#5592cd'
    title.style.color = color
    localStorage.setItem('color', color)
    location.reload()
})

let savedImg = localStorage.getItem('img')
console.log(savedImg)
if (savedImg === null) {
    prpfileBasic.src = 'asset/lala.gif'
} else {
    prpfileBasic.src = `${savedImg}`
}

let savedColor = localStorage.getItem('color')

if (savedImg === null) {
    title.style.color = color
} else {
    title.style.color = savedColor
}
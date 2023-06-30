let input = document.querySelector('.login__form__input')
let userName = document.querySelector('#username')
let loginBtn = document.querySelector('.login__form__button')
let loginModal = document.querySelector('.login')
let alert = document.querySelector('.alert')
let logout = document.querySelector('#logout')
let img = document.querySelector('.img-profile__img')
let ztitle = document.querySelector('.header__title')

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (input.value === "") {
        alert.innerText = `아이디를 입력해주세요.`
    } else {
        loginModal.classList.add('hidden')
        localStorage.setItem('username', input.value)
        userName.innerText = `${input.value}`
    }

})



let setUserName = localStorage.getItem('username')


if (setUserName === null) {
    loginModal.classList.remove('hidden')
} else {
    loginModal.classList.add('hidden')
    userName.innerText = `${setUserName}`
}

logout.addEventListener('click', () => {
    localStorage.removeItem('username')
    localStorage.removeItem('img')
    loginModal.classList.remove('hidden')
    location.reload()
    
})


// 인풋 값이 입력이 되면 username 바뀐다.
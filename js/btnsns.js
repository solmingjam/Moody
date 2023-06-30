let Twitter = document.querySelector('#Twitter')
let Instagram = document.querySelector('#Instagram')
let Kakao = document.querySelector('#Kakao')
let Tistroy = document.querySelector('#tistory')

Twitter.addEventListener('click',() => {
    window.location.href="https://twitter.com";
})

Instagram.addEventListener('click',() => {
    window.location.href="https://www.instagram.com";
})

Kakao.addEventListener('click',() => {
    window.location.href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstory.kakao.com%252Fs%252Foauth%26state%3Dhttps%253A%252F%252Fstory.kakao.com%252F%26through_account%3Dtrue%26client_id%3D2a8b2aa0dc2c4e9121bbd4b9bdb70bc1#login";
})

Tistroy.addEventListener('click',() => {
    window.location.href="https://leechi222.tistory.com/";
})
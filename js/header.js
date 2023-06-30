let profileImg = document.querySelector('.img-profile__img')
let dropdownMenu = document.querySelector('.header__profile__dropdown')
let main = document.querySelector('.main')
let hashTag = document.querySelector('.header__search')
let hashTagBox = document.querySelector('.header__hashtag')
let hashTags = document.querySelectorAll('.header__hashtag ul li')
let headerBack = document.querySelector('.header')
let scrollhead = document.querySelector('.header__nav__list--hastag')

scrollhead.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

 window.addEventListener('scroll', () => {
     if (scrollY > 100) {
         headerBack.style.backgroundColor = 'rgba(0,0,0,0.8)'
     }else if (screenY === 0) {
         headerBack.style.backgroundColor = 'rgba(0,0,0,0.1)'
     }
 });


profileImg.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
    hashTagBox.classList.add('hidden')
})

main.addEventListener('mouseover', () => {
    dropdownMenu.classList.add('hidden')
    hashTagBox.classList.add('hidden')
})


hashTag.addEventListener('click',()=>{
    hashTagBox.classList.toggle('hidden')
    dropdownMenu.classList.add('hidden')

})


let hashList1 = [
    {
        hashtag: '#자신감 업' 
    },
    {
        hashtag: '#난 이제 해방이야!' 
    },
    {
        hashtag: '#내꺼인 듯 내꺼 아닌 내꺼 같은 너' 
    }
]

let hashList2 = [
    {
        hashtag: '#나만 힘든거 아니지? ' 
    },
    {
        hashtag: '#난 ㄱㅏ끔 눈물을 흘린ㄷr' 
    },
    {
        hashtag: '#마음 따뜻해지는 힐링영화' 
    }
]

let hashList3 = [
    {
        hashtag: '#쟤는 왜 그러는거야?' 
    },
    {
        hashtag: '#본격 웃음치료 거침없는 b급영화' 
    },
    {
        hashtag: '#내 인생은 내가 선택할거야!' 
    }
]

let hashList4 = [
    {
        hashtag: '#답답하지만 꼭 필요한, 우리 사회 문제를 담은 영화' 
    },
    {
        hashtag: '#대리만족, 호탕한 액션영화' 
    },
    {
        hashtag: '#안녕히 계세요 여러분, 전 다른 세상으로 떠납니다' 
    }
]


console.log(savedImg)
if (savedImg === null) {
    
}

if (savedImg === 'asset/profile_/anger.png') {
    for (let i = 0; i < hashList1.length; i++){
    hashTags[i].innerText = `${hashList4[i].hashtag}`
    }
}

if (savedImg === 'asset/profile_/disgust.png') {
    for (let i = 0; i < hashList1.length; i++){
    hashTags[i].innerText = `${hashList3[i].hashtag}`
    }
}

if (savedImg === 'asset/profile_/joy.png') {
    for (let i = 0; i < hashList1.length; i++){
    hashTags[i].innerText = `${hashList1[i].hashtag}`
    }
}

if (savedImg === 'asset/profile_/sadness.png') {
    for (let i = 0; i < hashList1.length; i++){
    hashTags[i].innerText = `${hashList2[i].hashtag}`
    }
}



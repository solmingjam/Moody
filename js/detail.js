let infoBtn = document.querySelector('.main__buttons--info')




let detail = document.querySelector('.detail')

detail.addEventListener('click', (event) => {
    if (event.target === detail) {
        detail.classList.remove('visible')
    }
})

infoBtn.addEventListener('click', () => {
    detail.classList.add('visible')
})

let detailModal = document.createElement('div')
detailModal.classList.add('detail__modal')
detail.appendChild(detailModal)

let detailImg = document.createElement('img')
detailImg.src = 'asset/1.jpeg'
detailImg.classList.add('detail__modal--img')
detailModal.appendChild(detailImg)


let deleteBtn = document.createElement('i')
deleteBtn.classList.add('fa-regular', 'fa-circle-xmark', 'delete')
detailModal.appendChild(deleteBtn)


let detailBtn = document.createElement('button')
detailBtn.classList.add('detail__modal--button')
detailBtn.innerHTML = `<i class="fa-solid fa-play"></i> 재생`
detailModal.appendChild(detailBtn)

detailBtn.addEventListener('click', () => {
    
})



let heartIcon = document.createElement('button')

heartIcon.innerHTML = '<i class="fa-regular fa-heart"></i>'
heartIcon.classList.add('detail__modal--heart')
detailModal.appendChild(heartIcon)

let detailInfo = document.createElement('div')
detailInfo.classList.add('detail__info')
detailModal.appendChild(detailInfo)

let detailHeader = document.createElement('div')
detailHeader.classList.add('detail__info__header')          
detailInfo.appendChild(detailHeader)
// 여기서부터 제목 개봉일 추천 설명

let detailTitle = document.createElement('h1')
detailTitle.classList.add('detail__info--title')
detailTitle.innerText = '인사이드아웃'
detailHeader.appendChild(detailTitle)

let detailOpenDay = document.createElement('span')
detailOpenDay.classList.add('detail__info--open-year')
detailOpenDay.innerText = '2015'
detailHeader.appendChild(detailOpenDay)

let detailRecommend = document.createElement('h1')
detailRecommend.classList.add('detail__modal--recommend')
detailRecommend.innerHTML = `<i class="fa-regular fa-face-smile"></i> 혜빈's Pick`
detailInfo.appendChild(detailRecommend)

let detailDesc = document.createElement('p')
detailDesc.classList.add('detail__modal--desc')
detailDesc.innerText = '하키를 좋아하는 11살 소녀 라일리는 행복한 삶을 살고 있다. 그러나 부모님과 함께 샌프란시스코로 이사하면서 그녀의 삶은 완전히 뒤바뀐다. 기쁨은 이런 큰 변화 속에서 라일리의 감정을 잘 다스리려고 노력한다. 그러나, 이사로 인한 스트레스로 슬픔이 나타나고 만다. 라일리의 기분을 위해 고군분투하던 기쁨과 슬픔은 먼 곳에 떨어져 버리고 결국 라일리의 감정 컨트롤 본부에는 악감정만이 남게 된다.'
detailInfo.appendChild(detailDesc)


let count = 0
heartIcon.addEventListener('click', () => {
    count++
    console.log(count)
    if(count % 2 === 1) heartIcon.innerHTML = '<i class="fa-solid fa-heart"></i>'
    else heartIcon.innerHTML = '<i class="fa-regular fa-heart"></i>'
    console.log('hi')
})

deleteBtn.addEventListener('click', () => {
    detail.classList.remove('visible')
})

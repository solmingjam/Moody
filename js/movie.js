let autoplay = document.querySelector('.autoplay');
let posters = document.querySelectorAll('.movie__poster img');
let movieTitle = document.querySelector('.movie__title');
let mainImg = document.querySelector('.main__main-img');
let video = document.querySelector('.video');
let videoVideo = document.createElement('video');
let videoBtn = document.createElement('button')
let playBtn = document.querySelector('.main__buttons--play')
// let hashBox = document.querySelectorAll('#hashBox li')



videoVideo.classList.add('video__video')
videoBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
videoBtn.classList.add('video__button')
video.appendChild(videoVideo)
video.appendChild(videoBtn)
videoVideo.setAttribute('controls', '');
videoVideo.src = 'asset/main.mp4';




let data;
const getData = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'db.json', false);
    request.send();
    console.log(request.status);
    if (request.status === 200) {
        data = JSON.parse(request.responseText);
        console.log(data);
    }
};

getData();
console.log(data);

let sadnessData = data[1].sadness;
let disgustData = data[2].disgust;
let angerData = data[3].anger;
let joyData = data[0].joy;

let categoryData;

if (savedImg === 'asset/profile_/anger.png') {
    movieTitle.innerHTML = '버럭이';
    categoryData = angerData;
} else if (savedImg === 'asset/profile_/disgust.png') {
    movieTitle.innerHTML = '까칠이';
    categoryData = disgustData;
} else if (savedImg === 'asset/profile_/joy.png') {
    movieTitle.innerHTML = '기쁨이';
    categoryData = joyData;
} else if (savedImg === 'asset/profile_/sadness.png') {
    movieTitle.innerHTML = '슬픔이';
    categoryData = sadnessData;
} else if(savedImg === null){
    // savedImg에 해당하는 이미지가 없는 경우 기본값으로 설정할 작업을 수행합니다.
    movieTitle.innerHTML = '';
    categoryData;
    

}

if (categoryData) {
    for (let i = 0; i < categoryData.length; i++) {
        let poster = document.createElement('div');
        poster.classList.add('movie__poster');
        let posterImg = document.createElement('img');
        posterImg.src = `${categoryData[i].movie_posterLikg}`;
        posterImg.alt = `${categoryData[i].movie_hashTag}`
        poster.appendChild(posterImg);
        autoplay.appendChild(poster);
        videoVideo.classList.add('video__video')
        videoBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
        videoBtn.classList.add('video__button')
        video.appendChild(videoVideo)
        video.appendChild(videoBtn)
        videoVideo.setAttribute('controls', '');
        
    }

    let posterImg = document.querySelectorAll('.movie__poster img');
    let mainTitle = document.querySelector('.main__info--title');
    let mainDesc = document.querySelector('.main__info--desc');

    for (let i = 0; i < categoryData.length; i++) {
        posterImg[i].addEventListener('click', () => {
            mainTitle.innerHTML = categoryData[i].movie_title;
            mainDesc.innerHTML = categoryData[i].movie_eva;
            mainImg.src = categoryData[i].movie_imgLing;
            detailTitle.innerHTML = categoryData[i].movie_title;
            detailOpenDay.innerHTML = categoryData[i].movie_openDay;
            detailRecommend.innerHTML = categoryData[i].recommend;
            detailDesc.innerHTML = categoryData[i].movie_info;
            detailImg.src = categoryData[i].movie_imgLing;
            detailRecommend.innerHTML = categoryData[i].movie_hashTag;
            videoVideo.src = categoryData[i].movie_link;
        });
    }
}





videoBtn.addEventListener('click', () => {
    video.classList.remove('visible')
})



playBtn.addEventListener('click', () => {
    
    video.classList.add('visible')
})


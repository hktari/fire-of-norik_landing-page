const videoList = document.getElementsByTagName('video')
const audioList = document.getElementsByTagName('audio')
const loadingInd = document.getElementById('loadingIndicator')
const page = document.getElementById('pageRoot')

window.addEventListener("load", (event) => {
    console.log('loaded !')
    loadingInd.style.display = 'none';

    for (const audio of audioList) {
        audio.autoplay = true;
    }

    for (const video of videoList) {
        video.autoplay = true;
    }


    page.classList.remove('c-page--no-scroll');
});

console.log('done')
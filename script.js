const videoList = document.getElementsByTagName('video')
const audioList = document.getElementsByTagName('audio')
const loadingInd = document.getElementById('loadingIndicator')
const page = document.getElementById('pageRoot')

window.addEventListener("load", (event) => {
    console.log('loaded !')
    loadingInd.style.display = 'none';

    for (const audio of audioList) {
        audio.autoplay = true;
        audio.play()
    }

    for (const video of videoList) {
        video.autoplay = true;
        video.play()
    }


    page.classList.remove('c-page--no-scroll');
});


/* ----------------------- toggle logic for flip cards ---------------------- */

const flipCards = document.getElementsByClassName('c-flip-card')
// Large devices (desktops, 992px and up)
const desktopShowDetailsBreakpoint = 992;

for (const card of flipCards) {
    card.addEventListener('click', flipCardClickEventHandler)

    card.addEventListener('mouseenter', () => {
        toggleFlipCardDetails(card, true)


    })
    card.addEventListener('mouseleave', () => {
        toggleFlipCardDetails(card, false)
    })
}

function flipCardClickEventHandler(ev) {
    // don't handle click events no desktop
    if (window.innerWidth < desktopShowDetailsBreakpoint) {

        for (const card of flipCards) {
            // hide all, show current
            toggleFlipCardDetails(card, card === ev.target)
        }
    }
}

function toggleFlipCardDetails(flipCard, forceShowDetails = undefined) {
    flipCard.classList.toggle('c-flip-card--show-details', forceShowDetails)
}
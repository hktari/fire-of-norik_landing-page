const page = document.getElementById('pageRoot')

function setPageScrollEnabled(enabled) {
    if (enabled) {
        page.classList.remove('c-page--no-scroll');
    } else {
        page.classList.add('c-page--no-scroll');
    }
}

/* ------------------------------- navigation ------------------------------- */

const sideMenu = document.getElementById('sideMenu')
const openSideMenuBtn = document.getElementById('openSideMenuBtn')
const closeSideMenuBtn = document.getElementById('closeSideMenuBtn')


function setShowSideMenu(show) {
    if (show) {
        sideMenu.classList.add('show')
        setPageScrollEnabled(false)
    } else {
        sideMenu.classList.remove('show')
        setPageScrollEnabled(true)
    }

}

openSideMenuBtn.addEventListener('click', () => setShowSideMenu(true))
closeSideMenuBtn.addEventListener('click', () => setShowSideMenu(false))

const sideMenuLinks = sideMenu.querySelectorAll('a')
for (const link of sideMenuLinks) {
    link.addEventListener('click', () => setShowSideMenu(false))
}


/* --------------------------------- loading -------------------------------- */

const videoList = document.getElementsByTagName('video')
const audioList = document.getElementsByTagName('audio')
const loadingInd = document.getElementById('loadingIndicator')

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

    setPageScrollEnabled(true)
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
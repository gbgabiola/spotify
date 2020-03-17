// Javascript template
let images;
let loadedImage = 0;
const main = document.querySelector('#main');
const bgImage = document.querySelector('#bgImage');
const female = document.querySelector('.female');
const headline1 = document.querySelector('.headline1');
const headline2 = document.querySelector('.headline2');
const subheadline = document.querySelector('.subheadline');
const btn = document.querySelector('.btn');
const logo = document.querySelector('.logo');
const replay = document.querySelector('.replay');

const frame1 = document.querySelector('.frame1');
const frame2 = document.querySelector('.frame2');

function preload() {
  // list images needed from the assets folder
  images = [
    '../images/background.jpg',
    '../images/female.png',
    '../images/headline1.png',
    '../images/headline2.png',
    '../images/subheadline.png',
    '../images/button.png',
    '../images/logo.png',
    '../images/replay.png',
  ];

  for (let i = 0; i < images.length; i++) {
    const imageObj = new Image();
    imageObj.src = images[i];
    imageObj.addEventListener('load', iLoad, false);
  }
}

function iLoad() {
  loadedImage++;
  if (images.length === loadedImage) {
    // set the background for each div by calling the images declared on the array
    bgImage.style.backgroundImage = `url('${images[0]}')`;
    female.style.backgroundImage = `url('${images[1]}')`;
    headline1.style.backgroundImage = `url('${images[2]}')`;
    headline2.style.backgroundImage = `url('${images[3]}')`;
    subheadline.style.backgroundImage = `url('${images[4]}')`;
    btn.style.backgroundImage = `url('${images[5]}')`;
    logo.style.backgroundImage = `url('${images[6]}')`;
    replay.style.backgroundImage = `url('${images[7]}')`;

    init();
    startAnim();
  }
}

function init() {
  main.style.visibility = 'visible';
}

// image preload function should be called upon banner load.

function startAnim() {
  frame1.style.visibility = 'visible';
  bgImage.style.opacity = 1;
  female.style.opacity = 1;
  headline1.style.opacity = 1;
  headline1.style.transform = 'translateX(0%)';

  // Frame 1 animations
  setTimeout(() => {
    headline1.style.transition = 'transform 1s linear 0s';
    female.style.transition = 'opacity 1s linear 0s';

    setTimeout(() => {
      headline1.style.opacity = 0;
      startFrame2Animations();
    }, 1000);

    headline1.style.transform = 'translateX(-100%)';
    female.style.opacity = 0;
  }, 3000);
}

// Frame 2 animations
function startFrame2Animations() {
  frame1.style.visibility = 'hidden';
  frame2.style.visibility = 'visible';
  headline2.style.opacity = 1;
  subheadline.style.opacity = 1;
  btn.style.opacity = 1;
  logo.style.opacity = 1;
  logo.style.transform = 'translateX(0%)';
  replay.style.opacity = 1;
  replay.addEventListener('click', replayEvent);
}

function replayEvent() {
  // Reset first
  frame1.style.visibility = 'hidden';
  frame2.style.visibility = 'hidden';
  headline2.style.opacity = 0;
  subheadline.style.opacity = 0;
  btn.style.opacity = 0;
  logo.style.opacity = 0;
  logo.style.transform = 'translateX(100%)';
  replay.style.opacity = 0;

  // Start animation again
  startAnim();
}

preload();

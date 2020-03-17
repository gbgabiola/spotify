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
    // setTimeout

    init();
    startAnim();
  }
}

function init() {
  main.style.visibility = 'visible';
}

// image preload function should be called upon banner load.

function startAnim() {
  bgImage.style.opacity = 1;
  female.style.opacity = 1;
  headline1.style.opacity = 1;
  headline2.style.opacity = 1;
}

preload();

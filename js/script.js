// Javascript template

var images,
    loadedImage = 0;

function preload() {
    images = new Array(


        // list images needed from the assets folder


    );

    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)
    }
}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {

        // set the background for each div by calling the images declared on the array

        init();
    }
}

function init() {
    main.style.visibility = "visible";
}

// image preload function should be called upon banner load.

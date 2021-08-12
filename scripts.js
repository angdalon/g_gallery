document.onkeydown = checkKey;

/*
let injectThisPic = (imageName) => {
    let img = new Image();
    img.src = imageName;
    $('#fortest').append(img);
};

injectThisPic('/images/1 - Ishgard.jpg')

*/
/*
let addPic = (imageLocation) => {
    $('#fortest').append('<img src=' + imageLocation + ' class="thumbnailSize" >')
}
*/
//addPic('/images/1_Ishgard.jpg')


/*
let imgData = {
    picture: 'images/1_Ishgard.jpg',
    title: 'Ishgard',
    description: "In the central region of Abalathia's Spine, that great mountain range that spans Aldenard from east to west, can be found the forbidding highlands of Coerthas and the Holy See of Ishgard"
};
*/


//$('#photo').attr('src', imgData.picture);


let galleryDB = {
    ishgard: {
        picture: 'images/1_Ishgard.jpg',
        title: 'Ishgard', 
        description: "In the central region of Abalathia's Spine, that great mountain range that spans Aldenard from east to west, can be found the forbidding highlands of Coerthas and the Holy See of Ishgard"
    },
    gridania: {
        picture: 'images/2_Gridania.jpg',
        title: 'Gridania',
        description: 'In the eastern reaches of the Aldenard landmass, home to vast, dense woodlands and coursing rivers, lies the forest nation of Gridania.'
    },
    limsa: {
        picture: 'images/3_Limsa.jpg',
        title: 'Limsa',
        description: 'On the southern coast of the island of Vylbrand, under the shadow of ancient cliffs worn by the relentless onslaught of the Rhotano Sea, lies the marine city-state of Limsa Lominsa.'
    },
    uldah: {
        picture: 'images/4_Uldah.jpg',
        title: "Ul'dah",
        description: "The bustling commercial hub of Ul'dah sits amid the desolate desert landscape of southern Aldenard. The city is organized strategically around the dome-shaped citadel at its center."
    },
    midgardsormr: {
        picture: 'images/5_Midgardsormr.jpg',
        title: 'Midgardsormr',
        description: 'The Father of Dragons, Midgardsormr is said to have come to Hydaelyn at the beginning of time. Yet, fundamental questions such as exactly when and whence remain unanswered, throwing the legends into doubt.'
    },
    ta: {
        picture: 'images/16.jpg',
        title: 'Title 16',
        description: 'Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes.'
    },
    te: {
        picture: 'images/17.jpg',
        title: 'Title 17',
        description: 'Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes.'
    },
    ti: {
        picture: 'images/18.jpg',
        title: 'Title 18',
        description: 'Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes.'
    },
    to: {
        picture: 'images/19.jpg',
        title: 'Title 19',
        description: 'Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes.'
    },
    tu: {
        picture: 'images/20.jpg',
        title: 'Title 20',
        description: 'Random text for testing purposes. Random text for testing purposes. Random text for testing purposes. Random text for testing purposes.'
    },
};


/*
$('#currentPicture').attr('src', galleryDB.ishgard.picture);
$('#currentTitle').text(galleryDB.ishgard.title);
$('#currentDescription').text(galleryDB.ishgard.description);
*/

/*
$('#currentPicture').attr('src', imagesData[currentPicIndex].picture);
$('#currentTitle').text(imagesData[currentPicIndex].title);
$('#currentDescription').text(imagesData[currentPicIndex].description);
*/



let imagesData = [galleryDB.ishgard, galleryDB.gridania, galleryDB.limsa, galleryDB.uldah, galleryDB.midgardsormr, galleryDB.ta, galleryDB.te, galleryDB.ti, galleryDB.to, galleryDB.tu];
let currentPicIndex= 0;


let highlightThis = (numbr) => {    
    $('#tbID_' + numbr).focus();    // highlight the thumbnail
};

let loadPhoto = (picNumber) => {
    $('#currentPicture').attr('src', imagesData[picNumber].picture);
    $('#currentTitle').text(imagesData[picNumber].title);
    $('#currentDescription').text(imagesData[picNumber].description);
    highlightThis(currentPicIndex);
};




loadPhoto(currentPicIndex); // loads first image automatically

$('#forwardButton').on('click', () => {
    if (currentPicIndex < imagesData.length - 1) {  // works without tweaking even if more objects are added to galleryDB
        currentPicIndex = currentPicIndex + 1; // or simply currentPicIndex++;
        loadPhoto(currentPicIndex)};
});

$('#backwardButton').on('click', () => {
    if (currentPicIndex > 0) {
        currentPicIndex = currentPicIndex - 1;
        loadPhoto(currentPicIndex);}
});


let gDB = Object.values(imagesData)

let i = -1;
gDB.forEach((obj) => {
    i = i+1
    $('#thumbnailBar').append('<div id="thumbnailsHere"><button class="thumbnailButton" id=tbID_' + i + '> <img data-number=' + i + ' src=' + obj.picture + ' class="thumbnailPic" </button> <span class="bubble">' + obj.title + '</span> </div>');

    // adds thumbnail buttons with ID to the nav bar and give data-number to images inside
});


$('.thumbnailPic').on('click', (event) => {
    let thumbnailClicked = $(event.target).attr('data-number');
    let numberIndex = parseInt(thumbnailClicked);
    currentPicIndex = numberIndex;
    loadPhoto(currentPicIndex);
})


function checkKey(e) {         // navigation with left and right keys
    e = e || window.event;

    if (e.keyCode == '37') {
        $('#backwardButton').trigger('click');
       // left arrow
    }
    else if (e.keyCode == '39') {
        $('#forwardButton').trigger('click');
       // right arrow
    }
}


/*
let highlightThis = (picNumber) => {
    $('#thumbnailPic').append(img);
};
*/
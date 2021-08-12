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
        picture: 'images/1.jpg',
        title: 'Ishgard', 
        description: "In the central region of Abalathia's Spine, that great mountain range that spans Aldenard from east to west, can be found the forbidding highlands of Coerthas and the Holy See of Ishgard"
    },
    gridania: {
        picture: 'images/2.jpg',
        title: 'Gridania',
        description: 'In the eastern reaches of the Aldenard landmass, home to vast, dense woodlands and coursing rivers, lies the forest nation of Gridania.'
    },
    limsa: {
        picture: 'images/3.jpg',
        title: 'Limsa',
        description: 'On the southern coast of the island of Vylbrand, under the shadow of ancient cliffs worn by the relentless onslaught of the Rhotano Sea, lies the marine city-state of Limsa Lominsa.'
    },
    uldah: {
        picture: 'images/4.jpg',
        title: "Ul'dah",
        description: "The bustling commercial hub of Ul'dah sits amid the desolate desert landscape of southern Aldenard. The city is organized strategically around the dome-shaped citadel at its center."
    },
    midgardsormr: {
        picture: 'images/5.jpg',
        title: 'Midgardsormr',
        description: 'The Father of Dragons, Midgardsormr is said to have come to Hydaelyn at the beginning of time. Yet, fundamental questions such as exactly when and whence remain unanswered, throwing the legends into doubt.'
    },
    il_mheg: {
        picture: 'images/16.jpg',
        title: 'Il Mheg',
        description: 'Not so long ago, here in the shadow of the northern ranges, lay the great Kingdom of Voeburt. A nation with a proud history...that the sin eaters cut short.'
    },
    raktika: {
        picture: 'images/17.jpg',
        title: "Rak'tika Greatwood",
        description: "A forest home to the Night's Blessed – a faction of people who revere the dark, and the remnants of the ancient ruins of Ronka."
    },
    amaurot: {
        picture: 'images/18.jpg',
        title: 'Amaurot',
        description: 'The greatest city in the original world of the Ancients, later destroyed due to a calamitous event involving wild creation magicks.'
    },
    crystarium: {
        picture: 'images/19.jpg',
        title: 'Crystarium',
        description: 'A bustling city that developed around the Crystal Tower in the years following its sudden appearance in Lakeland. It serves as a safe haven for people of all races and creeds.'
    },
    eulmore: {
        picture: 'images/20.jpg',
        title: 'Eulmore',
        description: 'With its influence extending across the majority of the isle of Kholusia, this powerful military nation once stood firm against the onslaught of the sin eaters. '
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



let imagesData = [galleryDB.ishgard, galleryDB.gridania, galleryDB.limsa, galleryDB.uldah, galleryDB.midgardsormr, galleryDB.il_mheg, galleryDB.raktika, galleryDB.amaurot, galleryDB.crystarium, galleryDB.eulmore];
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
        loadPhoto(currentPicIndex)
    } else if (currentPicIndex = imagesData.length) {       // from last goes to first image instead of being stuck
        currentPicIndex = 0;
        loadPhoto(currentPicIndex)};
});


$('#backwardButton').on('click', () => {
    if (currentPicIndex > 0) {  
        currentPicIndex = currentPicIndex - 1;
        loadPhoto(currentPicIndex)
    } else if (currentPicIndex = 1) {
        currentPicIndex = imagesData.length -1;     //from first goes to last image instead of being stuck
        loadPhoto(currentPicIndex)};
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
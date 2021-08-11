/*
let injectThisPic = (imageName) => {
    let img = new Image();
    img.src = imageName;
    $('#fortest').append(img);
};

injectThisPic('/images/1 - Ishgard.jpg')

*/

let addPic = (imageLocation) => {
    $('#fortest').append('<img src=' + imageLocation + ' class="thumbnailSize" >')
}

//addPic('/images/1_Ishgard.jpg')
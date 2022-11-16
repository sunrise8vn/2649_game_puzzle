let imgFolder = 'images';

let imgArr = [];

function initImageArray() {
    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= 5; k++) {
            let str1 = 'funny-cat1_part' + i + 'x1.jpg';
            let str2 = 'monkey_part' + i + 'x1.jpg';
            let str3 = 'panda_swap_part' + i + 'x1.jpg';
            let arr = [str1, str2, str3];
            imgArr.push(arr);
        }
    }
}

function loadImage() {
    for (let i = 1; i <= 5; i++) {
        let strImg = 'img' + i;
        let img = document.getElementById(strImg);
        let num = randomNum(0, 3);
        img.src = imgFolder + '/' + imgArr[i - 1][num];
    }
}


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function changeImage(i) {
    let str = 'img' + i;

    let img = document.getElementById(str).src;

    alert(img);
}

initImageArray();

loadImage();
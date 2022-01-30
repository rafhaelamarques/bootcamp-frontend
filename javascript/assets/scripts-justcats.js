const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const BASE_URL = ' https://api.thecatapi.com/v1/images/search';

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};


const loadImg = async() => {
    catImg = document.getElementById('img')[0];
    catImg.src = await getCats();
}

loadImg();

var catBtn = document.getElementById('btn');
catBtn.addEventListener('click', loadImg);
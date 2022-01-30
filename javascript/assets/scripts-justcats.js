const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const getCat = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};


const loadImg = async() => {
    const catImg = document.getElementById('img')[0];
    catImg.src = await getCat();
};

loadImg();

var catBtn = document.getElementById('btn');
catBtn.addEventListener('click', loadImg);
// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

loadImg();

getCat = async() => {
    try {
        data = await fetch(BASE_URL);
        json = await data.json();
        return json.url;
    } catch (e) {
        console.log(e.message);
    }
};


loadImg = async() => {
    catImg = document.getElementById('img');
    catImg.src = await getCat();
};

var catBtn = document.getElementById('btn');
catBtn.addEventListener('click', loadImg);
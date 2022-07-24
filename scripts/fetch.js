const apiUrl = "https://api.jikan.moe/v3/anime/1";

const searchAnime = () =>{

    const form = new FormData(this);
    const query = form.get("search_Input");

    fetch(`${apiUrl}/search/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.warn(err.message))
}

const pageLoaded = () =>{
    const form = document.getElementById('search_Input');
    form.addEventListener("submit", searchAnime);
};

window.addEventListener("load", pageLoaded);
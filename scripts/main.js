class Anime{
    constructor(titulo, portada, descripcion, animacion, genero, url){
        this.titulo = titulo.toLowerCase();
        this.portada = portada;
        this.descripcion = descripcion;
        this.animacion = animacion;
        this.genero = genero;
        this.url = url;
    }
};

// const animes = [new Anime("Dragon Ball Super", "./media/imgs/portada_dbs.jpg", "La serie se desarrollara en la tierra, tiempo después de la lucha terrible contra Majin Buu. Por órdenes de Milk, Goku trabaja fuertemente todos los días en la agricultura. Sin embargo también tiene algunos momentos para entrenar.", "Toei Animation", "Shonen", "./media/video/trailer_dbs.mp4"),
//                 new Anime("Naruto Shippuden", "./media/imgs/portada_narutoshippuden.jpg", "Pasan dos años después de que Naruto y Sakura se fueran a entrenar cada uno con su maestro sannin, en este caso, Naruto se fue con Jiraya y Sakura con Tsunade. Ya tienen 14 años y son unos geniales ninjas.", "Studio Pierrot", "Shonen", "./media/video/trailer_narutoshipp.mp4"),
//                 new Anime("Komi-san wa, Comyushou desu", "./media/imgs/portada_komisan.jpg", "Es el primer día de Shouko Komi en la prestigiosa escuela secundaria privada Itan, y ya ha alcanzado el estatus de Madonna de la escuela. Con el pelo largo y negro y una apariencia alta y elegante, capta la atención de cualquiera que se cruce con ella. Sin embargo, solo hay un problema: a pesar de su popularidad, Shouko es terrible para comunicarse con los demás.", "OLM", "Comedia", "./media/video/trailer_komisan.mp4")];
// localStorage.setItem("animes",JSON.stringify(animes));
const animes = JSON.parse(localStorage.getItem("animes"));
// console.log(animes);

const animesCont = document.getElementById("contenedorDeAnimes");

const searchNotification = (text) =>{
    Toastify({
        text: text,
        duration:1500,
    }).showToast();
}

function mostrarAnimes(animes){
    animesCont.innerHTML = "";
    // animesCont.classList.add("");
    animes.forEach(anime=> {
        const divAnime = document.createElement("div");
        divAnime.innerHTML = `
            <img class="portadas" src="${anime.portada}" alt="${anime.titulo}">
            <h3>${anime.titulo}</h3>
            <a href="${anime.url}" class="">Ver anime</a>
            `;
        animesCont.appendChild(divAnime);
        })
};

mostrarAnimes(animes);

const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

const search =  () =>{
    // console.log(searchInput.value);
    animesCont.innerHTML = "";
    let inputValue = searchInput.value.toLowerCase();
    animes.forEach(anime =>{
        const animeTitle = anime.titulo;
        if(animeTitle.indexOf(inputValue) !== -1){
            animesCont.innerHTML = "";
            const divAnime = document.createElement("div");
            divAnime.innerHTML = `
                <img class="portadas" src="${anime.portada}" alt="${anime.titulo}">
                <h3>${anime.titulo}</h3>
                <a href="${anime.url}" id="watchAnime" class="">Ver anime</a>
                `;
            animesCont.appendChild(divAnime);
            searchNotification(`Mostrando ${anime.titulo}`);
            if (inputValue === ""){
                searchNotification("Ingrese un nombre de anime...");
                mostrarAnimes(animes);
            }
        }
    })
    if(animesCont.innerHTML === ""){
        searchNotification("Lo siento, todavia no contamos con ese anime T.T");
    }
};

searchButton.addEventListener("click", search);
// searchInput.addEventListener("keyup", search);
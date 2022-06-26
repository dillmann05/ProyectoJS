class Anime{
    constructor(titulo, portada, descripcion, animacion, genero, url){
        this.titulo = titulo;
        this.portada = portada;
        this.descripcion = descripcion;
        this.animacion = animacion;
        this.genero = genero;
        this.url = url;
    }
};

const animes = [new Anime("Dragon Ball Super", "./media/imgs/portada_dbs.jpg", "La serie se desarrollara en la tierra, tiempo después de la lucha terrible contra Majin Buu. Por órdenes de Milk, Goku trabaja fuertemente todos los días en la agricultura. Sin embargo también tiene algunos momentos para entrenar.", "Toei Animation", "Shonen", "https://jkanime.net/dragon-ball-super/1/"),
                new Anime("Naruto Shippuden", "./media/imgs/portada_narutoshippuden.jpg", "Pasan dos años después de que Naruto y Sakura se fueran a entrenar cada uno con su maestro sannin, en este caso, Naruto se fue con Jiraya y Sakura con Tsunade. Ya tienen 14 años y son unos geniales ninjas.", "Studio Pierrot", "Shonen", "https://jkanime.net/naruto-shippuden/1/"),
                new Anime("Komi-san wa, Comyushou desu.", "./media/imgs/portada_komisan.jpg", "Es el primer día de Shouko Komi en la prestigiosa escuela secundaria privada Itan, y ya ha alcanzado el estatus de Madonna de la escuela. Con el pelo largo y negro y una apariencia alta y elegante, capta la atención de cualquiera que se cruce con ella. Sin embargo, solo hay un problema: a pesar de su popularidad, Shouko es terrible para comunicarse con los demás.", "OLM", "Comedia", "https://jkanime.net/komi-san-wa-comyushou-desu/1/")];

function mostrarAnimes(animes){
    const animesCont = document.getElementById("contenedorDeAnimes");
    animesCont.innerHTML = "";
    animesCont.classList.add("d-flex");
    animes.forEach(anime=> {
        const divAnime = document.createElement("div");
        divAnime.innerHTML = `
        <img class="portadas" src="${anime.portada}" alt="${anime.titulo}">
        <h3>${anime.titulo}</h3>
        <a href="${anime.url}" class="btn btn-danger mx-auto">Ver anime</a>
        `;
        animesCont.appendChild(divAnime);
    })
};

mostrarAnimes(animes);
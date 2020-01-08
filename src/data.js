const bestFilm = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt2584384", "tt6751668", "tt3281548", "tt7286456", "tt8637428", "tt3224458"]
const bestAnimatedFilm = ["tt1979376", "tt4520988", "tt2386490", "tt9426210", "tt9806192", "tt4729430"]
const bestForeignFilm = ["tt6751668", "tt8291806", "tt10199590", "tt7921248", "tt6062774", "tt10199640"]
const bestDirector = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt6751668"]
const bestActor = ["tt7653254", "tt7286456", "tt2066051", "tt8291806"]
const bestActrees = ["tt7653254", "tt3281548", "tt6394270", "tt7549996"]
const bestSupportingActrees = ["tt7653254", "tt3281548", "tt8637428", "tt6394270"]
const bestSupportingActor = ["tt1302006", "tt7131622", "tt3224458", "tt8404614"]
const sectionMovies = document.getElementById("movies");

function movieCard(data) {
    sectionMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <h3>${data.Title}</h3>
        <p>${data.Genre}</p>
        <button id="star">✩</button>
        <img class="imgActor" src="${data.Poster}" alt="poster"></img>
      </div>
    </div>`
}

function bestMovie() {
    sectionMovies.innerHTML=""
    bestFilm.forEach(element => {
        fetch(`http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
            const movies = data
            movieCard(movies)
        })  
    })
}

function animatedMovie() {
    sectionMovies.innerHTML=""
    bestAnimatedFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
            const movies = data
            movieCard(movies)            
        });
    });
}

function foreignFilm() {
    sectionMovies.innerHTML=""
    bestForeignFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
            const movies = data
            movieCard(movies)
        })
    })
}

function director() {
    sectionMovies.innerHTML=""
    bestDirector.forEach(element => {
    fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => { 
        const movies = data
          sectionMovies.innerHTML +=
          `<div class="wrap">
          <div class="tarjetaActors">
              <h4>${data.Title}</h4>
              <p>${data.Genre}</p>
              <img class="imgActor" src="${data.Poster}" alt="poster"></img>
              <button id="star">✩</button>
              <h3>${data.Director}</h3>
          </div>
          </div>`
        })
    })
}
function actor() {
    sectionMovies.innerHTML=""
    bestActor.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
            const movies = data
            movieCard(movies)            
        })        
    })
}

function actrees() {
    sectionMovies.innerHTML=""
    bestActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function supportingActrees() {
    sectionMovies.innerHTML=""
    bestSupportingActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function supportingActor() {
    sectionMovies.innerHTML=""
    bestSupportingActor.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}
export {bestMovie, animatedMovie, foreignFilm, director, actor, actrees, supportingActrees, supportingActor}
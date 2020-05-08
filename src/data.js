const bestFilm = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt2584384", "tt6751668", "tt3281548", "tt7286456", "tt8637428", "tt3224458"]
const bestAnimatedFilm = ["tt1979376", "tt4520988", "tt2386490", "tt9426210", "tt9806192", "tt4729430"]
const bestForeignFilm = ["tt6751668", "tt8291806", "tt10199590", "tt7921248", "tt6062774", "tt10199640"]
const bestDirector = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt6751668"]
const bestActor = ["tt7653254", "tt7286456", "tt2066051", "tt8291806"]
const bestActrees = ["tt7653254", "tt3281548", "tt6394270", "tt7549996"]
const bestSupportingActrees = ["tt7653254", "tt3281548", "tt8637428", "tt6394270"]
const bestSupportingActor = ["tt1302006", "tt7131622", "tt3224458", "tt8404614"]
const buttonMovies = document.getElementById("buttonMovies")
const containerMovies = document.getElementById("allNominees");
const btnSiguiente = document.getElementById("siguiente");

const cardMovies = (data, id) => { 
  buttonMovies.style.display = "none"
  containerMovies.innerHTML +=
    `<div class="col s4 m3">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src=${data.Poster}>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${data.Title.slice(0, 24)}
          <i class="material-icons right">more_vert</i>
          </span>
          <a id="star" value=${data.Title} class="waves-effect waves-light yellow black-text btn">Choose Me!</a>
        </div>
        <div class="card-reveal">
          <span id="indCard" class="card-title grey-text text-darken-4">${data.Title}<i class="material-icons right">close</i></span>
          <p>${data.Plot}</p>
        </div>
      </div>
    </div>     
  `
  let btnStar = document.querySelectorAll("#star")
  btnStar.forEach((item) => {
    console.log(item)
    item.addEventListener('click', (e) => {
    console.log(e)
    let movieTitle = document.getElementById("indCard").textContent      
    let selectTitle = document.getElementById(id)
    selectTitle.innerHTML = movieTitle.substring(0, movieTitle.length - 5)
  }) 
  })            
}

function bestActorCard (data){
    if (data === "tt7653254"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/adam-driver-img.jpg" value="Adam Driver" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt7286456"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/joaquin-phoenix-img.jpg" value="Joaquin Phoenix" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt2066051"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/taron-egerton-img.jpg" value="Taron Egerton" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt8291806"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/antonio-banderas-img.jpg" value="Antonio Banderas" alt="poster"></img>
      </div>
    </div>`
    }     
}

function pageOne(){
  buttonMovies.style.display = "block"  
  btnSiguiente.style.display = "none"
  containerMovies.innerHTML = ''
}

function bestMovie() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne);
    bestFilm.forEach(element => {
        fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => cardMovies(data, 'winnerBestMovie'))
    })
}

function animatedMovie() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestAnimatedFilm.map(element => {
        fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => cardMovies(data, "winnerAnimatedMovie"))
    });
}

function foreignFilm() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestForeignFilm.forEach(element => {
        fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => cardMovies(data, "winnerForeignMovie"))
    })
}

function director() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestDirector.forEach(element => {
    fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => cardMovies(data, "winnerDirector"))
    })
}
function actor() {
  containerMovies.innerHTML=""
  btnSiguiente.style.display = "flex"
  btnSiguiente.addEventListener('click', pageOne)
  bestActor.forEach(element => {
    fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
      .then(res => res.json())
      .then(data => cardMovies(data, "winnerBestActor"))             
  })
}

function actrees() {
  containerMovies.innerHTML=""
  btnSiguiente.style.display = "flex"
  btnSiguiente.addEventListener('click', pageOne)
  bestActrees.forEach(element => {
        fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => cardMovies(data, "winnerBestActress"))
    })
}
function supportingActrees() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestSupportingActrees.forEach(element => {
        fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => cardMovies(data, "winnerSupportActress"))
    })
}
function supportingActor() {
  containerMovies.innerHTML=""
  btnSiguiente.style.display = "flex"
  btnSiguiente.addEventListener('click', pageOne)
  bestSupportingActor.forEach(element => {
    fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => cardMovies(data, "winnerSupportActor"))
  })
}
export {bestMovie, animatedMovie, foreignFilm, director, actor, actrees, supportingActrees, supportingActor}

// imdbID
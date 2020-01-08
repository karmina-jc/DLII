const bestFilm = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt2584384", "tt6751668", "tt3281548", "tt7286456", "tt8637428", "tt3224458"]
const bestAnimatedFilm = ["tt1979376", "tt4520988", "tt2386490", "tt9426210", "tt9806192", "tt4729430"]
const bestForeignFilm = ["tt6751668", "tt8291806", "tt10199590", "tt7921248", "tt6062774", "tt10199640"]
const bestDirector = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt6751668"]
const bestActor = ["tt7653254", "tt7286456", "tt2066051", "tt8291806"]
const bestActrees = ["tt7653254", "tt3281548", "tt6394270", "tt7549996"]
const bestSupportingActrees = ["tt7653254", "tt3281548", "tt8637428", "tt6394270"]
const bestSupportingActor = ["tt1302006", "tt7131622", "tt3224458", "tt8404614"]
const containerMovies = document.getElementById("container");

function bestActorCard (data){
    if (data === "tt7653254"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/adam-driver-img.jpg" value="tt7653254" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt7286456"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/joaquin-phoenix-img.jpg" value="tt7286456" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt2066051"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/taron-egerton-img.jpg" value="tt2066051" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt8291806"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/antonio-banderas-img.jpg" value="tt8291806" alt="poster"></img>
      </div>
    </div>`
    }     
}
/*
<div id="fullInfo" class="col s12 m6">
      <div class="row">
        <div class="col s12 m4">
          <img src=${data.Poster} alt="" class="responsive-img">
        </div>
        <div class="col s12 m8">
          <h3 class="black-text">${data.Title}</h3>
          <p>${data.Plot}</p>
        </div>        
      </div>
*/

function actorCard(data) {
    containerMovies.innerHTML +=
    `<div class="wrap">
      <div id="tarjetaActor" class="tarjetaMovies">
        <h4>${data.Title}</h4>
        <p>${data.Genre}</p>
        <button id="star">✩</button>
        <img class="imgActor" src=${data.Poster} alt="poster"></img>
      </div>
    </div>`
    let btnStar= document.getElementById("star")
    btnStar.addEventListener('click', () => {              
        let selectTitle = document.getElementById("winnerBestActor")
        selectTitle.innerHTML =`<p>${data.Title}</p>`
    })
    let btnPoster = document.getElementById("tarjetaActor")
    btnPoster.addEventListener('click', () => {

    })
}

function bestMovie() {
    containerMovies.innerHTML=""
    bestFilm.forEach(element => {
        fetch(`http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
           <div class="tarjetaMovies col s12 m6">
             <div class="row">
              <p>${data.Title}<p>
              <img src=${data.Poster} alt="" class="responsive-img">
              <button id="star">✩</button>
             </div>
            </div>
           </div>
          </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">${data.Title}</p>`
        })  
      })  
    })
}

function animatedMovie() {
    containerMovies.innerHTML=""
    bestAnimatedFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
           <div class="tarjetaMovies col s12 m6">
             <div class="row">
              <p>${data.Title}<p>
              <img src=${data.Poster} alt="" class="responsive-img">
              <button id="star">✩</button>
             </div>
            </div>
           </div>
          </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">${data.Title}</p>`
        })            
      });
    });
}

function foreignFilm() {
    containerMovies.innerHTML=""
    bestForeignFilm.forEach(element => {
        fetch(`http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
           <div class="tarjetaMovies col s12 m6">
             <div class="row">
              <p>${data.Title}<p>
              <img src=${data.Poster} alt="" class="responsive-img">
              <button id="star">✩</button>
             </div>
            </div>
           </div>
          </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">${data.Title}</p>`
        }) 
      })
    })
}

function director() {
    containerMovies.innerHTML=""
    bestDirector.forEach(element => {
    fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => { 
        const movies = data
        containerMovies.innerHTML +=
          `<div class="wrap">
          <div class="tarjetaMovies">
              <h4>${data.Title}</h4>
              <p>${data.Genre}</p>
              <img class="imgActor" src="${data.Poster}" alt="poster"></img>
              <button id="star">✩</button>
              <h3>${data.Director}</h3>
          </div>
          </div>`
          let btnStar= document.getElementById("star")
          btnStar.addEventListener('click', () => {              
            let selectTitle = document.getElementById("winnerMovie")
            selectTitle.innerHTML =`<p style="color:white">${data.Director}</p>`
          })
        })
    })
}
function actor() {
  containerMovies.innerHTML=""
  bestActor.forEach(element => {
    fetch(`http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
      .then(res => res.json())
      .then(data => { 
        containerMovies.innerHTML +=
        `<div id="category-1" class="row white">    
         </div>
          <div id="tarjetaMovies" class="tarjetaMovies col s12 m6">
            <div class="row">
            <p>${data.Title}<p>
            <img src=${data.Poster} alt="" class="responsive-img">
            <button id="star">✩</button>
          </div>
         </div>
         </div>
        </div>`
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">Name Actor</p>`
        }) 
        let btnActor = document.getElementById("tarjetaMovies")
        btnActor.addEventListener('click', () => {
          let divActor = document.getElementById("container")
          let value = data.imdbID
          console.log(value)       
          divActor.innerHTML = ""
          divActor.innerHTML = bestActorCard(value)    
        })
    })              
  })
}

function actrees() {
    containerMovies.innerHTML=""
    bestActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
           <div class="tarjetaMovies col s12 m6">
             <div class="row">
              <p>${data.Title}<p>
              <img src=${data.Poster} alt="" class="responsive-img">
              <button id="star">✩</button>
             </div>
            </div>
           </div>
          </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">Name Actricess</p>`
        })          
      })  
    })
}
function supportingActrees() {
    containerMovies.innerHTML=""
    bestSupportingActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
           <div class="tarjetaMovies col s12 m6">
             <div class="row">
              <p>${data.Title}<p>
              <img src=${data.Poster} alt="" class="responsive-img">
              <button id="star">✩</button>
             </div>
            </div>
           </div>
          </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerMovie")
          selectTitle.innerHTML =`<p style="color:white">NAme Suporting Actress</p>`
        })           
      })  
    })
}
function supportingActor() {
  containerMovies.innerHTML=""
  bestSupportingActor.forEach(element => {
    fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      containerMovies.innerHTML +=
      `<div id="category-1" class="row white">    
        </div>
        <div id="tarjetaMovies" class="tarjetaMovies col s12 m6">
          <div class="row">
          <p>${data.Title}<p>
          <img src=${data.Poster} alt="" class="responsive-img">
          <button id="star">✩</button>
        </div>
        </div>
        </div>
      </div>`
      let btnStar= document.getElementById("star")
      btnStar.addEventListener('click', () => {              
        let selectTitle = document.getElementById("winnerMovie")
        selectTitle.innerHTML =`<p style="color:white">NAme Suporting Actress</p>`
      }) 
      let btnActor = document.getElementById("tarjetaMovies")
      btnActor.addEventListener('click', () => {
        let divActor = document.getElementById("container")
        let value = data.imdbID
        console.log(value)       
        divActor.innerHTML = ""
        divActor.innerHTML = bestActorCard(value)    
      })
    })
  })
}
export {bestMovie, animatedMovie, foreignFilm, director, actor, actrees, supportingActrees, supportingActor}

// imdbID
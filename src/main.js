import * as myData from './data.js'
const btnbestFilm = document.getElementById("bestFilm");
const btnAnimatedFilm = document.getElementById("bestAnimatedFilm");
const btnForeignFilm = document.getElementById("bestForeignFilm");
const btnDirector = document.getElementById("bestDirector");
const btnActor = document.getElementById("bestActor");
const btnActriz = document.getElementById("bestActrees");
const btnSupportingActrees = document.getElementById("bestSupportingActrees");
const btnSupportingActor = document.getElementById("bestSupportingActor");


btnbestFilm.addEventListener("click", myData.bestMovie );
btnAnimatedFilm.addEventListener("click", myData.animatedMovie);
btnForeignFilm.addEventListener("click", myData.foreignFilm);
btnDirector.addEventListener("click", myData.director);
btnActor.addEventListener("click", myData.actor);
btnActriz.addEventListener("click", myData.actrees);
btnSupportingActrees.addEventListener("click", myData.supportingActrees);
btnSupportingActor.addEventListener("click", myData.supportingActor)

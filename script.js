/* animation de la disparition du titre h1 */
const titre = document.getElementById(`titre`);

setTimeout(() =>{
    titre.classList.add("hide");
},6000);

// animation pendant le chargement et apres le chargement
const load = document.getElementById(`chargement`);
const login = document.getElementById(`login`);

setTimeout(()=>{
    load.classList.add("hide");
    login.classList.add("show");
},10000);
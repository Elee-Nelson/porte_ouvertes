const boutons = document.querySelector(".bouton");

// for (let i=0; i < boutons.length; i++) {
//     boutons[i].addEventListener("click", e=> {
//         e.preventDefault();
//         console.log("touché");
//     })
// }

boutons.addEventListener("click", e=> {
    e.preventDefault();
    console.log("touché");
})
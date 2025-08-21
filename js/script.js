const boutons = document.querySelector(".bouton");

// for (let i=0; i < boutons.length; i++) {
//     boutons[i].addEventListener("click", e=> {
//         e.preventDefault();
//         console.log("touché");
//     })
// }

boutons.addEventListener("click", e=> {
    e.preventDefault();

    if (boutons.classList.contains("fin")) return;

    boutons.classList.remove("animation");

    boutons.classList.add("fin");
    
    setTimeout(function() {
        boutons.classList.add("animation");
    }, 100);

})

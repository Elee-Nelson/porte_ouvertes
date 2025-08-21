setTimeout(function() {
    window.location.href = "index.html"
}, 5000);

// lorsque la page et ses informations ont fini de charger
document.addEventListener("DOMContentLoaded", function () {
    let span = document.getElementById("secondes");
    if (!span) return; // évite une erreur

    let nombre = parseInt(span.textContent);

    let compteur = setInterval(function () {
        nombre--;
        span.textContent = nombre;
    }, 1000);
});
var carousel = $(".carousel"),
    currdeg = 0;

// Rotation automatique toutes les 3 secondes
var autoRotate = setInterval(rotateNext, 3000);

// Fonction pour tourner à droite (next)
function rotateNext() {
    currdeg -= 60;
    rotateCarousel();
}

// Fonction pour tourner à gauche (prev)
function rotatePrev() {
    currdeg += 60;
    rotateCarousel();
}

// Fonction pour gérer la rotation et détecter l'élément visible
function rotateCarousel() {
    carousel.css({
        transform: "rotateY(" + currdeg + "deg)",
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)"
    });

    // Réinitialiser le timer auto si un bouton est cliqué
    clearInterval(autoRotate);
    autoRotate = setInterval(rotateNext, 3000);

    // Mise à jour de l'élément visible
    updateClickableElement();
}

// Fonction pour détecter l'élément au premier plan et le rendre cliquable
function updateClickableElement() {
    $(".item").removeClass("active-clickable"); // Supprime l'ancien actif

    // Liste des positions en fonction de la rotation
    let positions = [0, -60, -120, -180, -240, -300];

    // Trouver l'élément correspondant à la position actuelle
    let visibleIndex = Math.abs(currdeg / 60) % 6; // Il y a 6 éléments
    $(".item").eq(visibleIndex).addClass("active-clickable");
}

// Ajout des événements click aux flèches
$(".next").click(rotateNext);
$(".prev").click(rotatePrev);

// Détecter l'élément visible au chargement
updateClickableElement();

// Ajout d'un événement click sur l'élément visible
$(document).on("click", ".active-clickable", function() {
    alert("Vous avez cliqué sur l'élément : " + $(this).text());
});

function openPopup() {
    document.querySelector(".popup-overlay").style.display = "flex";
}

function closePopup() {
    document.querySelector(".popup-overlay").style.display = "none";
}
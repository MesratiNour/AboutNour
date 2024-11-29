

// Changement dynamique de couleur dans le menu de navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f5f5f5'; // Change la couleur au survol
        link.style.backgroundColor = '#800020'; // Ajoute un fond bordeaux
        link.style.borderRadius = '5px'; // Arrondi
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Réinitialise la couleur
        link.style.backgroundColor = ''; // Réinitialise le fond
    });
});

// Message dynamique dans l'en-tête
const header = document.querySelector('header');
const messages = [
    "Bienvenue sur mon site !",
    "Explorez mes activités et projets.",
    "Contactez-moi pour en savoir plus."
];
let messageIndex = 0;

function changeHeaderMessage() {
    header.querySelector('p:last-child').textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length; // Passe au message suivant
}

// Change le message toutes les 3 secondes
setInterval(changeHeaderMessage, 3000);

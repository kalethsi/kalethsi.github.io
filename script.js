const textArray = ["Aqui tus flores", "Es lo mejor que pude hacer uwu", "Te amo", "Te va a ir increible en tu examen de hoy", "Despues te doy flores en persona", "Te quiero dar como cajon que no cierra :3", "me tomo 3 horas hacer la animacion de abajo xdd"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typewriter = document.getElementById("typewriter");

    if (isDeleting) {
        currentText = textArray[index].substring(0, charIndex--);
    } else {
        currentText = textArray[index].substring(0, charIndex++);
    }

    typewriter.innerHTML = currentText;

    // Speed for typing and deleting
    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === textArray[index].length) {
        speed = 1000;  // Pause before start deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;  // Switch to the next text
        speed = 500;  // Pause before typing the next text
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", function () {
    type();  // Start typing effect when the page is loaded
});
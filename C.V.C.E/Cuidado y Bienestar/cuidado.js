// Banco de notas y recomendaciones clínicas multidisciplinarias
const animalTips = [
    "🩺 Nota Vetcare (Clínica General): La bioseguridad en instalaciones pecuarias y clínicas reduce hasta un 80% la incidencia de patógenos cruzados en pacientes hospitalizados.",
    "🐍 Nota Vetcare (Exóticos): Los reptiles requieren un gradiente térmico adecuado en su terrario; una mala temperatura bloquea por completo su sistema digestivo.",
    "🐄 Nota Vetcare (Grandes Especies): El control periódico de la condición corporal en vacas lecheras previene trastornos metabólicos severos durante el periparto.",
    "🐈 Nota Vetcare (Pequeños Animales): En felinos, el estrés por hospitalización o transporte altera de forma drástica los niveles de glucosa en sangre; se recomienda el uso de feromonas sintéticas.",
    "💉 Nota Vetcare (Medicina Preventiva): El respeto riguroso de la cadena de frío en vacunas y biologiques es vital para garantizar la inmunogenicidad en cualquier especie animal."
];

document.addEventListener("DOMContentLoaded", () => {
    const tipBtn = document.getElementById("tip-btn");
    const tipDisplay = document.getElementById("tip-display");

    if (tipBtn && tipDisplay) {
        tipBtn.addEventListener("click", () => {
            // Seleccionar una nota al azar
            const randomIndex = Math.floor(Math.random() * animalTips.length);
            const selectedTip = animalTips[randomIndex];

            // Mostrar el contenedor y cambiar el texto con animación suave
            tipDisplay.classList.remove("hidden");
            tipDisplay.style.opacity = 0;
            tipDisplay.textContent = selectedTip;

            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.1;
                    tipDisplay.style.opacity = opacity;
                } else {
                    clearInterval(fadeIn);
                }
            }, 30);
        });
    }
});
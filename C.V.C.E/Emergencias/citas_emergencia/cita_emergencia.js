document.addEventListener("DOMContentLoaded", () => {
    const emergencyForm = document.getElementById("emergency-form");
    const successMessage = document.getElementById("success-message");

    if (emergencyForm) {
        emergencyForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Ocultar el formulario con una transición suave y mostrar el mensaje de alerta exitosa
            emergencyForm.style.display = "none";
            successMessage.classList.remove("hidden");

            // Opcional: Desplazarse hacia arriba para ver el mensaje de confirmación
            window.scrollTo({ top: 100, behavior: "smooth" });
        });
    }
});
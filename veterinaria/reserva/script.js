document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: #e8f5e9; border-radius: 8px;">
            <h2 style="color: #2e7d32;">¡Reserva realizada con éxito!</h2>
            <p>¡Esperamos verte pronto!</p>
        </div>
    `;
});
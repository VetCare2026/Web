document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formContainer = document.querySelector('.form-container');
    
    // Cambiamos el contenido del contenedor para mostrar el mensaje de éxito
    formContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: #e8f5e9; border-radius: 8px;">
            <h2 style="color: #2e7d32;">¡Reserva realizada con éxito!</h2>
            <p>¡Esperamos verte pronto!</p>
            <br>
            <!-- El enlace ../index.html permite volver a la raíz desde la carpeta /reserva/ -->
            <a href="../index.html" style="
                display: inline-block; 
                padding: 10px 20px; 
                background-color: #2e7d32; 
                color: white; 
                text-decoration: none; 
                border-radius: 5px; 
                font-weight: bold;
                transition: background 0.3s;">
                Volver al Inicio
            </a>
        </div>
    `;
});

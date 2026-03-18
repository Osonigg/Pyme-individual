document.addEventListener("DOMContentLoaded", () => {
    const errorScreen = document.getElementById('error-screen');

    // Al hacer clic, el sistema se "recupera"
    errorScreen.addEventListener('click', () => {
        // Sonido opcional de "sistema iniciado" si lo tuvieras
        errorScreen.classList.add('hidden-error');
        
        // Efecto de consola en el título una vez dentro
        reconstructText();
    });

    // Función para el efecto de escritura en el banner
    function reconstructText() {
        const title = document.querySelector('.glitch-text');
        if(!title) return;
        
        const originalText = title.innerText;
        title.innerText = "";
        let i = 0;
        
        const interval = setInterval(() => {
            title.innerText += originalText[i];
            i++;
            if (i === originalText.length) clearInterval(interval);
        }, 100);
    }
});

let inputBuffer = "";
const secretCode = "ADMIN";

document.addEventListener('keydown', (e) => {
    // Añadimos la tecla presionada al buffer
    inputBuffer += e.key.toUpperCase();
    
    // Mantenemos el buffer solo del tamaño del código secreto
    if (inputBuffer.length > secretCode.length) {
        inputBuffer = inputBuffer.substring(inputBuffer.length - secretCode.length);
    }

    // Si coincide, activamos el Easter Egg
    if (inputBuffer === secretCode) {
        document.getElementById('easter-egg-terminal').classList.add('terminal-active');
        inputBuffer = ""; // Limpiamos para que pueda repetirse
    }
});

function closeTerminal() {
    document.getElementById('easter-egg-terminal').classList.remove('terminal-active');
}

function toggleChat() {
    document.getElementById('ai-chat-window').classList.toggle('chat-hidden');
}

function handleChat(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('user-input');
        const body = document.getElementById('chat-body');
        
        if (input.value.trim() === "") return;

        // Mensaje Usuario
        body.innerHTML += `<p class="user-msg">${input.value}</p>`;
        
        // Respuesta Simulada de MOR-IA
        const query = input.value.toLowerCase();
        setTimeout(() => {
            let response = "Analizando datos... Contacte a un operador nivel 1 para detalles específicos.";
            
            if (query.includes("historia") || query.includes("pasó")) {
                response = "EXPEDIENTE: El borrado masivo de 2025 fue contenido. Estamos en fase de resurgimiento.";
            } else if (query.includes("servicio") || query.includes("costo")) {
                response = "Nuestras rutas están activas. Visite la sección SERVICIOS para protocolos de envío.";
            } else if (query.includes("gracias")) {
                response = "Conexión mantenida. MÔRLUC siempre en movimiento.";
            }
            
            body.innerHTML += `<p class="bot-msg">${response}</p>`;
            body.scrollTop = body.scrollHeight;
        }, 1000);

        input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const errorScreen = document.getElementById("error-screen");
  // REVISAR SI YA SE DESBLOQUEÓ ANTES
  if (localStorage.getItem("system_restored") === "true") {
    errorScreen.style.display = "none"; // Elimina la pantalla de inmediato
  }

  // Al hacer clic, el sistema se "recupera"
  errorScreen.addEventListener("click", () => {
    errorScreen.classList.add("hidden-error");
    // GUARDAR ESTADO EN EL NAVEGADOR
    localStorage.setItem("system_restored", "true");
  });
});

function toggleChat() {
  document.getElementById("ai-chat-window").classList.toggle("chat-hidden");
}

function handleChat(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("user-input");
    const body = document.getElementById("chat-body");

    if (input.value.trim() === "") return;

    // Mensaje Usuario
    body.innerHTML += `<p class="user-msg">${input.value}</p>`;

    // Respuesta Simulada de MOR-IA
    const query = input.value.toLowerCase();
    setTimeout(() => {
      let response =
        "Analizando datos... Contacte a un operador nivel 1 para detalles específicos.";

      if (query.includes("historia") || query.includes("pasó")) {
        response =
          "EXPEDIENTE: El borrado masivo de 2025 fue contenido. Estamos en fase de resurgimiento.";
      } else if (query.includes("servicio") || query.includes("costo")) {
        response =
          "Nuestras rutas están activas. Visite la sección SERVICIOS para protocolos de envío.";
      } else if (query.includes("gracias")) {
        response = "Conexión mantenida. MÔRLUC siempre en movimiento.";
      }

      body.innerHTML += `<p class="bot-msg">${response}</p>`;
      body.scrollTop = body.scrollHeight;
    }, 1000);

    input.value = "";
  }
}

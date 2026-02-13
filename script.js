// Datos de prueba (Simulación de base de datos)
const VALID_USER = "admin@test.com";
const VALID_PASS = "1234";

// Al cargar la página, revisar si ya había una sesión activa (REQ: Mantener sesión)
window.onload = function() {
    const session = localStorage.getItem("userSession");
    if (session) {
        showDashboard(session);
    }
};

function handleLogin() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (email === VALID_USER && pass === VALID_PASS) {
        // Guardar sesión en el navegador
        localStorage.setItem("userSession", email);
        showDashboard(email);
        errorMsg.style.display = "none";
    } else {
        // REQ: Mostrar mensaje de error
        errorMsg.style.display = "block";
    }
}

function showDashboard(email) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard-section").classList.remove("hidden");
    document.getElementById("user-display").innerText = "Usuario: " + email;
}

function handleLogout() {
    // REQ: Cerrar sesión en cualquier momento
    localStorage.removeItem("userSession");
    location.reload(); // Recarga la página para volver al login
}
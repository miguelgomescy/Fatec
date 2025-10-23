function mostrarSenha(elemento, idSenha) {
    var inputPass = document.getElementById(idSenha);
    var btnMostrarSenha = elemento;

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnMostrarSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnMostrarSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

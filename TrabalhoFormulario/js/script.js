const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio do formulário
  // verifica se o usuário e a senha estão corretos
  if (usuario.value === "admin" && senha.value === "123") {
    alert("Login bem sucedido!"); // exibe mensagem de login.
    //window.location.href = "Pagina do zet";
  } else {
    alert("Nome de usuário ou senha incorretos!");
  }
});

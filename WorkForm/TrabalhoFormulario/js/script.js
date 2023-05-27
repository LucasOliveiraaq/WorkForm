
localStorage.setItem('idLogin', 'admin');
localStorage.setItem('senha', '123');

document.getElementById("idLogin").addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio do formulário

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === localStorage.idLogin && senha === localStorage.senha) {
    // alert("Login bem sucedido!"); 
    //window.location.href = "Pagina";
  } else {
    alert("Nome de usuário ou senha incorretos!");
  }
});

function salvar(){
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  var salvarInfo = {
    email: email.value,
    senha: senha.value,
    senhaRepete: senhaRepete.value
  };

  localStorage.setItem('salve', JSON.stringify(salvarInfo));

  alert("Usuario Criado com sucesso!")
}

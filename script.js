function enviar(){
    var capNome = document.getElementById('nome');
    var nome = capNome.value;
    var capEmail = document.getElementById('email');
    var email = capEmail.value;
    var capCidade = document.getElementById('cidade');
    var cidade = capCidade.value;
    var capEstado = document.getElementById('estado');
    var estado = capEstado.value;
    var capTel = document.getElementById('telefone');
    var telefone = capTel.value;
    telefone = telefone.replace(/[\D]/g, '');
    var capSenha = document.getElementById('senha');
    var senha = capSenha.value;
    var capConfsenha = document.getElementById('confsenha');
    var confsenha = capConfsenha.value;
   
    if (senha !== confsenha) {
        alert('Senhas diferentes.')
        return;
    }


    capNome.value = '';
    capEmail.value = '';
    capCidade.value = '';
    capEstado.value = '';
    capTel.value = '';
    capSenha.value = '';
    capConfsenha.value = '';


    alert('Enviado.');
};

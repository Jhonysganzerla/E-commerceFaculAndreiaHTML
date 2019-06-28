
$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');

    $("#formCadUsuario").validate({
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            cpf: {
                required: true,
                cpf: true
            },
            telefone: {
                required: true
            },
            cademail: {
                required: true,

            },
        },
        messages: {
            nome: {
                required: "Preenchimento obrigatório!"
            },
            sobrenome: {
                required: "Preenchimento obrigatório!"
            },
            cpf: {
                required: "Preenchimento obrigatório!"
            },
            telefone: {
                required: "Preenchimento obrigatório!"
            },
            cademail: {
                required: "Preenchimento obrigatório!"
            },
            cadSenha: {
                required: "Preenchimento obrigatório!"
            }
        }
    })

/*     submitHandler: function (form) {
        saveUsuario();
    } */
});


/* ,
            cadSenhaConfirm: {
                required: "Preenchimento obrigatório!",
                equalTo: "A senha não corresponde com a que foi informada!"
            },
            cadEndRua: {
                required: "Preenchimento obrigatório!"
            },
            cadEndBairro: {
                required: "Preenchimento obrigatório!"
            },
            cadEndNro: {
                required: "Preenchimento obrigatório!"
            },
            cadEndCep: {
                required: "Preenchimento obrigatório!"
            },
            cadEndCidade: {
                required: "Preenchimento obrigatório!"
            } */
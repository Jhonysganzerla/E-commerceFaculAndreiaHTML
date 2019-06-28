
function validaUsuario() {
    $("#formCadUsuario").validate({
        rules: {
            nome: {
                required: true
            },
            cadDtNasc: {
                required: true
            },
            cadCpf: {
                required: true,
                cpf: true
            },
            cadTelCel: {
                required: true,
                telCel: true
            },
            cadTelRel: {
                telRes: true
            },
            cadUsuario: {
                required: true
            },
            cadSenha: {
                required: true,

            },
            cadSenhaConfirm: {
                required: true,
                equalTo: "#cadSenha"
            },
            cadEndRua: {
                required: true
            },
            cadEndBairro: {
                required: true
            },
            cadEndNro: {
                required: true
            },
            cadEndCep: {
                required: true,
                cep: true
            },
            cadEndCidade: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Preenchimento obrigatório!"
            },
            cadDtNasc: {
                required: "Preenchimento obrigatório!"
            },
            cadCpf: {
                required: "Preenchimento obrigatório!"
            },
            cadTelCel: {
                required: "Preenchimento obrigatório!"
            },
            cadUsuario: {
                required: "Preenchimento obrigatório!"
            },
            cadSenha: {
                required: "Preenchimento obrigatório!"
            },
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
            }
        },
        submitHandler: function (form) {
            saveUsuario();
        }
    });
}

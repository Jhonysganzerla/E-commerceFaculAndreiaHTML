requiredMsg = `<p class="btn btn-outline-danger">Preenchimento obrigatório!</p>`;

$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    changeValidation(true);

    /*$("#formComprar").validate({
        rules: {
            logEmail: {
                required: true,
            },
            logPassword: {
                required: true,
            },
        },
        messages: {
            logEmail: {
                required: requiredMsg
            },
            logPassword: {
                required: requiredMsg
            },
        },
    })*/


});

function changeValidation(validarcadastro){
    
    $("#formCadUsuario").rules("remove");

    if (validarcadastro){
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
                },
                telefone: {
                    required: true
                },
                cademail: {
                    required: true,
    
                },
                cademail: {
                    required: true,
                },
                dataNasc: {
                    required: true,
                },
            },
            messages: {
                nome: {
                    required: requiredMsg
                },
                sobrenome: {
                    required: requiredMsg
                },
                cpf: {
                    required: requiredMsg
                },
                telefone: {
                    required: requiredMsg
                },
                cademail: {
                    required: requiredMsg
                },
                dataNasc: {
                    required: requiredMsg
                },
    
            }
        })
    }else{
        $("#formCadUsuario").validate({
            rules: {
                logEmail: {
                    required: true,
                },
                logPassword: {
                    required: true,
                },
            },
            messages: {
                logEmail: {
                    required: requiredMsg
                },
                logPassword: {
                    required: requiredMsg
                },
            }
        })
    }
}
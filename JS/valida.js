$(function(){
   

    $('#msgFCadastrarLogin').hide();

    $('#formularioPrincipal').validate({
        rules:{
            nome:{required:true, minlength:2},
            cpf:{required:true, cpf:true},
            password:{required:true},
            cPassword:{required:true, equalTo:"#password"}
        },
        messages:{
            nome:{required:"O campo nome é de preenchimento obrigatório.",
             minlength:"O campo nome deve ter no mínimo dois caracteres"
            },
            cpf:{required:"O campo CPF é de preenchimento obrigatório", 
                cpf:"Informe um CPF válido"},
            password:{required:"O campo senha é de preenchimento obrigatório."},
            cPassword:{required:"O campo verificar senha é de preenchimento", 
                equalTo:"Senhas não conferem."}
        },


        errorPlacement: function(error,element){
            $('msgFCadastrarLogin').html('Preencha o formulário corretamente').show('slow');
        },
        errorContainer: $('#msgFCadastrarLogin'),
        errorLabelContainer:$('#msgFCadastroLogin ul'),   
        wrapper:'li'
    });
    
});

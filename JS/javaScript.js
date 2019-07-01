/*var descricaoProduto =$("#descricaoProduto")
var canecaPicker = $("#canecaPicker")

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function trocaCaneca(){
    let aux;
    if(classActiveChecker("canecaMarfin")){
       aux = "Caneca Marfin"
    }else if(classActiveChecker("canecaNeve")){
        aux = "Caneca Neve"
    }else if(classActiveChecker("canecaOff")){
        aux = "Caneca Off-White"
    }
    
    descricaoProduto.innerHTML = "<div class='page'><div  class='text-center'><h1> "+ aux +" </h1>" +
     "<button class='mt-2 mb-2 btn btn-lg btn-success' onclick='adquirirCaneca()'>Adquira agora sua " + aux +"</button></div>"+
     "Especialmente desenvolvidos para sublimação" +
     "em resposta à solicitação dos modernos modelos de canecas. "+
     "Possui versões para compensação de pressão e calor. "+
     "Possibilita geração de desenho full HD 4K."+
     "<br><h3>Características:   </h3> " +
     "<ul class='text-left'> " +
     "<li>Longa Vida Útil " +
     "<li>Extenso Range de Vazão</li> "+
     "<li>Grande Bocal</li> "+
     "<li>Fácil Operacionalização</li> "+
     "<li>Não Necessita Manutenção</li>"+
     "</ul></div>"


}
if(canecaPicker!=null){
canecaPicker.addEventListener("click",event => {
      trocaCaneca();
      sleep(5).then(() => {canecaPicker.click()})
      
})
canecaPicker.click()



function classActiveChecker(id) {
    return document.getElementById(id).parentElement.classList.contains("active")
}
}*/
var logado = false;
var usuario = null;

$(document).ready(function () {
    if (localStorage.getItem("usuario") != null) {
        usuario = JSON.parse(localStorage.getItem("usuario"));
        logado = true;
        $('#usuarioEntrar')[0].innerHTML = usuario;
    }

    if (logado == false) {
        $('#usuarioEntrar')[0].innerHTML = "Entrar";
    }

});



function modal() {
    if (window.showModalDialog) {
        window.showModalDialog('../modal.html', [1, 4], "dialogwidth: 450; dialogheight: 300; resizable: yes");
    } else {
        alert("Seu navegador não suporta mais este método");
    }
}

function adquirirCaneca() {
    location = "./paginainterna.html";
}

function gotomain() {
    location = "./index.html";
}


function calculatotal() {
    let total = document.getElementById("total_final");
    let frete = document.getElementById("frete");

    frete.value = Math.round((document.getElementById("qtde").value * 0.18) * 15) + 1;

    if ((document.getElementById("qtde").value * 83500) > 83500) {
        frete.innerHTML = "Grátis para compras acima de R$83500";
        total.innerHTML = 'Total: R$' + (document.getElementById("qtde").value * 83500) + ",00";
    } else {
        frete.innerHTML = 'Frete: R$' + frete.value + ',00';
        total.innerHTML = 'Total: R$' + (document.getElementById("qtde").value * 83500 + frete.value) + ",00";
    }

    this.addButton($('#btnCalcular'));
}

function addButton(item) {
    if (($('#btnCalcular') == null)){
        if (!logado) {
            item.parent().append(
                `
        <button type="button" id="btnComprar" onclick="abrirModal()" class="btn btn-success" data-toggle="modal" data-target="#modalCentral"> 
            Comprar                   
        </button>
            `
            );

        } else {
            item.parent().append(
                `
        <button type="button" id="btnComprar" onclick="adquiridoComSucesso()" class="btn btn-success"> 
            Comprar                   
        </button>
            `
            );
        }
    }
}

function abrirModal() {
    if (logado == false) {
        $('#modalCentral').modal('show');
    } else {
        if (confirm('Tem certeza que deseja sair?')) {
            localStorage.removeItem('usuario');
            location.reload();
        }
    }
}

function adquiridoComSucesso() {
    alert('Produto adquirido com sucesso');
}

function saveUsuario() {
    if ($("#logEmail").val() != null && $("#logEmail").val() != '')
        localStorage.setItem("usuario", JSON.stringify($("#logEmail").val()));
    else
        localStorage.setItem("usuario", JSON.stringify($("#cademail").val()));
}

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
var enderecoscadastrados = [];

$(document).ready(function () {
    $('#end_CEP').mask('00000-000');

    if (localStorage.getItem("usuario") != null) {
        usuario = JSON.parse(localStorage.getItem("usuario"));
        logado = true;
        $('#usuarioEntrar')[0].innerHTML = usuario;
    }

    if (logado == false) {
        $('#usuarioEntrar')[0].innerHTML = "Entrar";
    }


});


if (localStorage.getItem("endereco") != null) {
    this.enderecoscadastrados = JSON.parse(localStorage.getItem("endereco"));
    preencheAquelaDiv();
}



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


function saveEndereco(){
    let endereco = {
        nome: $('#end_nome').val(),
        rua: $('#end_rua').val(),
        bairro: $('#end_bairro').val(),
        UF: $('#end_UF').val(),
        numero:  $('#end_numero').val(),
        CEP: $('#end_CEP').val(),
    }

    if(endereco == "" || endereco.nome == "" || endereco.rua == "" || endereco.bairro == "" || endereco.UF == "" || endereco.numero == "" || endereco.CEP == "" ){

    }else{
        this.enderecoscadastrados.push(endereco)
        localStorage.setItem("endereco", JSON.stringify(this.enderecoscadastrados));
        this.preencheAquelaDiv();
    }
}


function preencheAquelaDiv(){
    $("#quadradoQueEsperaAsCoisas").children().remove();
  
    this.enderecoscadastrados.forEach(endereco => {


        $("#quadradoQueEsperaAsCoisas").append(`
            <div class="col-5 row pl-5 pb-2 textao">
            <div class="col-9" style="border: solid black 1px">
              ${endereco.nome}
              <div class="float-right">
              <i class="fa fa-pencil-alt"></i>
              <i class=" fa fa-times clickable" onclick="removeendereco(${endereco.nome})"></i>
              </div>
            </div>
                <div class="col-9 bordaendereco sombra text-left pb-3">
                <label class="col-12">Rua: ${endereco.rua} </label>
                <label class="col-12">Numero: ${endereco.numero} </label>
                <label class="col-12">Bairro: ${endereco.bairro} </label>
                <label class="col-12">UF: ${endereco.UF}  </label>
                <label class="col-12">CEP: ${endereco.CEP} </label>
                <hr>
                <input type="radio"> Selecionar como principal
                
                </div>

    

            </div>
        
        `)
    })
}
function removeendereco(node){
    let a = this.enderecoscadastrados.find(e => e.nome == node)
    this.enderecoscadastrados.splice(a,1);
    localStorage.setItem("endereco", JSON.stringify(this.enderecoscadastrados));
    this.preencheAquelaDiv();
}

function limpaListaDeEndereco(){
    localStorage.removeItem("endereco");
    location.reload();
}

function deletaEndereco(){

}
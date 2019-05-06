window.onload = function(){
    $('.efeito-texto-1').addClass('mytext1');
    $('.efeito-texto-2').addClass('mytext2');

    $('.efeito-texto-1').removeClass('efeito-texto-1');
    $('.efeito-texto-2').removeClass('efeito-texto-2');
    
    inseriImagem(0);
};
function rolar_para(elemento) {
	$('html, body').animate({scrollTop: $(elemento).offset().top -=130}, 1000);
}

function verMais(op){
    switch(op){
        case 1:
            document.getElementById("verMais1").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e também sobre o framework de e-commerce Magento que utilizamos em nossos clientes.";
            break;
        case 2:
            document.getElementById("verMais2").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e também sobre o framework de e-commerce Magento que utilizamos em nossos clientes.";
            break;
        case 3: 
            document.getElementById("verMais3").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e também sobre o framework de e-commerce Magento que utilizamos em nossos clientes.<a  style='cursor: pointer' onclick='verMenos(3)'>Ver menos</a>";
            break;
        case 4 : 
            document.getElementById("verMais4").innerHTML = "Com os últimos avanços da área de inteligência artificial, muitos termos ficaram em evidência, fazendo com que muitas pessoas confundam seus conceitos. Abordaremos nesta apresentação essas diferentes termologias e como a área de Pesquisa Aplicada utilizou determinadas técnicas no portfólio de produtos da Senior Sistemas. <a  style='cursor: pointer' onclick='verMenos(4)'>Ver menos</a>";
            break;
    }
}

function verMenos(op){
    switch(op){
        case 1:
            document.getElementById("verMais1").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e também sobre o framework de e-commerce Magento que utilizamos em nossos clientes.";
            break;
        case 2:
            document.getElementById("verMais2").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e <a  style='cursor: pointer' onclick='verMais(3)'>...</a>";
            break;
        case 3: 
            document.getElementById("verMais3").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e <a  style='cursor: pointer' onclick='verMais(3)'>...</a>";
            break;
        case 4 : 
            document.getElementById("verMais4").innerHTML = "Com os últimos avanços da área de inteligência artificial, muitos termos ficaram em evidência <a  style='cursor: pointer' onclick='verMais(4)'>...</a>";
            break;
    }
}

function info(op){
    switch(op){
        case 1:
            document.getElementById("info_1").innerHTML = 
                "Oficina voltada para usuários com pouca experiência em Linux, onde usuários mais experientes auxiliam com a instalação e configuração do sistema operacional.";
            break;
        case 2:
            document.getElementById("info_2").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e <a  style='cursor: pointer' onclick='verMais(3)'>...</a>";
            break;
        case 3: 
            document.getElementById("info_3").innerHTML = "Conversaremos um pouco sobre o cenário de e-commerce e números do primeiro semestre/2018 e <a  style='cursor: pointer' onclick='verMais(3)'>...</a>";
            break;
        case 4 : 
            document.getElementById("info_4").innerHTML = "Com os últimos avanços da área de inteligência artificial, muitos termos ficaram em evidência <a  style='cursor: pointer' onclick='verMais(4)'>...</a>";
            break;
    }
}

function info(op){
    $("#info_"+op).fadeToggle("slow");
};

function inseriImagem(index){
    var diretorio = "img/galeria/"+index+".png";
    var image = new Image();
    image.src = diretorio;
    image.height = 350;
    image.width = 450;
    
    image.onload = function() {
        var divGaleria = document.createElement("div");
        divGaleria.className= 'col-md-3 center-badge';
        divGaleria.style ='padding-bottom:10px';
        divGaleria.appendChild(image);
        document.getElementById("galeriaFotos").appendChild(divGaleria);
        index++;
        inseriImagem(index);
    };
    
    image.onerror = function(e) {
       
    };
}
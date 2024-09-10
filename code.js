async function pesquisarCEP(){
    var cep = document.getElementById("cep")

if(cep.value==""){alert(cep.value)}
else{

    try{
        var resposta= await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        var dados= await resposta.json()  
    }catch(E){
       alert("CEP invalido")
    }

console.log(dados)
console.log(dados.localidade)
console.log(dados.regiao)

var Logradouro= document.getElementById("log")
Logradouro.innerHTML = dados.logradouro

var Bairro= document.getElementById("bairro")
Bairro.innerHTML = dados.bairro

var Localidade= document.getElementById("loc")
Localidade.innerHTML = dados.localidade

var Estado= document.getElementById("estado")
Estado.innerHTML = dados.estado


//chamada da API 
//viacep.com.br/ws/62823000/json/
}



}
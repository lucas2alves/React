
var formulario = document.querySelector('form');
const btn = document.querySelector('#send');


formulario.onsubmit = function(){
   if(!document.querySelector("input").value){

      alert("Preencha corretamente!");
      return false;
      
   }

   alert ("Formulario enviado com sucesso");
   
}


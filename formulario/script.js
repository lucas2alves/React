
var formulario = document.querySelector('input');
const btn = document.querySelector('#send');
let check = document.querySelector("#confirmo");
var select = document.querySelector('#estados');
var form = document.querySelector("#form");
var dadostela = document.querySelector("#dadostela");
var html = `<p id="dadostela">Dados do usuario: <br> </p>`;


btn.onclick = function(){

   if(!document.querySelector("input").value){

      alert("Preencha seu nome!");
      btn.innerHTML = "Enviar";
      return false;
      
   }
   


   if(!document.querySelector("#estados").value){

      alert("Selecione um Estado!");
      btn.innerHTML = "Enviar";
      return false;
      
   }

   if(!document.querySelector("#confirmo").checked){

      alert("Confirme antes de enviar");
      btn.innerHTML = "Enviar";
      return false;
   }

   dadostela.innerHTML += "Nome- " + formulario.value + " / " + "Estado- " + select.value + " / " + check.value + html; ;
   btn.innerHTML = "Sucesso";
   alert ("Formulario enviado com sucesso");
   return false;
  
}


formulario.onclick = function(e){
   if(!document.querySelector("input").value){

      btn.innerHTML = "Enviar";
      select.checked = false;
      return false;

     
   }

    btn.innerHTML = "Enviar";
   return false;
}

select.onclick = function(e){
   if(!document.querySelector("#estados").value){

      btn.innerHTML = "Enviar";
      return false;
     
   }
    btn.innerHTML = "Enviar";
   return false;

}

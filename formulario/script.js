
const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#name");
    const valuename = name.value;
    document.querySelector("#textname").innerHTML ="Name: " + valuename;

    const email = document.querySelector("#email");
    const valueemail = email.value;
    document.querySelector("#textemail").innerHTML = "Email: " + valueemail;

    const tel = document.querySelector("#tel");
    const valuetel = tel.value;
    document.querySelector("#texttel").innerHTML = "Tel: " + valuetel;

});
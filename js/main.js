const buttonGenera = document.getElementById("btnGenera");
const buttonAnnulla = document.getElementById("btnAnnulla");

buttonGenera.addEventListener("click", function () {
    const userkm = document.getElementById("km").value;
    if (isNaN(userkm)) {
        alert("i km inseriti non sono validi");
    }

    const userAge=document.getElementById("age").value;
    if ((userAge.value ==="")) {
        alert("la fascia d'età inserita non è valida");
    }

    const userName=document.getElementById("name");
    console.log(userName.value);
    fullname.innerHTML = userName;

    const prezzoBase= .21 * userkm;

    if(userAge==="20"){
        const prezzoFinale = (prezzoBase * .80).toFixed;
        priceTicket.innerHTML = prezzoFinale;
        offerta.innerHTML = "20%"
    }
})


  
  
  //Reisekalkulator. Dropdown-menyene med valg, hvert valg påvirker totalprisen. Parsing av for å legge sammen totalprisen istedet for å bare få dem ved siden av hverandre.

function calcTotal() {
  var romtype = parseInt(document.querySelector("#romtype").value);
  var destinasjonsingel = parseInt(document.querySelector("#destinasjonsingel").value);
  var destinasjonpar = parseInt(document.querySelector("#destinasjonpar").value);
  var destinasjonfamilie = parseInt(document.querySelector("#destinasjonfamilie").value);
  var varighet = parseInt(document.querySelector("#varighet").value);
  var vask = parseInt(document.querySelector("#vask").value);
  var standard = parseInt(document.querySelector("#standard").value);
  var medlem = document.querySelector("#medlem").checked;
  
var total = (romtype * varighet) + vask + standard + destinasjonsingel + destinasjonpar + destinasjonfamilie;
  
  if (medlem)
    total *= 0.8;
  
  document.querySelector("#total").textContent = total;
}

//For å beregne totalpris, lytter etter hvis dropdown-menyene har endret status ("change") og beregner dersom den får verdier fra endret i dropdown-menyen og kalkulerer totalpris
 
 
document.querySelector("#romtype").addEventListener("change", calcTotal);
document.querySelector("#destinasjonsingel").addEventListener("change", calcTotal);
document.querySelector("#destinasjonpar").addEventListener("change", calcTotal);
document.querySelector("#destinasjonfamilie").addEventListener("change", calcTotal);
document.querySelector("#varighet").addEventListener("change", calcTotal);
document.querySelector("#vask").addEventListener("change", calcTotal);
document.querySelector("#standard").addEventListener("change", calcTotal);
document.querySelector("#medlem").addEventListener("change", calcTotal);
calcTotal();

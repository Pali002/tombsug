var oldalElem = document.getElementById("oldal");
var alfaElem = document.getElementById("alfaSzog");

var szamitGomb = document.getElementById("szamitGomb");
var sugarElem = document.getElementById("sugar");

szamitGomb.addEventListener("click", function(){
    var oldal = Number(oldalElem.value);
    var alfa = Number(alfaElem.value);
    var sugar = (1.0/2.0)
    * oldal
    * Math.sin(alfa);
    console.log(sugar);
    sugarElem.value = sugar;
});
var genera= document.getElementById("genera");

genera.addEventListener("click",function(){

    document.getElementById("biglietto").className= "myshow";

    var nome=document.getElementById("nome").value;
    console.log(nome);

    var km=document.getElementById("km").value;
    var prezzo=km*0.21;
    console.log(km);

    var eta=document.getElementById("eta").value;
    console.log(eta)

    if(eta=="over"){
        prezzo=prezzo*0.6;
    }else if(eta=="minorenne"){
        prezzo=prezzo*0.8;
    }

    prezzo=prezzo.toFixed(2);
    console.log(prezzo);

    var carrozza=Math.floor((Math.random()*9)+1);
    var codicecp=Math.floor((Math.random()*1000)+9000);


    document.getElementById("stampanome").innerHTML=nome;
    document.getElementById("offerta").innerHTML="Prezzo per <br>"+eta;
    document.getElementById("carrozza").innerHTML= carrozza;
    document.getElementById("codicecp").innerHTML= codicecp;
    document.getElementById("costo").innerHTML=prezzo;
});


var annulla=document.getElementById("annulla");

annulla.addEventListener("click",function(){

    document.getElementById("biglietto").className= "myhide";

    var nome=document.getElementById("nome").value="";
    console.log(nome);

    var km=document.getElementById("km").value="";
    var prezzo=km*0.21;
    console.log(km);

    var eta=document.getElementById("eta").value="";
    console.log(eta)
});
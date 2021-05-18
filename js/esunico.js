function somma(){
var valore1=0,  valore2=0,
valore1=parseFloat(document.getElementById("val1").value);
alert("valore 1: " +valore1);
valore2=parseFloat(document.getElementById("val2").value);
alert("valore 2: " +valore2);
var risultato= valore1+valore2;
alert("risultato: " +risultato);
document.getElementById("risultato0").innerText="Il tuo risultato è:" +risultato;
}

function sottrazione(){
var valore3=0,  valore4=0,
valore1=parseFloat(document.getElementById("val3").value);
alert("valore 1: " +valore1);
valore2=parseFloat(document.getElementById("val4").value);
alert("valore 2: " +valore2);
var risultato= valore1-valore2;
alert("risultato: " +risultato);
document.getElementById("risultato1").innerText="Il tuo risultato è:" +risultato;
}

function moltiplicazione(){
var valore5=0,  valore6=0,
valore1=parseFloat(document.getElementById("val5").value);
alert("valore 1: " +valore1);
valore2=parseFloat(document.getElementById("val6").value);
alert("valore 2: " +valore2);
var risultato= valore1*valore2;
alert("risultato: " +risultato);
document.getElementById("risultato2").innerText="Il tuo risultato è:" +risultato;
}

function divisione(){
var valore7=0,  valore8=0,
valore1=parseFloat(document.getElementById("val7").value);
alert("valore 1: " +valore1);
valore2=parseFloat(document.getElementById("val8").value);
alert("valore 2: " +valore2);
var risultato= valore1/valore2;
alert("risultato: " +risultato);
document.getElementById("risultato3").innerText="Il tuo risultato è:" +risultato;
}


var count=0;

function myFunction(){
var x, text;
x=document.getElementById("parola").value;
if(x ==="blu"){
text="Giusto";
count++;
}else{
text="Sbagliato!";
}
alert("risultato: "+text)
document.getElementById("demo").innerHTML=text;
}

function myFunction1(){
var y, text;
y=document.getElementById("parola1").value;
if(y ==="pera"){
text="Giusto";
count++;
}else{
text="Sbagliato!";
}
alert("risultato: "+text)
document.getElementById("demo1").innerHTML=text;
document.getElementById("risultato").innerHTML="HAI TOTALIZZATO: " +count+ "/2 PUNTI ";
}



function lancio(){
    var caso=Math.floor(Math.random()*3);
    document.getElementById("caso").src="img1/"+caso+".jpg";
    }
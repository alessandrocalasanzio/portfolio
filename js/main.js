const W=320; // Variabile per la larghezza
const H=320;// Variabile per la lunghezza

const grandezzaCelle=80;

const canvas = document.getElementById("canvas") //Sto dicento con la variabile "canvas" di recuperarmi l'id "canvas"
const ctx=canvas.getContext("2d") //Sto settando il contesto

canvas.width = W; //Sto dicendo che la larghezza del "canvas" è uguale a W(ovvero 600);
canvas.height = H;//Sto dicendo che la lunghezza del "canvas" è uguale a H(ovvero 600);




const drawCelles= (txt,x,y) => {
    ctx.font = '30px serif';
    ctx.border= '1px solid black';
    ctx.fillText(txt,x,y);
    ctx.fillStyle= 'blue';
    
    
}


//Funzione per mischiare l'array
const shuffle= (arr) => {
let i=0, j=0, tmp=null
for(i= arr.length-1;i>0;i--){
    j= Math.floor(Math.random()*(i+1))
    tmp=arr[i]
    arr[i] =arr[j]
    arr[j] = tmp
}
}

//Questo per scambiare i quadratini delle celle quando poi andrò a muoverli
const scambio= (arr,i,j) => {
    let tmp= null;
    tmp=arr[i]
    arr[i] =arr[j]
    arr[j] = tmp

}

//All'interno di questo array costruirò 15 celle nuove.
const celles=[];
const posizioneCelles=[];
let emptyPos=15;
for(let i=0;i<15;i++){
    celles.push(new Celle(i));
    posizioneCelles.push(i);
}


celles.push(new Celle(-1))
posizioneCelles.push(15)
shuffle(posizioneCelles) //Questo mi serve per mischiare le celle
console.log(posizioneCelles)
scambio(posizioneCelles,0,1)
console.log(posizioneCelles)







const coordinateIndice= (indice) =>{
    return{
        riga: grandezzaCelle*Math.floor(indice/4),
        colonna:grandezzaCelle*(indice % 4) 
        }
} 






//Funzione che aggiornerà tutta la parte grafica e poi verrà richiamata perchè la parte grafica va aggiornata.
const show = () =>{
    ctx.clearRect(0,0,W,H); //Questo per dire di cancellare il contenuto del canvas
    posizioneCelles.forEach((posizioneCelles,indice) =>{
        const{riga,colonna}= coordinateIndice(indice)

        drawCelles(celles[posizioneCelles].getNumbers(),colonna + 0.5*grandezzaCelle ,riga + 0.5*grandezzaCelle)
    }) ;
    //Per ogni cella dentro celles devi disegnarmi una cella con i valori assegnati(txt,x,y)
    requestAnimationFrame(show); //Vuol dire che continuo a richiamare direttamente "show" - Vuol dire che si richiama lei ogni volta

}



show() //Per richiamarla basterà scriverla una volta.




const moves= {

    ArrowLeft: (ep) => {
        if(ep % 4 ===3) return
        scambio(posizioneCelles,ep,ep+1)
    },
    ArrowRight: (ep) => {
        if(ep % 4 ===0) return
        scambio(posizioneCelles,ep-1,ep)
    },
    ArrowDown: (ep) => {
        if(Math.floor(ep / 4) ===0) return
        scambio(posizioneCelles,ep-4,ep)
    },
    ArrowUp:(ep) => {
        if(Math.floor(ep / 4) ===3) return
        scambio(posizioneCelles,ep+4,ep)
    },
}



document.body.onkeydown = (e) => {
emptyPos= posizioneCelles.indexOf(15)
moves[e.code](emptyPos)

}
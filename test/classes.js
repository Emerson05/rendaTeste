
 function calculoRenda (renda){
      
    if(renda<0){
        console.log("Renda Invalida")
    }else if(renda> 0 && renda<=1000.00){
        console.log("Classe E")

    }else if(renda>1000.00 && renda <= 2500.00){
        console.log("Classe D")

    }else if(renda>2500.00 && renda <= 3100.00){
        console.log("Classe C")

    }else if(renda>3100.00 && renda <= 4800.00){
        console.log("Classe B")
    }else if (renda> 4800.00){
        console.log("Classe A")
    }

}


module.exports = calculoRenda;





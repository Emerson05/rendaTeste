
 function calculoRenda (renda){
      
    if(renda<0){
       return("Renda Invalida")
    }else if(renda>= 0 && renda<=1000.00){
        return("Classe E")

    }else if(renda>1000.00 && renda <= 2500.00){
        return("Classe D")

    }else if(renda>2500.00 && renda <= 3100.00){
        return("Classe C")

    }else if(renda>3100.00 && renda <= 4800.00){
        return("Classe B")
    }else if (renda> 4800.00){
        return("Classe A")
    }

}


module.exports = calculoRenda;





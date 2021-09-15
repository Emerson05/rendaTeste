
const calculoRenda = require('./classes')
var renda = 1


test("Valor da renda deve ser maior que Zero",()=>{
 
        var result = calculoRenda(parseFloat("0"))
        expect(result).toBe("Classe E");    
        
    })

test("Renda não pode ser tipo caractere",()=>{

    expect(typeof(renda)).toBe("number")
    
    })





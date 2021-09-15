
const calculoRenda = require('./classes')
var renda = -1


test("Valor da renda deve ser maior que Zero",()=>{
 
        calculoRenda(renda)
        expect(renda).toBeGreaterThan(0);    
        
    })

test("Renda não pode ser tipo caractere",()=>{

    expect(typeof(renda)).toBe("number")
    
    })





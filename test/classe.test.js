
const calculoRenda = require('./classes')




test("Valor da renda deve ser maior que Zero",()=>{
    var result = calculoRenda(parseFloat("-1"))
     expect(result).toBe("Renda Invalida"); 

    })

test("Renda Classe E (Maior que 0 e menor ou igual a 1000 )",()=>{
    var result = calculoRenda(parseFloat("10"))
    expect(result).toBe("Classe E")
})    

test("Renda Classe D (Maior que 1000 e menor igual a 2500 ",()=>{
    var result = calculoRenda(parseFloat("1500"))
    expect(result).toBe("Classe D")

})

test("Renda Classe C (Maior que 2500 e menor igual a 3100 ",()=>{
    var result = calculoRenda(parseFloat("2600.01"))
    expect(result).toBe("Classe C")

})

test("Renda Classe B (Maior que 3100 e menor igual a 4800 ",()=>{
    var result = calculoRenda(parseFloat("4200"))
    expect(result).toBe("Classe B")

})

test("Renda Classe A (Maior que 1000 e menor igual a 2500 ",()=>{
    var result = calculoRenda(parseFloat("5500"))
    expect(result).toBe("Classe A")

})






const input = require("../input");

// ATIVIDADE BANCÁRIA

(async () =>{
    let saldo = 300
    console.log("BEM VINDO AO BANCO DA GOSTOSA DA SUA MÃE👉👌");
    console.log("Digite 1 para depositar ou 2 para sacar:");
    let resposta = Number(await input())

    console.log("Digite o valor: ")
    let valor = Number (await input())

    if (resposta == "1"){
        if(valor < "1")
        console.log("Operação Inválida")
        else{
        saldo += valor
         console.log("Operação realizada com sucesso!🗿")
         console.log(`Valor atual na conta: R$ ${saldo}`)}

    }
    
if(resposta == "2"){
        saldo -= valor
        console.log("Operação realizada com sucesso!🗿")
        console.log(`Valor atual na conta: R$ ${saldo}`)

      

}

})()
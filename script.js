let evento = "Ano novo está chegando!!"
console.log (evento)

let cantora = "Mariah Carey"
let idade = 54
let anoNascimento = 2023 - (idade)
console.log (anoNascimento)

let quartaFeira = true
console.log (typeof quartaFeira)

let _idade = 18
if (_idade >= 18){
console.log ("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
}else{
console.log ("Sinto muito, mas assistirá da tv globo.")
}

let $idade = 16
if ($idade >= 18){
console.log ("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
}else{
console.log ("Sinto muito, mas assistirá da tv globo.")
}

let mes1 = "Junho"
let mes2 = "Agosto"
let mes3 = "Dezembro"

let aniversario = `Se você fizer aniversário em ${mes2} OU ${mes3} OU ${mes1}`

console.log(aniversario)


if (mes1 === "Junho" || mes2 === "Agosto" || mes3 === "Dezembro"){
    console.log (`Uma ou mais opções estão corretas.O mês escolhido foi o mês ${mes1} ou o mês ${mes2} ou o mês ${mes3} `)
    }else{
        console.log (`Algo de errado não está certo, o mês digitado foi o mês ${mes1}`)
    }

    if (mes1 != "Junho" || mes2 != "Agosto" || mes3 != "Dezembro"){
        console.log (`Uma ou mais opções estão corretas.O mês escolhido foi o mês ${mes1} ou o mês ${mes2} ou o mês ${mes3}`)
        }else{
            console.log (`Algo de errado não está certo, o mês digitado foi o mês ${mes1} ou o mês ${mes2} ou o mês ${mes3}`)
        }
const prompt = require('prompt-sync')();

let candidato1 = {nome: 'Juca', voto: 0};
let candidato2 = {nome: 'Melo', voto: 0};
let candidato3 = {nome: 'Chico', voto: 0};
let vBrancos = {nome: 'vBrancos', voto: 0};
let vNulos = {nome: 'vNulos', voto: 0};

function autorizaVoto(anoNascimento) {
    var anoAtual = new Date().getFullYear();
    if(anoAtual - anoNascimento >= 18){
        return'Obrigatorio';
    } 
    else if(anoAtual - anoNascimento == 16) {
        return'Opcional';

    } 
    else {
        return'Negado';
    }

}
let anoNascimento = autorizaVoto(+prompt("Digite o ano de nascimento: "));


function votocao(autorizacao, voto) {
    if(autorizacao == 'Negado') {
        console.log('Proibido votar!! ');
    } else {
        return voto;
    }

}
while(true) {

console.log("-------------------------------------------------------------------------------------------------------------------------------")
    let optEleitor = +prompt("Digite 1 para votar Juca, 2 para votar Melo,\n 3 votar Chico, 4 para votar nulo ou 5 para votar em branco. ")
console.log("---------------------------------------------------------------------------------------------------------------------------------")    

    votocao(anoNascimento, optEleitor);
    for(let i = 0; i < optEleitor; i++) {
        if(optEleitor === 1) {
            candidato1.voto +=1;
        }
        else if(optEleitor === 2) {
            candidato2.voto +=1;
        }
        else if(optEleitor === 3) {
            candidato3.voto +=1;
        }
        else if(optEleitor === 4) {
            vNulos.voto +=1;
        }
        else if(optEleitor === 5) {
            vBrancos.voto +=1;
        }

    }
    var pergunta = prompt("Deseja continuar votando? ")
    if(pergunta[0] == 'n') {
        break;
    }
}

function exibirResult() {
    
    var total = []
    total.push(candidato1);
    total.push(candidato2);
    total.push(candidato3);
    total.push(vNulos);
    total.push(vBrancos);

    total.sort((a, b) => a.optEleitor - b.optEleitor);
console.log(total);
console.log(`${total[0].nome} Ganhou a eleição com ${total[0].voto}`)
}
exibirResult();




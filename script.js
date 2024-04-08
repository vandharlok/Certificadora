/*
const fs = require('fs').promises;

async function lerArquivo(caminhoBase, nomeDoArquivo) {
    const caminhoCompleto = `${caminhoBase}/${nomeDoArquivo}`;
  
    try {
      const data = await fs.readFile(caminhoCompleto, 'utf8');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Ola, seja bem vindo ao projeto de Certificadora de Competencia 1")

console.log("Aqui apresento a voce usuario, 10 questoes de Fisica, com seu respectivo titulo e dificuldade: ")

let question_choosed
// Pede ao usuário para digitar o nome e aguarda a entrada
readline.question('Selecione a questao que deseja fazer :', question_choosed => {
    console.log(`Voce selecionou a questao ${question_choosed}!`);

    // Não esqueça de fechar a interface de leitura quando terminar
    readline.close();
});


function showQuestions(){
    switch (question_choosed) {
    case 1:
        console.log("Opção 1 selecionada: Titulo :  (facil).");
        lerArquivo('./questoes', 'question1.txt');
        break;
    case 2:
        console.log("Opção 2 selecionada:Titulo :  (facil)");
        break;
    case 3:
        console.log("Opção 3 selecionada: Titulo :  (facil)");
        break;
    case 4:
        console.log("Opção 4 selecionada: Titulo :  (facil)");
        break;
    case 5:
        console.log("Opção 5 selecionada: Titulo :  (medio)");
        break;
    case 6:
        console.log("Opção 6 selecionada: Titulo :  (medio)");
        break;
    case 7:
        console.log("Opção 7 selecionada: Titulo :  (medio)");
        break;
    case 8:
        console.log("Opção 8 selecionada: Titulo :  (dificil)");
        break;
    case 9:
        console.log("Opção 9 selecionada: Titulo :  (dificil)");
        break;
    case 10:
        console.log("Opção 10 selecionada: Titulo :  (dificil)");
        break;
    default:
        console.log("Opção inválida.");
    }
}



*/


const fs = require('fs').promises;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Ola, seja bem vindo ao projeto de Certificadora de Competencia 1")
console.log("Aqui apresento a voce usuario, 10 questoes de Fisica, com seu respectivo titulo e dificuldade: ")

// Função para ler arquivo
async function lerArquivo(caminhoBase, nomeDoArquivo) {
    const caminhoCompleto = `${caminhoBase}/${nomeDoArquivo}`;
  
    try {
      const data = await fs.readFile(caminhoCompleto, 'utf8');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
}

// Pede ao usuário para digitar o número da questão e aguarda a entrada
readline.question('Selecione a questao que deseja fazer :', question_choosed => {
    console.log(`Voce selecionou a questao ${question_choosed}!`);
    showQuestions(Number(question_choosed)); // Converte question_choosed para número e chama showQuestions
    readline.close();
});

function showQuestions(question_choosed){
    switch (question_choosed) {
    case 1:
        console.log("Opção 1 selecionada: Titulo :  (facil).");
        lerArquivo('./questoes', 'question1.txt');
        break;
    case 2:
        console.log("Opção 2 selecionada:Titulo :  (facil)");
        lerArquivo('./questoes', 'question2.txt');
        break;
    case 3:
        console.log("Opção 3 selecionada: Titulo :  (facil)");
        lerArquivo('./questoes', 'question3.txt');
        break;
    case 4:
        console.log("Opção 4 selecionada: Titulo :  (facil)");
        lerArquivo('./questoes', 'question4.txt');
        break;
    case 5:
        console.log("Opção 5 selecionada: Titulo :  (medio)");
        lerArquivo('./questoes', 'question5.txt');
        break;
    case 6:
        console.log("Opção 6 selecionada: Titulo :  (medio)");
        lerArquivo('./questoes', 'question6.txt');
        break;
    case 7:
        console.log("Opção 7 selecionada: Titulo :  (medio)");
        lerArquivo('./questoes', 'question7.txt');
        break;
    case 8:
        console.log("Opção 8 selecionada: Titulo :  (dificil)");
        lerArquivo('./questoes', 'question8.txt');
        break;
    case 9:
        console.log("Opção 9 selecionada: Titulo :  (dificil)");
        lerArquivo('./questoes', 'question9.txt');
        break;
    case 10:
        console.log("Opção 10 selecionada: Titulo :  (dificil)");
        lerArquivo('./questoes', 'question10.txt');
        break;
    default:
        console.log("Opção inválida.");
    }
}

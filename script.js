const fs = require('fs').promises;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function compareResult(right_result, answer, questionNumber) {
    const questionKey = 'question_' + questionNumber;

    if (answer === right_result[questionKey]) {
        console.log("A resposta fornecida está correta.");
    } else {
        console.log("A resposta fornecida está incorreta.");
    }
}

function showQuestions(question_choosed) {
    const path = './questoes';
    const name_file = `question${question_choosed}.txt`;
    console.log(`\nQuestao ${question_choosed} selecionada:`);
    readFile(path, name_file);
}

async function readFile(path, name_file) {
    const complete_path = `${path}/${name_file}`;
    try {
        const data = await fs.readFile(complete_path, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

async function showAllQuestions() {
    const questions = [];
    for (let i = 1; i <= 10; i++) {
        const question = await readFile('./questoes', `question${i}.txt`);
        if (question) {
            questions.push(question);
        }
    }
   
    selectQuestion(); 
}

async function invertQuestionsOrderAndShow() {
    const questions = [];
    for (let i = 10; i >= 1; i--) {
        const question = await readFile('./questoes', `question${i}.txt`);
        if (question) {
            questions.push(question);
        }
    }
    selectQuestion();
}

/////////////////////////////////////////////////////////////////////
////////////////////////INTERFACE////////////////////////////////////

console.log("Olá, seja bem-vindo ao projeto de Certificadora de Competência 1");

readline.question('Escolha uma opção:\n1) Listar todas as questões \n2) Listar em Nivel de Dificuldade [asc]   \n3) Listar em Nivel de Dificuldade [desc]  \n', async (opcao) => {
    if (opcao === '1') {
        showAllQuestions();
    } else if (opcao === '2') {
        showAllQuestions();
    } else if (opcao === '3') {
        console.log("Aqui estão suas questoes invertidas de modo descendente de dificuldade:\n");
        await invertQuestionsOrderAndShow();
    } else {
        console.log("Opção inválida.");
        readline.close();
    }
});

function selectQuestion() {
    readline.question('Selecione a questão que deseja fazer: ', question_choosed => {
        console.log(`\nVocê selecionou a questão ${question_choosed}!`);
        showQuestions(Number(question_choosed));

        readline.question('\nResolva a questão e digite a alternativa correta: \n', answer => {
            //nao ta certo o gabarito
            const gabarito = {
                question_1: "a",
                question_2: "b",
                question_3: "c",
                question_4: "d",
                question_5: "e",
                question_6: "a",
                question_7: "b",
                question_8: "c",
                question_9: "d",
                question_10: "e"
            };
            const number_quest = Number(question_choosed);
            compareResult(gabarito, answer, number_quest);

            readline.close();
        });
    });
}

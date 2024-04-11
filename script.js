document.addEventListener('DOMContentLoaded', async () => {
    await showAllQuestions();
    document.getElementById('questions-container').addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('question-header')) {
            const questionDiv = clickedElement.parentNode;
            const enunciadoElement = questionDiv.querySelector('.full-question');
            const alternativasElement = enunciadoElement.nextElementSibling;
            if (enunciadoElement.style.display === 'none') {
                enunciadoElement.style.display = 'block';
                alternativasElement.style.display = 'block';
                // Ocultar os títulos das outras questões
                const allQuestions = document.querySelectorAll('.question');
                allQuestions.forEach((question) => {
                    if (question !== questionDiv) {
                        question.querySelector('.full-question').style.display = 'none';
                        question.querySelector('.alternatives').style.display = 'none';
                    }
                });
            } else {
                enunciadoElement.style.display = 'none';
                alternativasElement.style.display = 'none';
            }
        }
    });
});

async function showQuestions(question_choosed, title, difficulty) {
    const path = './questoes';
    const name_file = `question${question_choosed}.txt`;

    try {
        const response = await fetch(`${path}/${name_file}`);
        if (!response.ok) {
            throw new Error('Erro ao carregar a questão');
        }
        const fullQuestion = await response.text();
        
        const questionsContainer = document.getElementById('questions-container');
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <div class="question-header">${title} - ${difficulty}</div>
            <p class="full-question" style="display:none;">${fullQuestion.split('\n')[2]}</p>
            <div class="alternatives" style="display:none;">
                ${fullQuestion.split('\n').slice(3, 8).map((alternative, index) => `<p>${String.fromCharCode(97 + index)}) ${alternative}</p>`).join('')}
            </div>`;
        
        questionsContainer.appendChild(questionDiv);
    } catch (err) {
        console.error(err);
    }
}

async function showAllQuestions() {
    const questionsContainer = document.getElementById('questions-container');

    if (questionsContainer.innerHTML !== '') {
        questionsContainer.innerHTML = '';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const { title, difficulty } = await readFile('./questoes', `question${i}.txt`);
        if (title !== null && difficulty !== null) {
            await showQuestions(i, title, difficulty);
        }
    }
}

async function invertQuestionsOrderAndShow() {
    const questionsContainer = document.getElementById('questions-container');

    if (questionsContainer.innerHTML !== '') {
        questionsContainer.innerHTML = '';
        return;
    }

    for (let i = 10; i >= 1; i--) {
        const { title, difficulty } = await readFile('./questoes', `question${i}.txt`);
        if (title !== null && difficulty !== null) {
            await showQuestions(i, title, difficulty);
        }
    }
}
async function readFile(path, name_file) {
    const complete_path = `${path}/${name_file}`;
    try {
        const response = await fetch(complete_path);
        if (!response.ok) {
            throw new Error('Erro ao carregar a questão');
        }
        const questionText = await response.text();
        const [title, difficulty] = questionText.trim().split('\n');
        return { title, difficulty };
    } catch (err) {
        console.error(err);
        return null;
    }
}
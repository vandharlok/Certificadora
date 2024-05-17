document.getElementById('sort-asc').addEventListener('click', () => loadQuestions('ASC'));
document.getElementById('sort-desc').addEventListener('click', () => loadQuestions('DESC'));

function loadQuestions(order) {
    fetch(`http://localhost:3000/api/question?order=${order}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('problems-list');
            list.innerHTML = '';
            data.forEach((question, index) => {
                const item = document.createElement('li');
                const questionTitle = document.createElement('div');
                questionTitle.textContent = `Questão ${index + 1}: ${question.title}`;
                item.appendChild(questionTitle);
                const selectButton = document.createElement('button');
                selectButton.textContent = 'Selecionar';
                selectButton.addEventListener('click', () => selectQuestion(item, question));
                item.appendChild(selectButton);
                list.appendChild(item);
            });
        })
        .catch(error => console.error('Erro ao buscar questões:', error));
}

// Função para verificar se o usuário já respondeu à questão
function hasUserAnsweredQuestion(questionId) {
    // Verifica se a resposta está armazenada no armazenamento local do navegador
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
    return userAnswers.hasOwnProperty(questionId);
}

// Função para salvar se o usuário já respondeu à questão
function markQuestionAsAnswered(questionId) {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
    userAnswers[questionId] = true;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

// Função para mostrar um prompt para confirmar se o usuário deseja responder novamente
function confirmReanswerQuestion(questionId, callback) {
    const shouldReanswer = confirm('Você já respondeu esta pergunta antes. Deseja responder novamente?');
    callback(questionId, shouldReanswer);
}

// Função para lidar com a resposta do usuário
function handleUserResponse(questionId, shouldReanswer) {
    if (shouldReanswer) {
        // O usuário deseja responder novamente, então remova a resposta anterior
        const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        delete userAnswers[questionId];
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

        // Chame a função para selecionar a questão
        selectQuestion(questionId);
    }
    // Se o usuário não quiser responder novamente, não faça nada
}

function selectQuestion(listItem, question) {
    if (hasUserAnsweredQuestion(question.id)) {
        confirmReanswerQuestion(question.id, handleUserResponse);
    } else {
        // Remova as opções de outras questões
        const allOptionsContainers = document.querySelectorAll('.options-container');
        allOptionsContainers.forEach(container => {
            if (container.parentNode !== listItem) {
                container.remove();
            }
        });

        // Verifique se as opções já estão visíveis para esta questão
        const existingOptionsContainer = listItem.querySelector('.options-container');
        if (existingOptionsContainer) {
            // Se já existirem, oculte-as
            existingOptionsContainer.remove();
            return;
        }

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');

        // Adicionar as opções como botões de rádio
        const form = document.createElement('form');
        form.id = `form-${question.id}`;

        for (const [key, value] of Object.entries(question.options)) {
            const optionElement = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `option-${question.id}`;
            input.value = key;
            input.id = `option-${question.id}-${key}`;
            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = `${key}: ${value}`;

            optionElement.appendChild(input);
            optionElement.appendChild(label);
            form.appendChild(optionElement);
        }

        // Adicionar botão de envio
        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Enviar';
        submitButton.addEventListener('click', () => {
            markQuestionAsAnswered(question.id);
            submitResponse(question.id, question.correctAnswer);
        });
        form.appendChild(submitButton);

        optionsContainer.appendChild(form);
        listItem.appendChild(optionsContainer);
    }
}

function submitResponse(questionId, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="option-${questionId}"]:checked`);
    if (!selectedOption) {
        alert('Por favor, selecione uma opção.');
        return;
    }

    const selectedValue = selectedOption.value;

    const isCorrect = selectedValue === correctAnswer;

    if (isCorrect) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }
}

loadQuestions('ASC');

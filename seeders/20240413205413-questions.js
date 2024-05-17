document.getElementById('sort-asc').addEventListener('click', () => loadQuestions('ASC'));
document.getElementById('sort-desc').addEventListener('click', () => loadQuestions('DESC'));

let currentSelectedItem = null;

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

function selectQuestion(listItem, question) {
    if (currentSelectedItem) {
        const optionsContainer = currentSelectedItem.querySelector('.options-container');
        if (optionsContainer) {
            optionsContainer.remove();
        }
    }

    if (currentSelectedItem === listItem) {
        currentSelectedItem = null;
        return;
    }

    if (currentSelectedItem) {
        currentSelectedItem.classList.remove('selected');
    }

    currentSelectedItem = listItem;
    listItem.classList.add('selected');

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    // Add the options as radio buttons
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

    // Add submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Enviar';
    submitButton.addEventListener('click', () => submitResponse(question.id, question.correctAnswer));
    form.appendChild(submitButton);

    optionsContainer.appendChild(form);
    listItem.appendChild(optionsContainer);
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

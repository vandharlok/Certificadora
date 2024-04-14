document.getElementById('sort-asc').addEventListener('click', () => loadQuestions('ASC'));
document.getElementById('sort-desc').addEventListener('click', () => loadQuestions('DESC'));

function loadQuestions(order) {
    fetch(`http://localhost:3000/api/question?order=${order}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('problems-list');
            list.innerHTML = '';
            data.forEach(question => {
                const item = document.createElement('li');
                item.textContent = `Título: ${question.title}, Dificuldade: ${question.difficulty}`;
                list.appendChild(item);
            });
        })
        .catch(error => console.error('Erro ao buscar questões:', error));
}

loadQuestions('ASC');

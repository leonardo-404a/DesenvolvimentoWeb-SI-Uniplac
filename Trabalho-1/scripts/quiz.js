
function checkAllQuestions() {
    const questionElements = document.querySelectorAll('.question');
    let answers = [];

    questionElements.forEach((_, index) => {
        const questionIndex = `question-${index}`;
        const selectedOption = document.querySelector(`input[name="${questionIndex}"]:checked`);
        const questionName = questions[index].question;

        if (selectedOption) {
            answers.push({
                question: questionName,
                answer: selectedOption.value
            });
        } else {
            answers.push({
                question: questionName,
                answer: null
            });
        }
    });

    localStorage.setItem('answers', JSON.stringify(answers));
}

 function finalizeQuiz() {
    checkAllQuestions();

    window.location.href = './statistics.html';
}

 function createQuestions() {
    const questionContainer = document.getElementById('question-container');

    const scrambledQuestions = questions.sort(() => Math.random() - 0.5);
    scrambledQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;

        questionElement.appendChild(questionTitle);

        question.options.forEach((option) => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('option');
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = `question-${index}`;
            optionElement.value = option;
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionLabel.htmlFor = `question-${index}`;

            optionContainer.addEventListener('click', () => {
                optionElement.checked = true;
                optionContainer.classList.add('optionSelected');

                const otherOptions = document.querySelectorAll(`input[name="question-${index}"]`);
                otherOptions.forEach((otherOption) => {
                    if (otherOption !== optionElement) {
                        otherOption.checked = false;
                        otherOption.parentElement.classList.remove('optionSelected');
                    }
                });
            });

            optionContainer.appendChild(optionElement);
            optionContainer.appendChild(optionLabel);
            questionElement.appendChild(optionContainer);
        });

        questionContainer.appendChild(questionElement);
    });
}
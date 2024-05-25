function generateStatistics() {
    const totalQuestionsElement = document.getElementById('total-questions');
    const correctAnswersElement = document.getElementById('correct-answers');
    const performanceElement = document.getElementById('performance');
    const questionsContainer = document.getElementById('questions-container');
    const feedbackElement = document.getElementById('feedback');
    const answers = JSON.parse(localStorage.getItem('answers'));

    totalQuestionsElement.textContent = questions.length;

    let correctAnswers = 0;
    questions.forEach((question) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;
        questionElement.appendChild(questionTitle);

        const userAnswer = answers.find(answer => answer.question === question.question).answer;
        const correctAnswer = question.correctAnswer;

        const answerElement = document.createElement('p');
        answerElement.textContent = `Sua resposta: ${userAnswer ?? 'Não respondida'}`;

        if (userAnswer == correctAnswer) {
            correctAnswers++;
            questionElement.classList.add('correct');
            answerElement.classList.add('correct');
        } else {
            questionElement.classList.add('incorrect');
            answerElement.classList.add('incorrect');
        }

        questionElement.appendChild(answerElement);

        questionsContainer.appendChild(questionElement);
    });

    correctAnswersElement.textContent = correctAnswers;
    performanceElement.textContent = `${((correctAnswers / questions.length) * 100).toFixed(2)}%`;

    if (correctAnswers / questions.length >= 0.7) {
        feedbackElement.textContent = 'Parabéns! Você foi muito bem no quiz!';
    } else if (correctAnswers / questions.length >= 0.5) {
        feedbackElement.textContent = 'Você foi bem, mas pode melhorar!';
    } else {
        feedbackElement.textContent = 'Estude mais e tente novamente!';
    }
}
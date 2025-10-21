let currentMode = '';
let currentWeek = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let totalQuestions = 0;
let userAnswers = [];
let questions = [];

function selectMode(mode) {
    currentMode = mode;
    document.getElementById('modeSelection').style.display = 'none';
    
    if (mode === 'all') {
        questions = [];
        for (let week in quizData) {
            questions = questions.concat(quizData[week].map((q, idx) => ({
                ...q,
                week: week,
                originalIndex: idx
            })));
        }
        totalQuestions = questions.length;
        currentWeek = 'All Weeks';
        startQuiz(null);
    } else {
        document.getElementById('weekSelection').style.display = 'block';
    }
}

function startQuiz(week) {
    if (week !== null) {
        currentWeek = week;
        questions = quizData[week].map((q, idx) => ({
            ...q,
            week: week,
            originalIndex: idx
        }));
        totalQuestions = questions.length;
    }
    
    document.getElementById('weekSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    
    document.getElementById('currentWeek').textContent = currentMode === 'all' ? `Week ${question.week}` : `Week ${currentWeek}`;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/${currentQuestionIndex}`;
    
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(option);
        
        const label = String.fromCharCode(65 + index);
        optionDiv.innerHTML = `
            <div class="option-label">${label}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('nextBtn').style.display = 'none';
}

function selectOption(option) {
    if (selectedAnswer !== null && document.getElementById('submitBtn').style.display === 'none') {
        return;
    }
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
    selectedAnswer = option;
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    userAnswers.push({
        question: question.question,
        userAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: isCorrect,
        week: question.week
    });
    
    if (isCorrect) {
        score++;
    }
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        const optionText = opt.querySelector('.option-text').textContent;
        
        if (optionText === question.correct) {
            opt.classList.add('correct');
        } else if (optionText === selectedAnswer && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedbackText');
    
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedbackText.textContent = '✓ Correct! Well done!';
    } else {
        feedback.className = 'feedback wrong';
        feedbackText.textContent = `✗ Incorrect. The correct answer is ${question.correct}`;
    }
    
    feedback.style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
    
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = totalQuestions - score;
    document.getElementById('percentage').textContent = percentage + '%';
}

function restartQuiz() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('modeSelection').style.display = 'block';
    currentMode = '';
    currentWeek = null;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    score = 0;
    totalQuestions = 0;
    userAnswers = [];
    questions = [];
}

function reviewAnswers() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    currentQuestionIndex = 0;
    loadReviewQuestion();
}

function loadReviewQuestion() {
    if (currentQuestionIndex >= userAnswers.length) {
        showResults();
        return;
    }
    
    const answer = userAnswers[currentQuestionIndex];
    const question = questions[currentQuestionIndex];
    
    document.getElementById('currentWeek').textContent = currentMode === 'all' ? `Week ${answer.week}` : `Week ${currentWeek}`;
    document.getElementById('questionCounter').textContent = `Review ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/${totalQuestions}`;
    
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = answer.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option disabled';
        
        if (option === answer.correctAnswer) {
            optionDiv.classList.add('correct');
        } else if (option === answer.userAnswer && !answer.isCorrect) {
            optionDiv.classList.add('wrong');
        }
        
        const label = String.fromCharCode(65 + index);
        optionDiv.innerHTML = `
            <div class="option-label">${label}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedbackText');
    
    if (answer.isCorrect) {
        feedback.className = 'feedback correct';
        feedbackText.textContent = '✓ You answered correctly!';
    } else {
        feedback.className = 'feedback wrong';
        feedbackText.textContent = `✗ Your answer: ${answer.userAnswer} | Correct answer: ${answer.correctAnswer}`;
    }
    
    feedback.style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
    
    if (currentQuestionIndex < userAnswers.length - 1) {
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('nextBtn').onclick = () => {
            currentQuestionIndex++;
            loadReviewQuestion();
        };
    } else {
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('nextBtn').textContent = 'Back to Results';
        document.getElementById('nextBtn').onclick = showResults;
    }
}

function backToMode() {
    document.getElementById('weekSelection').style.display = 'none';
    document.getElementById('modeSelection').style.display = 'block';
}
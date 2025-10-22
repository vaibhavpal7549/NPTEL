let currentMode = '';
let currentWeek = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let totalQuestions = 0;
let userAnswers = [];
let questions = [];
let questionStatus = []; // 'not-visited', 'not-answered', 'answered', 'marked'

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
        initializeQuiz();
    } else {
        document.getElementById('weekSelection').style.display = 'block';
    }
}

function startQuiz(week) {
    currentWeek = week;
    questions = quizData[week].map((q, idx) => ({
        ...q,
        week: week,
        originalIndex: idx
    }));
    totalQuestions = questions.length;
    
    document.getElementById('weekSelection').style.display = 'none';
    initializeQuiz();
}

function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(totalQuestions).fill(null);
    questionStatus = new Array(totalQuestions).fill('not-visited');
    
    document.getElementById('quizContainer').style.display = 'block';
    createQuestionPalette();
    loadQuestion();
}

function createQuestionPalette() {
    const paletteGrid = document.getElementById('paletteGrid');
    paletteGrid.innerHTML = '';
    
    for (let i = 0; i < totalQuestions; i++) {
        const paletteItem = document.createElement('div');
        paletteItem.className = 'palette-item not-visited';
        paletteItem.textContent = i + 1;
        paletteItem.onclick = () => jumpToQuestion(i);
        paletteGrid.appendChild(paletteItem);
    }
}

function updatePalette() {
    const paletteItems = document.querySelectorAll('.palette-item');
    paletteItems.forEach((item, index) => {
        item.className = 'palette-item ' + questionStatus[index];
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
    });
}

function loadQuestion() {
    if (questionStatus[currentQuestionIndex] === 'not-visited') {
        questionStatus[currentQuestionIndex] = 'not-answered';
    }
    
    const question = questions[currentQuestionIndex];
    selectedAnswer = userAnswers[currentQuestionIndex];
    
    document.getElementById('currentWeek').textContent = currentMode === 'all' ? `Week ${question.week}` : `Week ${currentWeek}`;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('scoreDisplay').textContent = `Answered: ${answeredCount}/${totalQuestions}`;
    
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (option === selectedAnswer) {
            optionDiv.classList.add('selected');
        }
        optionDiv.onclick = () => selectOption(option);
        
        const label = String.fromCharCode(65 + index);
        optionDiv.innerHTML = `
            <div class="option-label">${label}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('feedback').style.display = 'none';
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = false;
    
    // Update mark for review button text
    const isMarked = questionStatus[currentQuestionIndex] === 'marked';
    document.getElementById('markReviewBtn').textContent = isMarked ? 'Unmark' : 'Mark for Review';
    
    updatePalette();
}

function selectOption(option) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
    selectedAnswer = option;
    userAnswers[currentQuestionIndex] = option;
    
    // Update status to answered if not marked
    if (questionStatus[currentQuestionIndex] !== 'marked') {
        questionStatus[currentQuestionIndex] = 'answered';
    }
    
    updatePalette();
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('scoreDisplay').textContent = `Answered: ${answeredCount}/${totalQuestions}`;
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion();
}

function markForReview() {
    if (questionStatus[currentQuestionIndex] === 'marked') {
        // Unmark - set to answered if has answer, otherwise not-answered
        questionStatus[currentQuestionIndex] = userAnswers[currentQuestionIndex] !== null ? 'answered' : 'not-answered';
    } else {
        // Mark for review
        questionStatus[currentQuestionIndex] = 'marked';
    }
    
    const isMarked = questionStatus[currentQuestionIndex] === 'marked';
    document.getElementById('markReviewBtn').textContent = isMarked ? 'Unmark' : 'Mark for Review';
    
    updatePalette();
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    selectedAnswer = null;
    
    // Update status
    if (questionStatus[currentQuestionIndex] === 'answered') {
        questionStatus[currentQuestionIndex] = 'not-answered';
    }
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    updatePalette();
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('scoreDisplay').textContent = `Answered: ${answeredCount}/${totalQuestions}`;
}

function submitQuiz() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const unansweredCount = totalQuestions - answeredCount;
    
    let confirmMessage = `You have answered ${answeredCount} out of ${totalQuestions} questions.`;
    if (unansweredCount > 0) {
        confirmMessage += `\n${unansweredCount} question(s) are not answered.`;
    }
    confirmMessage += '\n\nDo you want to submit the quiz?';
    
    if (confirm(confirmMessage)) {
        calculateResults();
        showResults();
    }
}

function calculateResults() {
    score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    
    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] !== null) {
            if (userAnswers[i] === questions[i].correct) {
                score++;
                correctCount++;
            } else {
                wrongCount++;
            }
        }
    }
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const correctCount = score;
    const wrongCount = answeredCount - correctCount;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('answeredCount').textContent = answeredCount;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
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
    questionStatus = [];
}

function reviewAnswers() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    currentQuestionIndex = 0;
    loadReviewQuestion();
}

function loadReviewQuestion() {
    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    document.getElementById('currentWeek').textContent = currentMode === 'all' ? `Week ${question.week}` : `Week ${currentWeek}`;
    document.getElementById('questionCounter').textContent = `Review ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/${totalQuestions}`;
    
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (option === question.correct) {
            optionDiv.classList.add('correct');
        } else if (option === userAnswer && userAnswer !== question.correct) {
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
    
    if (userAnswer === null) {
        feedback.className = 'feedback wrong';
        feedbackText.textContent = `⚠ Not Answered | Correct answer: ${question.correct}`;
    } else if (userAnswer === question.correct) {
        feedback.className = 'feedback correct';
        feedbackText.textContent = '✓ You answered correctly!';
    } else {
        feedback.className = 'feedback wrong';
        feedbackText.textContent = `✗ Your answer: ${userAnswer} | Correct answer: ${question.correct}`;
    }
    
    feedback.style.display = 'block';
    
    // Hide action buttons and show navigation only
    document.getElementById('markReviewBtn').style.display = 'none';
    document.getElementById('clearBtn').style.display = 'none';
    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('prevBtn').onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadReviewQuestion();
        }
    };
    
    if (currentQuestionIndex < totalQuestions - 1) {
        document.getElementById('nextBtn').textContent = 'Next →';
        document.getElementById('nextBtn').onclick = () => {
            currentQuestionIndex++;
            loadReviewQuestion();
        };
    } else {
        document.getElementById('nextBtn').textContent = 'Back to Results';
        document.getElementById('nextBtn').onclick = showResults;
    }
    
    // Hide question palette in review mode
    document.getElementById('questionPalette').style.display = 'none';
}

function backToMode() {
    document.getElementById('weekSelection').style.display = 'none';
    document.getElementById('modeSelection').style.display = 'block';
}

function backToModeFromQuiz() {
    const confirmExit = confirm('Are you sure you want to exit? Your progress will be lost.');
    if (confirmExit) {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('modeSelection').style.display = 'block';
        
        // Reset everything
        currentMode = '';
        currentWeek = null;
        currentQuestionIndex = 0;
        selectedAnswer = null;
        score = 0;
        totalQuestions = 0;
        userAnswers = [];
        questions = [];
        questionStatus = [];
        
        // Show palette and buttons again (in case coming from review)
        document.getElementById('questionPalette').style.display = 'block';
        document.getElementById('markReviewBtn').style.display = 'inline-block';
        document.getElementById('clearBtn').style.display = 'inline-block';
    }
}
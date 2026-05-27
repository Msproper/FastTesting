// Lesson 1 — Quiz & Practice Logic

(function () {
    'use strict';

    // State
    let answeredCount = 0;
    let correctCount = 0;
    const totalQuestions = quizData.length;
    const practiceResults = {}; // taskIndex -> true/false
    const totalPracticePoints = practiceData.reduce((sum, t) => sum + t.points, 0);

    // DOM
    const quizContainer = document.getElementById('quizContainer');
    const practiceContainer = document.getElementById('practiceContainer');
    const progressFill = document.getElementById('progressFill');
    const progressCount = document.getElementById('progressCount');
    const scoreCard = document.getElementById('scoreCard');
    const scoreEmoji = document.getElementById('scoreEmoji');
    const scoreText = document.getElementById('scoreText');
    const scoreNumber = document.getElementById('scoreNumber');
    const quizSection = document.getElementById('quiz');
    const practiceSection = document.getElementById('practice');
    const btnQuiz = document.getElementById('btnQuiz');
    const btnPractice = document.getElementById('btnPractice');
    const btnResults = document.getElementById('btnResults');
    const finalResultSection = document.getElementById('finalResult');

    // ===== Section Navigation =====
    btnQuiz.addEventListener('click', () => switchSection('quiz'));
    btnPractice.addEventListener('click', () => switchSection('practice'));
    btnResults.addEventListener('click', () => switchSection('results'));

    // Also handle nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#quiz') {
                e.preventDefault();
                switchSection('quiz');
                window.scrollTo({ top: quizSection.offsetTop - 100, behavior: 'smooth' });
            } else if (href === '#practice') {
                e.preventDefault();
                switchSection('practice');
                window.scrollTo({ top: practiceSection.offsetTop - 100, behavior: 'smooth' });
            }
        });
    });

    function switchSection(section) {
        quizSection.style.display = 'none';
        practiceSection.style.display = 'none';
        finalResultSection.style.display = 'none';

        btnQuiz.classList.remove('active');
        btnPractice.classList.remove('active');
        btnResults.classList.remove('active');

        if (section === 'quiz') {
            quizSection.style.display = '';
            btnQuiz.classList.add('active');
        } else if (section === 'practice') {
            practiceSection.style.display = '';
            btnPractice.classList.add('active');
        } else if (section === 'results') {
            finalResultSection.style.display = '';
            btnResults.classList.add('active');
            renderFinalResult();
        }
    }

    // ===== Render Quiz =====
    function renderQuiz() {
        quizContainer.innerHTML = '';

        quizData.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'quiz-question';
            questionEl.id = `question-${index}`;
            questionEl.style.animationDelay = `${index * 0.05}s`;

            const markers = ['A', 'B', 'C', 'D'];

            let codeBlock = '';
            if (q.code) {
                codeBlock = `<div class="question-code">${highlightCode(q.code)}</div>`;
            }

            let optionsHTML = q.options.map((opt, i) => `
                <div class="option" data-question="${index}" data-option="${i}" id="option-${index}-${i}">
                    <span class="option-marker">${markers[i]}</span>
                    <span class="option-text">${opt}</span>
                </div>
            `).join('');

            questionEl.innerHTML = `
                <div class="question-header">
                    <span class="question-num">${index + 1}</span>
                    <span class="question-text">${q.question}</span>
                </div>
                ${codeBlock}
                <div class="options">
                    ${optionsHTML}
                </div>
                <div class="explanation" id="explanation-${index}">
                    <div class="explanation-label">💡 Объяснение</div>
                    <div>${q.explanation}</div>
                </div>
            `;

            quizContainer.appendChild(questionEl);
        });

        // Add click handlers
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', handleOptionClick);
        });
    }

    // ===== Handle Option Click =====
    function handleOptionClick(e) {
        const optionEl = e.currentTarget;
        const questionIndex = parseInt(optionEl.dataset.question);
        const optionIndex = parseInt(optionEl.dataset.option);
        const questionEl = document.getElementById(`question-${questionIndex}`);

        // Already answered?
        if (questionEl.classList.contains('answered-correct') ||
            questionEl.classList.contains('answered-wrong')) {
            return;
        }

        const correctIndex = quizData[questionIndex].correct;
        const isCorrect = optionIndex === correctIndex;

        // Disable all options
        questionEl.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
        });

        // Mark selected
        optionEl.classList.add('selected');

        if (isCorrect) {
            optionEl.classList.add('correct');
            questionEl.classList.add('answered-correct');
            correctCount++;
        } else {
            optionEl.classList.add('wrong');
            questionEl.classList.add('answered-wrong');
            // Show correct answer
            const correctOption = document.getElementById(`option-${questionIndex}-${correctIndex}`);
            correctOption.classList.add('correct-reveal');
        }

        // Show explanation
        const explanationEl = document.getElementById(`explanation-${questionIndex}`);
        explanationEl.classList.add('show');

        // Update progress
        answeredCount++;
        updateProgress();

        // Check if all done
        if (answeredCount === totalQuestions) {
            showScore();
        }
    }

    // ===== Update Progress =====
    function updateProgress() {
        const percent = (answeredCount / totalQuestions) * 100;
        progressFill.style.width = `${percent}%`;
        progressCount.textContent = `${answeredCount} / ${totalQuestions}`;
    }

    // ===== Show Score =====
    function showScore() {
        const percent = (correctCount / totalQuestions) * 100;

        scoreCard.classList.add('show');
        scoreNumber.textContent = `${correctCount}/${totalQuestions}`;

        if (percent >= 90) {
            scoreEmoji.textContent = '🏆';
            scoreText.textContent = 'Превосходный результат!';
        } else if (percent >= 70) {
            scoreEmoji.textContent = '🎉';
            scoreText.textContent = 'Отличная работа!';
        } else if (percent >= 50) {
            scoreEmoji.textContent = '👍';
            scoreText.textContent = 'Неплохо, но есть куда расти!';
        } else {
            scoreEmoji.textContent = '📚';
            scoreText.textContent = 'Стоит повторить материал';
        }

        scoreCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ===== Syntax Highlighting (simple) =====
    function highlightCode(code) {
        // Escape HTML first
        let result = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Comments
        result = result.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');

        // Strings
        result = result.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="string">$1</span>');

        // Keywords
        const keywords = ['int', 'double', 'string', 'bool', 'char', 'var', 'const', 'byte', 'short', 'long', 'float', 'true', 'false', 'new'];
        keywords.forEach(kw => {
            const regex = new RegExp(`\\b(${kw})\\b`, 'g');
            result = result.replace(regex, '<span class="keyword">$1</span>');
        });

        // Methods
        result = result.replace(/\b(Console)\b/g, '<span class="type">$1</span>');
        result = result.replace(/\.(WriteLine|Write|ReadLine)\b/g, '.<span class="method">$1</span>');

        // Numbers (only if not inside another span)
        result = result.replace(/\b(\d+\.?\d*)\b/g, function (match, num, offset) {
            // Simple check to avoid replacing inside spans
            const before = result.substring(Math.max(0, offset - 20), offset);
            if (before.includes('class=') || before.includes('span>')) return match;
            return `<span class="number">${num}</span>`;
        });

        return result;
    }

    // ===== Render Practice =====
    function renderPractice() {
        practiceContainer.innerHTML = '';

        practiceData.forEach((task, index) => {
            const taskEl = document.createElement('div');
            taskEl.className = 'practice-task';
            taskEl.id = `practice-task-${index}`;
            taskEl.style.animationDelay = `${index * 0.08}s`;

            let exampleHTML = '';

            if (task.example.type === 'output') {
                exampleHTML = `
                    <div class="task-example-label">Ожидаемый вывод в консоль:</div>
                    <div class="task-example"><pre style="margin:0;font-family:inherit;white-space:pre;color:inherit;">${escapeHtml(task.example.content)}</pre></div>
                `;
            } else if (task.example.type === 'io') {
                exampleHTML = `
                    <div class="task-example-label">Условие:</div>
                    <div class="task-example"><pre style="margin:0;font-family:inherit;white-space:pre;color:inherit;">${highlightCode(task.example.code)}</pre></div>
                    <div class="task-io">
                        <div class="task-io-block">
                            <div class="task-io-label">Ожидаемый вывод</div>
                            <div class="task-io-content">${escapeHtml(task.example.output)}</div>
                        </div>
                    </div>
                `;
            }

            // Difficulty badge color
            let difficultyClass = 'difficulty-easy';
            if (task.difficulty === 'Средняя') difficultyClass = 'difficulty-medium';
            if (task.difficulty === 'Сложная') difficultyClass = 'difficulty-hard';

            taskEl.innerHTML = `
                <div class="task-header">
                    <span class="task-num">${index + 1}</span>
                    <span class="task-title">${task.title}</span>
                    <div class="task-meta-badges">
                        <span class="task-difficulty ${difficultyClass}">${task.difficulty}</span>
                        <span class="task-points-badge">${task.points} баллов</span>
                    </div>
                </div>
                <p class="task-desc">${task.description}</p>
                ${exampleHTML}
                <div class="task-actions" id="task-actions-${index}">
                    <button class="task-btn task-btn-success" data-task="${index}" data-result="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Справился
                    </button>
                    <button class="task-btn task-btn-fail" data-task="${index}" data-result="false">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        Не справился
                    </button>
                </div>
                <div class="task-result-badge" id="task-result-${index}" style="display:none;"></div>
            `;

            practiceContainer.appendChild(taskEl);
        });

        // Add practice button handlers
        document.querySelectorAll('.task-btn').forEach(btn => {
            btn.addEventListener('click', handlePracticeClick);
        });
    }

    // ===== Handle Practice Button Click =====
    function handlePracticeClick(e) {
        const btn = e.currentTarget;
        const taskIndex = parseInt(btn.dataset.task);
        const result = btn.dataset.result === 'true';
        const taskEl = document.getElementById(`practice-task-${taskIndex}`);
        const actionsEl = document.getElementById(`task-actions-${taskIndex}`);
        const resultBadge = document.getElementById(`task-result-${taskIndex}`);
        const task = practiceData[taskIndex];

        // Save result
        practiceResults[taskIndex] = result;

        // Hide buttons
        actionsEl.style.display = 'none';

        // Show result badge
        resultBadge.style.display = 'flex';
        if (result) {
            taskEl.classList.add('task-completed');
            taskEl.classList.remove('task-failed');
            resultBadge.className = 'task-result-badge result-success';
            resultBadge.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Справился — <strong>+${task.points} баллов</strong></span>
            `;
        } else {
            taskEl.classList.add('task-failed');
            taskEl.classList.remove('task-completed');
            resultBadge.className = 'task-result-badge result-fail';
            resultBadge.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span>Не справился — <strong>0 баллов</strong></span>
            `;
        }

        // Add undo button
        const undoBtn = document.createElement('button');
        undoBtn.className = 'task-undo-btn';
        undoBtn.textContent = 'Изменить ответ';
        undoBtn.addEventListener('click', () => {
            delete practiceResults[taskIndex];
            actionsEl.style.display = '';
            resultBadge.style.display = 'none';
            taskEl.classList.remove('task-completed', 'task-failed');
            undoBtn.remove();
        });
        resultBadge.appendChild(undoBtn);
    }

    // ===== Render Final Result =====
    function renderFinalResult() {
        const container = document.getElementById('finalResultContent');

        // Calculate scores
        const quizPoints = correctCount; // 1 point per correct answer
        const maxQuizPoints = totalQuestions;

        let practicePoints = 0;
        let practiceAnswered = 0;
        practiceData.forEach((task, index) => {
            if (practiceResults[index] !== undefined) {
                practiceAnswered++;
                if (practiceResults[index]) {
                    practicePoints += task.points;
                }
            }
        });

        const totalPoints = quizPoints + practicePoints;
        const maxTotalPoints = maxQuizPoints + totalPracticePoints;
        const percent = maxTotalPoints > 0 ? (totalPoints / maxTotalPoints) * 100 : 0;

        // Determine message
        let emoji, message, subMessage;
        if (answeredCount === 0 && practiceAnswered === 0) {
            emoji = '⏳';
            message = 'Тест ещё не пройден';
            subMessage = 'Пройди тестирование и выполни практические задания, чтобы увидеть результат.';
        } else if (percent >= 90) {
            emoji = '🏆';
            message = 'Превосходно!';
            subMessage = 'Ты отлично усвоил материал занятия. Так держать!';
        } else if (percent >= 70) {
            emoji = '🎉';
            message = 'Отличная работа!';
            subMessage = 'Ты хорошо разобрался в теме. Осталось закрепить несколько моментов.';
        } else if (percent >= 50) {
            emoji = '👍';
            message = 'Неплохо!';
            subMessage = 'Базу ты знаешь, но стоит ещё раз повторить некоторые темы.';
        } else {
            emoji = '📚';
            message = 'Нужно повторить';
            subMessage = 'Рекомендую ещё раз разобрать материал занятия и попробовать снова.';
        }

        // Build practice breakdown rows
        let practiceRows = '';
        practiceData.forEach((task, index) => {
            const answered = practiceResults[index] !== undefined;
            const passed = practiceResults[index] === true;
            let statusHTML;
            if (!answered) {
                statusHTML = '<span class="result-pending">—</span>';
            } else if (passed) {
                statusHTML = `<span class="result-passed">+${task.points}</span>`;
            } else {
                statusHTML = '<span class="result-not-passed">0</span>';
            }
            practiceRows += `
                <div class="result-row">
                    <span class="result-row-name">${task.title}</span>
                    <span class="result-row-diff">${task.difficulty}</span>
                    <span class="result-row-max">${task.points} б.</span>
                    ${statusHTML}
                </div>
            `;
        });

        container.innerHTML = `
            <div class="final-score-hero">
                <div class="final-emoji">${emoji}</div>
                <h2 class="final-message">${message}</h2>
                <p class="final-sub-message">${subMessage}</p>
                <div class="final-total">
                    <span class="final-total-number">${totalPoints}</span>
                    <span class="final-total-sep">/</span>
                    <span class="final-total-max">${maxTotalPoints}</span>
                    <span class="final-total-label">баллов</span>
                </div>
            </div>

            <div class="final-breakdown">
                <div class="breakdown-section">
                    <div class="breakdown-header">
                        <span class="breakdown-title">📝 Тестирование</span>
                        <span class="breakdown-score">${quizPoints} / ${maxQuizPoints}</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="width: ${maxQuizPoints > 0 ? (quizPoints / maxQuizPoints) * 100 : 0}%"></div>
                    </div>
                    <div class="breakdown-detail">
                        Пройдено вопросов: ${answeredCount} из ${totalQuestions} · Правильных: ${correctCount}
                    </div>
                </div>

                <div class="breakdown-section">
                    <div class="breakdown-header">
                        <span class="breakdown-title">💻 Практика</span>
                        <span class="breakdown-score">${practicePoints} / ${totalPracticePoints}</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill breakdown-fill-green" style="width: ${totalPracticePoints > 0 ? (practicePoints / totalPracticePoints) * 100 : 0}%"></div>
                    </div>
                    <div class="result-table">
                        <div class="result-row result-row-header">
                            <span class="result-row-name">Задание</span>
                            <span class="result-row-diff">Сложность</span>
                            <span class="result-row-max">Макс.</span>
                            <span>Результат</span>
                        </div>
                        ${practiceRows}
                    </div>
                </div>
            </div>
        `;
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ===== Init =====
    renderQuiz();
    renderPractice();
    updateProgress();

})();

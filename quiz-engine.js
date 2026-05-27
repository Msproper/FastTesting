// Shared Quiz & Practice Engine — used by all lessons

(function () {
    'use strict';

    let answeredCount = 0;
    let correctCount = 0;
    const totalQuestions = quizData.length;
    const practiceResults = {};
    const totalPracticePoints = practiceData.reduce((sum, t) => sum + t.points, 0);

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

    btnQuiz.addEventListener('click', () => switchSection('quiz'));
    btnPractice.addEventListener('click', () => switchSection('practice'));
    btnResults.addEventListener('click', () => switchSection('results'));

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

    function renderQuiz() {
        quizContainer.innerHTML = '';
        quizData.forEach((q, index) => {
            const el = document.createElement('div');
            el.className = 'quiz-question';
            el.id = `question-${index}`;
            el.style.animationDelay = `${index * 0.05}s`;
            const markers = ['A', 'B', 'C', 'D'];
            let codeBlock = q.code ? `<div class="question-code">${highlightCode(q.code)}</div>` : '';
            let optionsHTML = q.options.map((opt, i) => `
                <div class="option" data-question="${index}" data-option="${i}" id="option-${index}-${i}">
                    <span class="option-marker">${markers[i]}</span>
                    <span class="option-text">${opt}</span>
                </div>`).join('');
            el.innerHTML = `
                <div class="question-header">
                    <span class="question-num">${index + 1}</span>
                    <span class="question-text">${q.question}</span>
                </div>
                ${codeBlock}
                <div class="options">${optionsHTML}</div>
                <div class="explanation" id="explanation-${index}">
                    <div class="explanation-label">💡 Объяснение</div>
                    <div>${q.explanation}</div>
                </div>`;
            quizContainer.appendChild(el);
        });
        document.querySelectorAll('.option').forEach(o => o.addEventListener('click', handleOptionClick));
    }

    function handleOptionClick(e) {
        const optionEl = e.currentTarget;
        const qi = parseInt(optionEl.dataset.question);
        const oi = parseInt(optionEl.dataset.option);
        const questionEl = document.getElementById(`question-${qi}`);
        if (questionEl.classList.contains('answered-correct') || questionEl.classList.contains('answered-wrong')) return;
        const correctIndex = quizData[qi].correct;
        const isCorrect = oi === correctIndex;
        questionEl.querySelectorAll('.option').forEach(o => o.classList.add('disabled'));
        optionEl.classList.add('selected');
        if (isCorrect) {
            optionEl.classList.add('correct');
            questionEl.classList.add('answered-correct');
            correctCount++;
        } else {
            optionEl.classList.add('wrong');
            questionEl.classList.add('answered-wrong');
            document.getElementById(`option-${qi}-${correctIndex}`).classList.add('correct-reveal');
        }
        document.getElementById(`explanation-${qi}`).classList.add('show');
        answeredCount++;
        updateProgress();
        if (answeredCount === totalQuestions) showScore();
    }

    function updateProgress() {
        progressFill.style.width = `${(answeredCount / totalQuestions) * 100}%`;
        progressCount.textContent = `${answeredCount} / ${totalQuestions}`;
    }

    function showScore() {
        const pct = (correctCount / totalQuestions) * 100;
        scoreCard.classList.add('show');
        scoreNumber.textContent = `${correctCount}/${totalQuestions}`;
        if (pct >= 90) { scoreEmoji.textContent = '🏆'; scoreText.textContent = 'Превосходный результат!'; }
        else if (pct >= 70) { scoreEmoji.textContent = '🎉'; scoreText.textContent = 'Отличная работа!'; }
        else if (pct >= 50) { scoreEmoji.textContent = '👍'; scoreText.textContent = 'Неплохо, но есть куда расти!'; }
        else { scoreEmoji.textContent = '📚'; scoreText.textContent = 'Стоит повторить материал'; }
        scoreCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

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
        const keywords = ['int', 'double', 'bool', 'char', 'var', 'const', 'byte', 'short', 'long', 'float', 'true', 'false', 'new'];
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

    function renderPractice() {
        practiceContainer.innerHTML = '';
        practiceData.forEach((task, index) => {
            const el = document.createElement('div');
            el.className = 'practice-task';
            el.id = `practice-task-${index}`;
            el.style.animationDelay = `${index * 0.08}s`;
            let exHTML = '';
            if (task.example.type === 'output') {
                exHTML = `<div class="task-example-label">Ожидаемый вывод в консоль:</div>
                    <div class="task-example"><pre style="margin:0;font-family:inherit;white-space:pre;color:inherit;">${escapeHtml(task.example.content)}</pre></div>`;
            } else if (task.example.type === 'io') {
                exHTML = `<div class="task-example-label">Условие:</div>
                    <div class="task-example"><pre style="margin:0;font-family:inherit;white-space:pre;color:inherit;">${highlightCode(task.example.code)}</pre></div>
                    <div class="task-io"><div class="task-io-block">
                        <div class="task-io-label">Ожидаемый вывод</div>
                        <div class="task-io-content">${escapeHtml(task.example.output)}</div>
                    </div></div>`;
            }
            let dc = task.difficulty === 'Средняя' ? 'difficulty-medium' : task.difficulty === 'Сложная' ? 'difficulty-hard' : 'difficulty-easy';
            el.innerHTML = `
                <div class="task-header">
                    <span class="task-num">${index + 1}</span>
                    <span class="task-title">${task.title}</span>
                    <div class="task-meta-badges">
                        <span class="task-difficulty ${dc}">${task.difficulty}</span>
                        <span class="task-points-badge">${task.points} баллов</span>
                    </div>
                </div>
                <p class="task-desc">${task.description}</p>
                ${exHTML}
                <div class="task-actions" id="task-actions-${index}">
                    <button class="task-btn task-btn-success" data-task="${index}" data-result="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Справился</button>
                    <button class="task-btn task-btn-fail" data-task="${index}" data-result="false">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Не справился</button>
                </div>
                <div class="task-result-badge" id="task-result-${index}" style="display:none;"></div>`;
            practiceContainer.appendChild(el);
        });
        document.querySelectorAll('.task-btn').forEach(b => b.addEventListener('click', handlePracticeClick));
    }

    function handlePracticeClick(e) {
        const btn = e.currentTarget;
        const ti = parseInt(btn.dataset.task);
        const result = btn.dataset.result === 'true';
        const taskEl = document.getElementById(`practice-task-${ti}`);
        const actionsEl = document.getElementById(`task-actions-${ti}`);
        const badge = document.getElementById(`task-result-${ti}`);
        const task = practiceData[ti];
        practiceResults[ti] = result;
        actionsEl.style.display = 'none';
        badge.style.display = 'flex';
        if (result) {
            taskEl.classList.add('task-completed'); taskEl.classList.remove('task-failed');
            badge.className = 'task-result-badge result-success';
            badge.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Справился — <strong>+${task.points} баллов</strong></span>`;
        } else {
            taskEl.classList.add('task-failed'); taskEl.classList.remove('task-completed');
            badge.className = 'task-result-badge result-fail';
            badge.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Не справился — <strong>0 баллов</strong></span>`;
        }
        const undo = document.createElement('button');
        undo.className = 'task-undo-btn'; undo.textContent = 'Изменить ответ';
        undo.addEventListener('click', () => {
            delete practiceResults[ti]; actionsEl.style.display = ''; badge.style.display = 'none';
            taskEl.classList.remove('task-completed', 'task-failed'); undo.remove();
        });
        badge.appendChild(undo);
    }

    function renderFinalResult() {
        const container = document.getElementById('finalResultContent');
        const quizPoints = correctCount;
        let practicePoints = 0, practiceAnswered = 0;
        practiceData.forEach((t, i) => { if (practiceResults[i] !== undefined) { practiceAnswered++; if (practiceResults[i]) practicePoints += t.points; } });
        const totalPoints = quizPoints + practicePoints;
        const maxTotal = totalQuestions + totalPracticePoints;
        const pct = maxTotal > 0 ? (totalPoints / maxTotal) * 100 : 0;
        let emoji, msg, sub;
        if (answeredCount === 0 && practiceAnswered === 0) { emoji = '⏳'; msg = 'Тест ещё не пройден'; sub = 'Пройди тестирование и выполни практические задания, чтобы увидеть результат.'; }
        else if (pct >= 90) { emoji = '🏆'; msg = 'Превосходно!'; sub = 'Ты отлично усвоил материал занятия. Так держать!'; }
        else if (pct >= 70) { emoji = '🎉'; msg = 'Отличная работа!'; sub = 'Ты хорошо разобрался в теме. Осталось закрепить несколько моментов.'; }
        else if (pct >= 50) { emoji = '👍'; msg = 'Неплохо!'; sub = 'Базу ты знаешь, но стоит ещё раз повторить некоторые темы.'; }
        else { emoji = '📚'; msg = 'Нужно повторить'; sub = 'Рекомендую ещё раз разобрать материал занятия и попробовать снова.'; }
        let rows = '';
        practiceData.forEach((t, i) => {
            const a = practiceResults[i] !== undefined;
            const p = practiceResults[i] === true;
            let s = !a ? '<span class="result-pending">—</span>' : p ? `<span class="result-passed">+${t.points}</span>` : '<span class="result-not-passed">0</span>';
            rows += `<div class="result-row"><span class="result-row-name">${t.title}</span><span class="result-row-diff">${t.difficulty}</span><span class="result-row-max">${t.points} б.</span>${s}</div>`;
        });
        container.innerHTML = `
            <div class="final-score-hero">
                <div class="final-emoji">${emoji}</div>
                <h2 class="final-message">${msg}</h2>
                <p class="final-sub-message">${sub}</p>
                <div class="final-total"><span class="final-total-number">${totalPoints}</span><span class="final-total-sep">/</span><span class="final-total-max">${maxTotal}</span><span class="final-total-label">баллов</span></div>
            </div>
            <div class="final-breakdown">
                <div class="breakdown-section">
                    <div class="breakdown-header"><span class="breakdown-title">📝 Тестирование</span><span class="breakdown-score">${quizPoints} / ${totalQuestions}</span></div>
                    <div class="breakdown-bar"><div class="breakdown-fill" style="width:${totalQuestions > 0 ? (quizPoints / totalQuestions) * 100 : 0}%"></div></div>
                    <div class="breakdown-detail">Пройдено вопросов: ${answeredCount} из ${totalQuestions} · Правильных: ${correctCount}</div>
                </div>
                <div class="breakdown-section">
                    <div class="breakdown-header"><span class="breakdown-title">💻 Практика</span><span class="breakdown-score">${practicePoints} / ${totalPracticePoints}</span></div>
                    <div class="breakdown-bar"><div class="breakdown-fill breakdown-fill-green" style="width:${totalPracticePoints > 0 ? (practicePoints / totalPracticePoints) * 100 : 0}%"></div></div>
                    <div class="result-table">
                        <div class="result-row result-row-header"><span class="result-row-name">Задание</span><span class="result-row-diff">Сложность</span><span class="result-row-max">Макс.</span><span>Результат</span></div>
                        ${rows}
                    </div>
                </div>
            </div>`;
    }

    function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    document.addEventListener('DOMContentLoaded', () => {
        renderQuiz();
        renderPractice();
        updateProgress();
    });
})();

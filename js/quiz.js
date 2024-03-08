// Joemol Joy - 8912316

"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // Questions and their respective options and answers for the 1st quiz    
    const questionsSet1 = [
        {
            question: '1. What is the name of Ross\'s second child?',
            options: ['Ben', 'Emily', 'Erica', 'Emma'],
            answer: 'Emma'
        },
        {
            question: '2. Who among the friends is a chef?',
            options: ['Monica', 'Rachel', 'Phoebe', 'Joey'],
            answer: 'Monica'
        },
        {
            question: '3. What is the name of Joey\'s stuffed penguin?',
            options: ['Snowball', 'Waddles', 'Hugsy', 'Mr.Pengu'],
            answer: 'Hugsy'
        },
        {
            question: '4. What was the name of Phoebe\'s twin sister?',
            options: ['Ursula', 'Erica', 'Vaneesa', 'Lily'],
            answer: 'Ursula'
        },
        {
            question: '5. Which character was an executive at Ralph Lauren?',
            options: ['Ross', 'Chandler', 'Rachel', 'Joey'],
            answer: 'Rachel'
        },
        {
            question: '6. What is the name of Ross and Monica\'s dog?',
            options: ['Rover', 'Spike', 'Marcel', 'Chi-Chi'],
            answer: 'Marcel'
        },

    ];

    // Questions and their respective options and answers for the 2nd quiz   
    const questionsSet2 = [
        {
            question: '1. What is the "brain" of the computer called?',
            options: ['GPU', 'CPU', 'RAM', 'SSD'],
            answer: 'CPU'
        },
        {
            question: '2. Which part of the computer provides permanent storage?',
            options: ['RAM', 'CPU', 'HDD', 'USB Flash Drive'],
            answer: 'HDD'
        },
        {
            question: '3. What is responsible for processing graphics in a computer?',
            options: ['CPU', 'RAM', 'GPU', 'SSD'],
            answer: 'GPU'
        },
        {
            question: '4. Which component is essential for providing power to the computer?',
            options: ['Motherboard', 'PSU', 'CPU', 'GPU'],
            answer: 'PSU'
        },
        {
            question: '5. Which part of the computer serves as the main circuit board?',
            options: ['PSU', 'CPU', 'Motherboard', 'GPU'],
            answer: 'Motherboard'
        },
        {
            question: '6. Which type of port is commonly used to connect a printer to a computer?',
            options: ['USB', 'Ethernet', 'HDMI', 'VGA'],
            answer: 'USB'
        },
    ];

    let currentQuestion1 = 0;
    let currentQuestion2 = 0;
    let score1 = 0;
    let score2 = 0;
    let startTime1, startTime2, timer1, timer2;


    const questionDisplay1 = document.getElementById('question1');
    const optionsDisplay1 = document.getElementById('options1');
    const nextBtn1 = document.getElementById('nextBtn1');
    const feedbackDisplay1 = document.getElementById('feedback1');
    const timerDisplay1 = document.getElementById('timer1');
    const submitBtn1 = document.getElementById('submitBtn1');

    const questionDisplay2 = document.getElementById('question2');
    const optionsDisplay2 = document.getElementById('options2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const feedbackDisplay2 = document.getElementById('feedback2');
    const timerDisplay2 = document.getElementById('timer2');
    const submitBtn2 = document.getElementById('submitBtn2');

    const instructions = document.getElementById('instructions');
    const showHideButton = document.getElementById('showHideInstructions');
    const resetBtn = document.getElementById('resetBtn');

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const quiz1 = document.getElementById('quiz1');
    const quiz2 = document.getElementById('quiz2');

    //Function to clear both the timers
    let resetTimer = () => {
        clearInterval(timer1);
        clearInterval(timer2);
    }

    let startTimer1 = () => {
        startTime1 = Date.now();
        timer1 = setInterval(() => {
            const endTime1 = Date.now();
            let timeTaken1 = Math.floor((endTime1 - startTime1) / 1000);
            const minutes1 = String(Math.floor(timeTaken1 / 60)).padStart(2, '0');
            const seconds1 = String(timeTaken1 % 60).padStart(2, '0')
            timerDisplay1.textContent = `${minutes1}:${seconds1}`;
        }, 1000);
    }

    let startTimer2 = () => {
        startTime2 = Date.now();
        timer2 = setInterval(() => {
            const endTime2 = Date.now();
            let timeTaken2 = Math.floor((endTime2 - startTime2) / 1000);
            const minutes2 = String(Math.floor(timeTaken2 / 60)).padStart(2, '0');
            const seconds2 = String(timeTaken2 % 60).padStart(2, '0');
            timerDisplay2.textContent = `${minutes2}:${seconds2}`;
        }, 1000);
    }

    // Functions and event listeners for the 1st quiz
    let loadQuestion1 = () => {
        const currentQ = questionsSet1[currentQuestion1];
        questionDisplay1.textContent = currentQ.question;
        optionsDisplay1.innerHTML = '';

        for (const option of currentQ.options) {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer1(option));
            optionsDisplay1.appendChild(button);
        }

        if (currentQuestion1 < questionsSet1.length - 1) {
            submitBtn1.style.display = 'none';
            nextBtn1.style.display = 'block';
        } else {
            submitBtn1.style.display = 'block';
            nextBtn1.style.display = 'none';
        }
    }

    loadQuestion1();

    let checkAnswer1 = (selectedOption) => {
        const currentQ = questionsSet1[currentQuestion1];

        if (selectedOption === currentQ.answer) {
            score1++;
            feedbackDisplay1.textContent = 'Correct!';
            feedbackDisplay1.classList.remove('wrong-feedback');
            feedbackDisplay1.classList.add('correct-feedback');
        } else {
            feedbackDisplay1.textContent = 'Wrong!';
            feedbackDisplay1.classList.remove('correct-feedback');
            feedbackDisplay1.classList.add('wrong-feedback');
        }

        optionsDisplay1.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    }

    nextBtn1.addEventListener('click', () => {
        currentQuestion1++;
        if (currentQuestion1 < questionsSet1.length) {
            loadQuestion1();
            feedbackDisplay1.textContent = '';
            optionsDisplay1.querySelectorAll('button').forEach(button => {
                button.disabled = false;
            });
        }
    });

    let showResults1 = () => {
        clearInterval(timer1);
        timer1 = null;
        questionDisplay1.textContent = `Quiz Completed! You scored ${score1} out of ${questionsSet1.length}!`;
        optionsDisplay1.innerHTML = '';
        feedbackDisplay1.textContent = '';
        nextBtn1.style.display = 'none';
        feedbackDisplay1.classList.remove('wrong-feedback');
        feedbackDisplay1.classList.remove('correct-feedback');
        submitBtn1.style.display = 'none';
    }

    // Functions and event listeners for the 2nd quiz
    let loadQuestion2 = () => {
        const currentQ = questionsSet2[currentQuestion2];
        questionDisplay2.textContent = currentQ.question;
        optionsDisplay2.innerHTML = '';

        for (const option of currentQ.options) {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer2(option));
            optionsDisplay2.appendChild(button);
        }

        if (currentQuestion2 < questionsSet2.length - 1) {
            submitBtn2.style.display = 'none';
            nextBtn2.style.display = 'block';
        } else {
            submitBtn2.style.display = 'block';
            nextBtn2.style.display = 'none';
        }
    }

    let checkAnswer2 = (selectedOption) => {
        const currentQ = questionsSet2[currentQuestion2];

        if (selectedOption === currentQ.answer) {
            score2++;
            feedbackDisplay2.textContent = 'Correct!';
            feedbackDisplay2.classList.remove('wrong-feedback');
            feedbackDisplay2.classList.add('correct-feedback');
        } else {
            feedbackDisplay2.textContent = 'Wrong!';
            feedbackDisplay2.classList.remove('correct-feedback');
            feedbackDisplay2.classList.add('wrong-feedback');
        }

        optionsDisplay2.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    }

    nextBtn2.addEventListener('click', () => {
        currentQuestion2++;
        if (currentQuestion2 < questionsSet2.length) {
            loadQuestion2();
            feedbackDisplay2.textContent = '';
            optionsDisplay2.querySelectorAll('button').forEach(button => {
                button.disabled = false;
            });
        }
    });

    let showResults2 = () => {
        clearInterval(timer2);
        timer2 = null;
        questionDisplay2.textContent = `Quiz Completed! You scored ${score2} out of ${questionsSet2.length}!`;
        optionsDisplay2.innerHTML = '';
        feedbackDisplay2.textContent = '';
        nextBtn2.style.display = 'none';
        feedbackDisplay2.classList.remove('wrong-feedback');
        feedbackDisplay2.classList.remove('correct-feedback');
        submitBtn2.style.display = 'none';
    }

    // Event listener for image clicks to start 1st quiz
    image1.addEventListener('click', () => {
        quiz1.style.display = 'block';
        quiz2.style.display = 'none';
        if (!startTime1) {
            startTimer1();
        }
        if (currentQuestion1 === questionsSet1.length - 1) {
            questionDisplay1.textContent = `Quiz Completed! You scored ${score1} out of ${questionsSet1.length}!`;
        } else {
            loadQuestion1();
        }
    });

    // Event listener for image clicks to start 2nd quiz
    image2.addEventListener('click', () => {
        quiz2.style.display = 'block';
        quiz1.style.display = 'none';
        if (!startTime2) {
            startTimer2();
        }
        if (currentQuestion2 === questionsSet2.length - 1) {
            questionDisplay2.textContent = `Quiz Completed! You scored ${score2} out of ${questionsSet2.length}!`;
        } else {
            loadQuestion2();
        }
    });

    // Function to reset the quiz
    let resetQuiz = () => {
        resetTimer();
        window.location.reload();
    }

    // Event listener for reset button click
    resetBtn.addEventListener('click', () => {
        resetQuiz();
    });

    // Event listeners for submit buttons to show results
    submitBtn1.addEventListener('click', () => {
        if (currentQuestion1 === questionsSet1.length - 1) {
            showResults1();

        }
    });

    submitBtn2.addEventListener('click', () => {
        if (currentQuestion2 === questionsSet2.length - 1) {
            showResults2();
            resetTimer();
        }
    });

    // Event listener for show/hide instructions button
    showHideButton.addEventListener('click', function () {
        if (instructions.style.display === 'block') {

            $(instructions).slideUp(500, function () {
                showHideButton.textContent = 'Open Instructions';
            });
        } else {

            $(instructions).slideDown(500, function () {
                showHideButton.textContent = 'Close Instructions';
            });
        }
    });

});

// Tooltip widget for images using jQuery
$(document).ready(function () {
    $('#image1, #image2').tooltip({
        position: { my: 'center top+10', at: 'center bottom' },
        show: { effect: 'fade', duration: 300 },
        hide: { effect: 'fade', duration: 300 }
    });
});





import React, { useState } from 'react';


export default function App() {
    const questions = [
        {
            questionText: 'Vosotros ___ vuelto antes de que anochezca.',
            answerOptions: [
                { answerText: 'Ha', isCorrect: false },
                { answerText: 'Hemos', isCorrect: false },
                { answerText: 'Habeis', isCorrect: true },
                { answerText: 'Han', isCorrect: false },
            ],
        },
        {
            questionText: 'El testigo ___ descrito a los ladrones de la tienda.',
            answerOptions: [
                { answerText: 'Has', isCorrect: false },
                { answerText: 'Ha', isCorrect: true },
                { answerText: 'Hemos', isCorrect: false },
                { answerText: 'Habeis', isCorrect: false },
            ],
        },
        {
            questionText: '¿Ustedes ___ investigado sobre el trabajo de ciencias?',
            answerOptions: [
                { answerText: 'Ha', isCorrect: false },
                { answerText: 'Hemos', isCorrect: false },
                { answerText: 'Habeis', isCorrect: false },
                { answerText: 'Han', isCorrect: true },
            ],
        },
        {
            questionText: 'Nosotros ___ leído el periódico esta mañana.',
            answerOptions: [
                { answerText: 'He', isCorrect: false },
                { answerText: 'Has', isCorrect: false },
                { answerText: 'Ha', isCorrect: false },
                { answerText: 'Hemos', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect == true){
            setScore(score+1);
        }
        const nextQuestion = currentQuestion +1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }


    return (
        <div className='app'>
            {/* HINT: substitua "falso" pela lógica para exibir o
       pontuação quando o usuário respondeu a todas as perguntas
 */}
            {showScore ? (
                <div className='score-section'>Você acertou {score} de um total de {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Questão {currentQuestion+1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
                    </div>
                </>
            )}
        </div>
    );
}

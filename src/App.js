import React, { useState } from 'react';


export default function App() {
    const questions = [
        {
            questionText: 'Vosotros _______ antes de que anochezca.',
            answerOptions: [
                { answerText: 'He vuelto', isCorrect: false },
                { answerText: 'Has vuelto', isCorrect: false },
                { answerText: 'Ha vuelto', isCorrect: false },
                { answerText: 'Hemos vuelto', isCorrect: false },
                { answerText: 'Habeis vuelto', isCorrect: true },
                { answerText: 'Han vuelto', isCorrect: false },
            ],
        },
        {
            questionText: 'El testigo ___ descrito a los ladrones de la tienda.',
            answerOptions: [
                { answerText: 'He descrito', isCorrect: false },
                { answerText: 'Has descrito', isCorrect: false },
                { answerText: 'Ha descrito', isCorrect: true },
                { answerText: 'Hemos descrito', isCorrect: false },
                { answerText: 'Habeis descrito', isCorrect: false },
                { answerText: 'Han descrito', isCorrect: false },
            ],
        },
        {
            questionText: '¿Ustedes ___ investigado sobre el trabajo de ciencias?',
            answerOptions: [
                { answerText: 'He investigado', isCorrect: false },
                { answerText: 'Has investigado', isCorrect: false },
                { answerText: 'Ha investigado', isCorrect: false },
                { answerText: 'Hemos investigado', isCorrect: false },
                { answerText: 'Habeis investigado', isCorrect: false },
                { answerText: 'Han investigado', isCorrect: true },
            ],
        },
        {
            questionText: 'Nosotros ___ leído el periódico esta mañana.',
            answerOptions: [
                { answerText: 'He leído', isCorrect: false },
                { answerText: 'Has leído', isCorrect: false },
                { answerText: 'Ha leído', isCorrect: false },
                { answerText: 'Hemos leído', isCorrect: true },
                { answerText: 'Habeis leído', isCorrect: false },
                { answerText: 'Han leído', isCorrect: false },
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

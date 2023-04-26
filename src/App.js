import React from "react";

const questions = [
  {
    question: 'Назовите столицу США?',
    answers: ['Вашингтон', 'Москва', 'Дубаи'],
    correct: 0
  },
  {
    question: 'Третья планета от Солнца?',
    answers: ['Марс', 'Венера', 'Земля'],
    correct: 2
  },
  {
    question: 'Национальная валюта Китая?',
    answers: ['Йена', 'Юань', 'Рубль'],
    correct: 1
  },
  {
    question: 'В 1 квадратном километре сколько квадратных метров?',
    answers: ['Тысяча', 'Сто тысяч', 'Миллион'],
    correct: 2
  },
  {
    question: 'Какой из вариантов это город-государство?',
    answers: ['Ватикан', 'Албания', 'Ирландия'],
    correct: 0
  }
];

function Result({correct}){
  return(
    <div className="result">
      <p>Вы отгадали {correct} ответа из {questions.length}</p>
      <a href="/">Начать заново</a>
    </div>
  );
}

function Quiz({step, data, onClickAnswer}){
  const percent = Math.round(step / questions.length * 100);
  return(
    <div className="quizBlock">
      <div className="progress">
        <div className="progress__line" style={{width: `${percent}%`}}></div>
      </div>
      <div className="quizBlock__inner">
        <h2>{data.question}</h2>
        <ul>
          {data.answers.map((text, index) => (
            <li key={index} onClick={() => onClickAnswer(index)}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickAnswer = (index) => {
    setStep(step + 1)
    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }
  

  return (
    <div className="App">
      {
        step != questions.length ? (<Quiz step={step} data={question} onClickAnswer={onClickAnswer}/>)
        : ( <Result correct={correct}/> )
      }
      
    </div>
  );
}

export default App;

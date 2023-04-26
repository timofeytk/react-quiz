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

function Result(){
  return(
    <div className="result">
      <p>Вы отгадали 3 ответа из 5</p>
      <button>Начать заново</button>
    </div>
  );
}

function Quiz({data}){
  return(
    <div className="quizBlock">
      <div className="progress"></div>
      <div className="quizBlock__inner">
        <h2>{data.question}</h2>
        <ul>
          {data.answers.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];

  return (
    <div className="App">
      <Quiz data={question}/>
    </div>
  );
}

export default App;

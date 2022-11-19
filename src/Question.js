import React, { useState } from "react";
import { questions } from "./data";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowingScore, setIsShowingScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);

  const onAnswerOption = (answer) => {
    setSelectedOption([
      (selectedOption[currentQuestion] = {
        answerByUser: answer,
      }),
    ]);
    setSelectedOption([...selectedOption]);
  };

  const onPrevious = () => {
    const previousQuestion = currentQuestion - 1;
    previousQuestion >= 0 && setCurrentQuestion(previousQuestion);
  };

  const onNext = () => {
    const nextQuestion = currentQuestion + 1;
    nextQuestion < questions.length && setCurrentQuestion(nextQuestion);
  };

  const onSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) => answer.isCorrect && answer.answer === selectedOption[i]?.answerByUser && (newScore += 1),
      );
    }
    setScore(newScore);
    setIsShowingScore(true);
    setTimeout(() => window.location.replace("/"), [3000]);
  };

  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#3a3a3a] justify-center items-center">
      {isShowingScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {questions.length}
        </h1>
      ) : (
        <>
          <div className="flex flex-col items-start w-full">
            <h4 className="text-xl text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-white">{questions[currentQuestion].question}</div>
          </div>
          <div className="flex flex-col w-full">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                onClick={(e) => onAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={answer.answer === selectedOption[currentQuestion]?.answerByUser}
                  onChange={() => onAnswerOption(answer.answer)}
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-white">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-white">
            {currentQuestion !== 0 && (
              <button
                className="text-white w-full bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4"
                onClick={onPrevious}
                type="button"
              >
                Previous
              </button>
            )}
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              onClick={currentQuestion + 1 === questions.length ? onSubmit : onNext}
              type="button"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;

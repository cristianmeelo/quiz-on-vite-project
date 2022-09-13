import Quiz from "../images/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import React from "react";
import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para comecar</p>
      <button>Comecar</button>
      <img src={Quiz} alt="Inicio do quis" />
    </div>
  );
};

export default Welcome;

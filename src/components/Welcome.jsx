import Quiz from "../images/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import React from "react";
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para comecar</p>
      <button onClick={() => dispatch({ type: "GAME_STAGE" })}>Iniciar</button>
      <img src={Quiz} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;

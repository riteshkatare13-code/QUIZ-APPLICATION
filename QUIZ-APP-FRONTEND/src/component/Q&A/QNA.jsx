import { useState, useEffect } from "react";

import "./QNA.css";
import logoImg from "../../assets/iron-man-marvel-superheroes-amoled-pitch-black-minimal-art-3840x2160-6293.png";



export const QuestionAndOptions = () => {



  return (
    <main className="d-flex justify-center qna-main">
      <section className="question-dialog container-flex">
        <div className="card-banner">
          <img src={logoImg} alt="Marvel Stack" className="banner-img" />
          <h2 className="d-flex justify-center qna-title">
            MARVEL STACK
          </h2>
        </div>

        <div className="qna-score">
          <span>Question: 1/4</span>
          <span className="score">Score : 0</span>
        </div>

        <div className="question">
          <span>Q1: abrakadabra</span>
        </div>

        <div className="options-box">
          <button className="button option d-flex justify-center">A</button>
          <button className="button option d-flex justify-center">B</button>
          <button className="button option d-flex justify-center">C</button>
          <button className="button option d-flex justify-center">D</button>
        </div>

        <div className="nxt-btn-container">
          <div className="d-flex gap">
            <button className="play-btn button btn-primary cursor">QUIT</button>
            <button className="play-btn button btn-primary cursor">Next Question</button>
            <button></button>
          </div>
        </div>
      </section>
    </main>
  );
};

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import { useHistory } from "react-router-dom";

function QuizTaker() {
  return (
    <div>
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default QuizTaker;

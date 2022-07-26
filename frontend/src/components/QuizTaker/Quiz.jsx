import React, { useState, useEffect } from "react";
import NotifyCard from "./NotifyCard";

const notif = [
  {
    title: "Quiz is Yet to Begin !!",
    body: "Please Login Within The Quiz Time Duration.",
  },
  {
    title: "Quiz has Ended !!",
    body: "This Quiz has already ended. Please Contact your Admin for More Information.",
  },
  {
    title: "Thank You !!",
    body: "Your quiz has been submitted successfully. Click on the Home button to proceed to the homepage",
  },
  {
    title: "Error 404 !!",
    body: "Some error occured",
  },
  {
    title: "Unauthorized !!",
    body: "Please check your credentials",
  },
  {
    title: "You have already responded !!",
    body: "If you think there is some issue, kindly contact quiz master",
  },
];

function Quiz({ email }) {
  const [ques, setQuestions] = useState([]);
  const [ans, setAnswers] = useState({});

  const [code, setCode] = useState(-1);

  useEffect(
    () => {
      // POST request using fetch inside useEffect React hook

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailID: email,
          quizID: new URLSearchParams(window.location.search).get("quizID"),
          tokenID: new URLSearchParams(window.location.search).get("tokenID"),
        }),
      };
      fetch("http://localhost:5000/api/getQuesWithLogin", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCode(data.code);
          if (data.code === -1) {
            // data retrieved successfully
            let sortedD = Object.entries(data.question).sort(function (a, b) {
              return Math.random() - 0.5;
            });
            setQuestions(sortedD);
            setCount4(sortedD.length);
            setCount3(sortedD.length - 1);

            let c = {};
            for (var i = 0; i < sortedD.length; i++) {
              c[sortedD[i][0]] = {
                opt1: false,
                opt2: false,
                opt3: false,
                opt4: false,
                attempted: false,
              };
            }
            setAnswers(c);
          }
        })
        .catch((err) => console.log(err));
    },

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    []
  );

  const saveResponse = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quizID: new URLSearchParams(window.location.search).get("quizID"),
        tokenID: new URLSearchParams(window.location.search).get("tokenID"),
        answers: ans,
      }),
    };
    fetch("http://localhost:5000/api/saveResponse", requestOptions)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    setCode(2);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const check = e.target.checked;
    setAnswers((prev) => {
      let tm = prev[name];
      return {
        ...ans,
        [name]: {
          ...tm,
          [val]: check,
          attempted: true,
        },
      };
    });
  };

  const clearResponse = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const check = e.target.checked;
    setAnswers((prev) => {
      let tm = prev[name];
      return {
        ...ans,
        [name]: {
          ...tm,
          [val]: check,
        },
      };
    });

    setAnswers({
      ...ans,
      [name]: {
        opt1: false,
        opt2: false,
        opt3: false,
        opt4: false,
        attempted: false,
      },
    });
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < ques.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  function Increase() {
    if (count < ques.length) {
      setCount(count + 1);
    }
    // setCount((count + 1) % ques.length);
  }
  function Increase1() {
    // setCount1((count + 1) % ques.length);
    if (count1 < ques.length) {
      setCount1(count1 + 1);
    }
  }
  function Increase2() {
    // setCount2((count + 1) % ques.length);
    if (count2 < ques.length) {
      setCount2(count2 + 1);
    }
  }
  function DIncrease() {
    if (count3 < ques.length && count3 > 0) {
      setCount3(count3 - 1);
    } else {
      setCount3(0);
    }
  }
  function DIncrease1() {
    if (count4 < ques.length + 1 && count4 > 0) {
      setCount4(count4 - 1);
    } else {
      setCount4(0);
    }
  }
  // ques.length > 0 && Object.keys(ans).length > 0
  return (
    <div>
      {code === -1 && ques.length > 0 && Object.keys(ans).length > 0 ? (
        <>
          {" "}
          <div className="question-box">
            <div className="questionchange">
              <h1>Question. {currentQuestion + 1}</h1>
              <br />
              <hr />{" "}
              <p className="questiontext">
                {ques[currentQuestion][1].question}
              </p>
              <br />
              <form>
                <input
                  type="radio"
                  className="option"
                  color="primary"
                  value="opt1"
                  name={ques[currentQuestion][0]}
                  onChange={handleChange}
                  checked={ans[ques[currentQuestion][0]].opt1}
                />
                <span> {ques[currentQuestion][1].opt1}</span>
              </form>
              <form>
                <input
                  type="radio"
                  className="option"
                  color="primary"
                  value="opt2"
                  name={ques[currentQuestion][0]}
                  onChange={handleChange}
                  checked={ans[ques[currentQuestion][0]].opt2}
                />
                <span> {ques[currentQuestion][1].opt2}</span>
              </form>
              <form>
                <input
                  type="radio"
                  className="option"
                  color="primary"
                  value="opt3"
                  name={ques[currentQuestion][0]}
                  onChange={handleChange}
                  checked={ans[ques[currentQuestion][0]].opt3}
                />
                <span> {ques[currentQuestion][1].opt3}</span>
              </form>
              <form>
                <input
                  type="radio"
                  className="option"
                  color="primary"
                  value="opt4"
                  name={ques[currentQuestion][0]}
                  onChange={handleChange}
                  checked={ans[ques[currentQuestion][0]].opt4}
                />
                <span> {ques[currentQuestion][1].opt4}</span>
              </form>
            </div>
            <br />
            <div className="buttons">
              <button
                onClick={(event) => [
                  handleAnswerOptionClick(),
                  Increase(),
                  DIncrease(),
                  DIncrease1(),
                ]}
                className="button button1"
              >
                {" "}
                SAVE & NEXT
              </button>
              <button
                onClick={clearResponse}
                name={ques[currentQuestion][0]}
                className="button button2"
              >
                CLEAR RESPONSE
              </button>
              <button
                onClick={(event) => [handleAnswerOptionClick(), Increase1()]}
                className="button button3"
              >
                MARK FOR REVIEW
              </button>
              <button
                onClick={(event) => [
                  handleAnswerOptionClick(),
                  Increase(),
                  Increase1(),
                  Increase2(),
                  DIncrease(),
                  DIncrease1(),
                ]}
                className="button button4"
              >
                SAVE & MARK FOR REVIEW&NEXT
              </button>
              <button className="button button5" onClick={saveResponse}>
                SUBMIT&CLOSE
              </button>
            </div>
          </div>
          <div className="buttons-box">
            <button className="nv" name="Not Visited">
              {count3}
            </button>
            <p className="gray">Not Visited</p>
            <button className="na" name="Not Answered">
              {count4}
            </button>
            <p className="red">Not Answered</p>
            <button className="amr" name="Answered & Marked for Review">
              {count2}
            </button>
            <p className="yellow">Answered & Marked for Review</p>
            <button className="a" name="Answered">
              {count}
            </button>
            <p className="green">Answered</p>
            <button className="mr" name="Marked for Review">
              {count1}
            </button>
            <p className="blue">Marked for Review</p>
          </div>
          <div className="mark-box">
            <div className="card mb-3">
              <div
                className="card-body"
                style={{
                  display: "flex",
                  padding: 10,
                  flexWrap: "wrap",
                }}
              >
                {ques.map((item, index) => (
                  <div
                    key={index}
                    className="question-no"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      marginRight: 19,
                      marginBottom: 5,

                      cursor: "pointer",
                      backgroundColor:
                        index === currentQuestion
                          ? "#B4C6A6"
                          : item?.selected
                          ? "grey"
                          : "#EAEAEA",
                    }}
                    onClick={() => [
                      setCurrentQuestion(index),

                      DIncrease(),
                      DIncrease1(),
                    ]}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
        </>
      ) : code !== -1 ? (
        <NotifyCard
          title={notif[code].title}
          body={notif[code].body}
          code={code}
        />
      ) : null}
    </div>
  );
}

export default Quiz;

import { useState, useEffect } from "react";

const QuestionList = () => {
  let [allquestion, UpdateQuestions] = useState([]);

  let [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [ans, setAns] = useState({});
  let [isDisabled, setIsDisabled] = useState(true);

  //   console.log(ans);
  const getDetails = () => {
    let url = "https://cybotrix.com/webapi/Quiz/all";
    let id = localStorage.getItem("mytoken");
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ id: id }),
    };

    fetch(url,postData)
      .then((response) => response.json())
      .then((QuestionArray) => {
        UpdateQuestions(QuestionArray);
        setQuestions([QuestionArray[0]]);
      });
  };


  const pickValue = (obj) => {
    ans[obj.target.name] = obj.target.value;
    setAns(ans);
    setIsDisabled(false);
  };
  const nextQuestion = (rightans) => {
    // alert(ans)
    if (ans === "") {
      alert("select the answer");
    } else {
      if (index < allquestion.length - 1) {
        setQuestions([allquestion[index + 1]]);
        setIndex(index + 1);
        setIsDisabled(true);
      } else {
        alert("all questions are done");
        setQuestions([allquestion[0]]);
        setIndex(0);
      }
    }
    setAns({});
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="container mt-2">
      <h3 className="text-center mb-2">Question and Answers</h3>
      {questions.map((que) => {
        return (
          <div className="row">
            <div className="col-xl-3"></div>
            <div className="col-xl-6">
              <dl key={index}>
                <dt className="form-control mt-2 p-3 ">
                  <b>
                    Question {index + 1} : {que.question}
                  </b>
                </dt>
                <dd className="form-control mt-2">
                  <input
                    type="radio"
                    id="option1"
                    name="ans"
                    className="m-2"
                    value={que.option1}
                    onChange={pickValue}
                  />
                  <label> {que.option1}</label>
                </dd>
                <dd className="form-control mt-2">
                  <input
                    type="radio"
                    id="option2"
                    name="ans"
                    className="m-2"
                    value={que.option2}
                    onChange={pickValue}
                  />
                  <label> {que.option2}</label>
                </dd>
                <dd className="form-control mt-2">
                  <input
                    type="radio"
                    id="option3"
                    name="ans"
                    className="m-2"
                    value={que.option3}
                    onChange={pickValue}
                  />
                  <label>{que.option3}</label>
                </dd>
                <dd className="form-control mt-2">
                  <input
                    type="radio"
                    id="option4"
                    name="ans"
                    className="m-2"
                    value={que.option4}
                    onChange={pickValue}
                  />
                  <label>{que.option4}</label>
                </dd>
                <dd className="ps-3">
                  <button
                    disabled={isDisabled}
                    onClick={nextQuestion.bind(this, que.correct)}
                    className="btn btn-danger"
                  >
                    Next <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </dd>
                <dd className="form-control mt-2 p-3">
                  <b>Correct Answer :</b> {que.correct}
                </dd>
              </dl>
            </div>
            <div className="col-xl-3"></div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionList;

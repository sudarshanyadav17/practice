import { useState, useEffect } from "react";

const QuestionList = () => {
  let [allquestion, UpdateQuestions] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const getDetails = () => {
    fetch("http://localhost:1234/questionsList")
      .then((response) => response.json())
      .then((QuestionArray) => {
        UpdateQuestions(QuestionArray);
        setQuestions([QuestionArray[0]]);
      });
  };
  const nextQuestion = () => {
    if (index < allquestion.length - 1){
      setQuestions([allquestion[index + 1]]);
      setIndex(index + 1);
    } else {
      alert("all questions are done");
      setQuestions([allquestion[0]]);
      setIndex(0);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  // const delquestion=async(id)=>{
  //     let url= "http://localhost:1234/questionsList/" +id;
  //     let postData={method:"delete"}
  //     try{
  //         await fetch(url,postData)
  //         .then(response=>response.json())
  //         .then(questioninfo=>{
  //            alert("Question Deleted Successfully ");
  //            getDetails();
  //         })
  //     }catch(error){
  //         alert("Network Error Try Later...")
  //     }
  // }
  return (
    <div>
      <h1>Question and Answers</h1>
      {questions.map((que) => {
        return (
          <dl key={index} className="container">
            <dt>
              Question {index + 1}: {que.Question}
            </dt>
            <dd>
              <input type="radio" /> {que.option1}
            </dd>
            <dd>
              <input type="radio" /> {que.option2}
            </dd>
            <dd>
              <input type="radio" /> {que.option3}
            </dd>
            <dd>
              <input type="radio" /> {que.option4}
            </dd>
            <dd>
              <button
                onClick={nextQuestion}>
                Next
              </button>
            </dd>
            <dd>Correct Answer : {que.correct}</dd>
          </dl>
        );
      })}
    </div>
  );
};

export default QuestionList;

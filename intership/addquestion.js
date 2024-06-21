import { useState } from "react";

const AddQuestion = () => {
  let [questioninfo, updateQuestion] = useState({});

  const processData = (obj) => {
    questioninfo[obj.target.name] = obj.target.value;
    updateQuestion(questioninfo);
    console.log(questioninfo);
  };

  const save = (obj) => {
    obj.preventDefault();
    obj.target.reset();
    let url = "http://localhost:1234/questionsList";
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(questioninfo),
    };

    fetch(url, postData)
      .then((response) => response.json())
      .then((questionArray) => {
        alert(" Question Added Successfully ");
      });
  };

  return (
    <div className="container">
      <form onSubmit={save}>
        <div className="row mt-4">
          <div className="col-xl-12 border rounded shadow border p-4">
        <div className="row mt-2">
            <h3 className="text-center mb-4">
              <i class="fa-solid fa-circle-plus me-1"></i>Question Details
            </h3>
              <div className="col-xl-4">
                <p>
                  Enter the question :
                  <textarea
                    name="Question"
                    placeholder="Enter Your Question"
                    className="form-control mt-2"
                    onChange={processData}
                  />
                </p>
              </div>
              <div className="col-xl-4">
                <p>
                  Option1:{" "}
                  <textarea
                    name="option1"
                    placeholder="Enter Your Option"
                    className="form-control mt-2"
                    onChange={processData}
                  />{" "}
                </p>
              </div>
              <div className="col-xl-4">
                <p>
                  Option2:{" "}
                  <textarea
                    name="option2"
                    placeholder="Enter Your Option"
                    className="form-control mt-2"
                    onChange={processData}
                  />{" "}
                </p>
              </div>
              </div>
              <div className="row mt-4">
                <div className="col-xl-4">
                  <p>
                    Option3:{" "}
                    <textarea
                      name="option3"
                      placeholder="Enter Your Option"
                      className="form-control mt-2"
                      onChange={processData}
                    />
                  </p>
                </div>
                <div className="col-xl-4">
                  <p>
                    Option4:{" "}
                    <textarea
                      name="option4"
                      placeholder="Enter Your Option"
                      className="form-control mt-2"
                      onChange={processData}
                    />
                  </p>
                </div>
                <div className="col-xl-4">
                  <p>
                    Enter Your Correct Answer:{" "}
                    <textarea
                      name="correct"
                      placeholder="Enter Your Correct Answer"
                      className="form-control mt-2"
                      onChange={processData}
                    />
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                {" "}
                <button type="submit" className="btn btn-primary  ">
                  Save Question
                </button>
              </div>
            </div>
          </div>
        
      </form>
    </div>
  );
};

export default AddQuestion;

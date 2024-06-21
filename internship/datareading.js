// json-server --watch db.json --port 8000

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const DataDetails = () => {
  let [data, updateData] = useState([]);
  let [details, pickDetails] = useState("");

  const save = () => {
    let newdetails = { question: details};
    {
      let url = "https://cybotrix.com/webapi/Quiz/save";
      let postData = {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(newdetails),
      };
      fetch(url, postData)
        .then((response) => response.json())
        .then((userinfo) => {
          alert("Saved Successfully");
          getData();
          pickDetails("");
        });
    }

    pickDetails("");
  };

  const getData = () => {
    let url = "https://cybotrix.com/webapi/Quiz/all";

    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({"id":1}),
    };
    fetch(url,postData)
      .then((response) => response.json())
      .then((userArray) => {
        updateData(userArray.reverse());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let [searchkey, updateKey] = useState("");
  const PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-9 mb-4 text-center"></div>
      </div>

      <form onSubmit={save}>
        <div className="row mt-4">
          <div className="col-lg-2">
            <h5>Enter the Details : </h5>
          </div>
          <div className="col-lg-8">
            <textarea
              type="text"
              onChange={(obj) => pickDetails(obj.target.value)}
              value={details}
              // rows={5}
              cols={100}
              placeholder="Enter Your Data"
              className="form-control"
            />
          </div>
          <div className="col-lg-2">
            <button className="btn btn-primary ps-3 pe-3 ">Save</button>
          </div>
        </div>
      </form>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h3 align="center" className="text-success mb-5 mt-2">
            Available Details : {data.length}
          </h3>
        </div>
        <div className="col-lg-4 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(obj) => updateKey(obj.target.value)}
          />
        </div>
      </div>

      <div className="col-lg-12 mt-4"> 
        <table className="table table-bordered">
          <thead>
            <tr className="text-start">
              <th> ID </th>
              <th> Details </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(offset, offset + PER_PAGE).map((pdata, index) => {
              searchkey = searchkey.toLowerCase();
              if (pdata.question.toLowerCase().match(searchkey))
                return (
                  <tr key={index} className="text-start">
                    <td> {index + 1} </td>
                    <td> {pdata.question} </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        <div className="mb-4 mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination  justify-content-center rounded bg-light "}
            pageClassName={"page-item "}
            pageLinkClassName={"page-link bg-primary text-white"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link rounded bg-dark text-white"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link rounded bg-dark text-white"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default DataDetails;

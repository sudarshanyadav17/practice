import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const ManageBasic = () => {
  let [basicData, processData] = useState({});

  const pickData = (e) => {
    basicData[e.target.name] = e.target.value;
    processData(basicData);
  };
  let dispatch = useDispatch();
  const save = (obj) => {
    obj.preventDefault();
    let dispatchdata = { type: "newbasic", basicinfo: basicData };
    dispatch(dispatchdata);
    obj.target.reset();
  };
  const allbasic = useSelector((state) => state.Basiclist);
  return (
    <div className="container-2" align="center">
      <h1> Basic Details</h1>

      <form onSubmit={save}>
        <div className="exp">
          <div className="box-2">
            <div className="line-2">Name :{" "}</div>
          <div className="input-1"><input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={pickData}
            />{" "}</div>
          </div>
          <div className="box-2">
           <div className="line-2" > Mobile :</div>
           <div className="input-1"> <input
              type="text"
              placeholder="Enter Your Mobile No"
              name="mobile"
              onChange={pickData}
            /></div>
          </div>
          <div className="box-2">
            <div className="line-2">Email :</div>
           <div className="input-1"> <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={pickData}
            /></div>
          </div>
        <div align="center">  <button className="but">Save</button></div>
      <h3 align="center">Basic Details: {allbasic.length}</h3>

        </div>
      </form>
    </div>
  );
};

export default ManageBasic;

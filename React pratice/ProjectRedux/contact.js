import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ManageContact = () => {
  let [contactData, updateContact] = useState({});

  const pickData = (e) => {
    contactData[e.target.name] = e.target.value;
    updateContact(contactData);
  };
  let dispatch = useDispatch();
  const save = (obj) => {
    obj.preventDefault();
    let dispatchdata = { type: "newcontact", contactinfo: contactData };
    dispatch(dispatchdata);
    console.log(dispatchdata);
    obj.target.reset();
  };

  const allcontact = useSelector((state)=>state.Contactlist);

  return (
    <div>
      <h1 align="center">Contact Details</h1>
      <form onSubmit={save}>
        <div className="outer">
          <div className="left">
            <div className="line">
              <span>Local Address</span>
            </div>
            <div className="address">
              <textarea rows="10" cols="50" name="local" onChange={pickData} />
            </div>
          </div>
          <div className="left">
            <div className="line">
              <span>Permanent Address</span>
            </div>
            <div className="address">
              <textarea
                rows="10"
                cols="50"
                name="permanent"
                onChange={pickData}
              />
            </div>
          </div>
          <div align="center">
            <button className="but">Save</button>{" "}
          </div>
        </div>
      </form>
      <h3 align="center">Available Address : {allcontact.length}</h3>
    </div>
  );
};

export default ManageContact;

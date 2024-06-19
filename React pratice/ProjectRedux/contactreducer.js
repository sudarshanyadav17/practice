const Contactlist = (state, action) => {
  let data = Object.assign([], state);
//   console.log("==========", data, action);
  if (action.type === "newcontact") {
    data.push(action.contactinfo);
    // console.log(data, action);
  }
  return data;
};

export default Contactlist;

const Basiclist = (state, action) => {
  let data = Object.assign([], state);

  if (action.type === "newbasic") 
    data.push(action.basicinfo);
  return data;
};

export default Basiclist;

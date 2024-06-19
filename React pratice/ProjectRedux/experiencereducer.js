const Experiencelist = (state, action) => {
  let data = Object.assign([], state);

  if (action.type === "newexperience") {
    data.push(action.experienceinfo);
  }
  return data;
};

export default Experiencelist;

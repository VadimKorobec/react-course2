const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { value: state.value + 1 };
    case "DEC":
      return { value: state.value - 1 };
    case "RND":
      return { value: state.value * action.payload };
    default:
      return state;
  }
};

export default reducer;

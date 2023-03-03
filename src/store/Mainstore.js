const initialState = {
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACCESS':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'not access':
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      break;
  }
  return state;

};

export default reducer;

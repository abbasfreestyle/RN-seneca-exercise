export default (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    //Add the example id into the saved array
    case 'save':
      return [...state, action.payload]
      break;
    case 'unsave':
    //Remake the saved array by NOT including any matches
      const Ids = state.filter(item => {
        return item !== action.payload
      })
      delete state[action.payload]
      return Ids;
    default:
      return state;
  }
};

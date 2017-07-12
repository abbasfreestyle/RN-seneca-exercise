export default (state = 0, action) => {
  switch (action.type) {
    case 'timer':
      //increment the timer
      const newTime = state+action.payload;
      return newTime;
      break;
    default:
      return state;
  }
};

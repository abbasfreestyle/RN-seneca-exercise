export default (state = 0, action) => {
  switch (action.type) {
    case 'completed':
      return state+action.payload;
      break;
    case 'undo':
      return state === 0 ? 0 : state-action.payload;
    default:
      return state;
  }
};

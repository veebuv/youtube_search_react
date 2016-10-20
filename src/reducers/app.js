const INITIAL_STATE = {
  message: 'Hi Banana',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEXT_CHANGED':
      return { ...state, message: action.payload };
    default: return state;
  }
};

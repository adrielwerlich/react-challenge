const initialState = {
  firstName: '',
  lastName: ''
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    default:
      return state;
  }
};
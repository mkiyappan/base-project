const loginResponse = {};
const login = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_IN':
      loginResponse.access = 'granted';
      return {...state, loginResponse };
    default:
      return state;
  }
}

export default login;
const register = (state = [], action) => {
    switch (action.type) {
      case 'Register':
        return [
          ...state,
          {
            registerData: action.data,
            access : 'registered'
          }
        ]
  
      default:
        return state;
    }
  };
  
  export default register;
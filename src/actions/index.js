export const login = (data)=> {
    return {
        type: 'SIGN_IN',
        loginData: data
    };
};
const initState = {
  authError: null,
  errorModal: false
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Failed");
      return {
        ...state,
        authError: "Login Failed",
        errorModal: true
      };
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("signedOut Successfully ");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("Signup Failed");
      return {
        ...state,
        authError: action.err.message,
        errorModal: true
      };
    case "CLOSE":
      return {
        ...state,
        errorModal: false
      };
    default:
      return state;
  }
};
export default authReducer;

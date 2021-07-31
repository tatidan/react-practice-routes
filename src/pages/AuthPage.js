import React from "react";
import AuthForm from "../components/auth/AuthForm";

const AuthPage = ({ location, history }) => {
  return (
    <div>
      <h2>AuthPage</h2>
      <AuthForm />
      <button type="button" onClick={() => history.push(location.state.from)}>
        Go back
      </button>
    </div>
  );
};

export default AuthPage;

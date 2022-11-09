import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <div className="mt-5 mb-2">
        <button>Google Signin</button>
      </div>
      <form>
        <input type="email" name="email" placeholder="Your email"></input>
        <br />
        <input type="password" placeholder="Your password"></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;

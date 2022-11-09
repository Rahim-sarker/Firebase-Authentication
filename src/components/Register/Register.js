import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <div className="mt-5 mb-2">
        <button>Google Signin</button>
      </div>
      <form>
        <input type="text" name="name" placeholder="Your name"></input>
        <br />
        <input type="email" name="email" placeholder="Your email"></input>
        <br />
        <input type="password" placeholder="Your password"></input>
        <br />

        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;

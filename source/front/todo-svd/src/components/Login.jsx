import React from "react";
import { GoogleLogin } from "react-google-login";
import logo from "../img/silicon_valley.png";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <div>
        <h1>ToDo-SVD</h1>
        <h5>(ToDo-Silicone Valley Dream)</h5>
        <img src={logo} alt="logo" width="215" height="180" />
      </div>
      <div>
        <GoogleLogin
          clientId="915341850717-jsemoq7995soqkihoud5ckbinjdpi7gp.apps.googleusercontent.com"
          responseType="code"
          redirectUri="postmessage"
          buttonText="Iniciar sesión con google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};
export default Login;

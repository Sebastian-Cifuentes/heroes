import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "..";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    login('Sebastian');

    const lastpath = localStorage.getItem('last_path') || '/';

    navigate(lastpath, {
      replace: true
    });
  };

  return (
    <>
        <div className="container mt-5">
          <h1>Login</h1>
          <hr />

          <button onClick={onLogin} className="btn btn-primary">
            Login
          </button>

        </div>
    </>
  )
}
/* eslint-disable no-alert */
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../assets/styles/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState("password");

  return (
    <>
      <Link to="/">
        <p className="back-link">Retour à l'accueil</p>
      </Link>
      <div className="wrapper">
        <form className="form_login">
          <div>
            <input
              type="email"
              className="username"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="password_box">
            {showPassword === "password" ? (
              <AiFillEye
                className="icon"
                onClick={() => {
                  setShowPassword("text");
                }}
              />
            ) : (
              <AiFillEyeInvisible
                className="icon"
                onClick={() => {
                  setShowPassword("password");
                }}
              />
            )}
            <input
              type={showPassword}
              className="password"
              name="password"
              minLength="8"
              required
              placeholder="Mot de passe"
            />
          </div>

          <input type="submit" value="Connexion" className="sign_in" />
        </form>
      </div>
    </>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Substituí useHistory por useNavigate
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";
import { FormValidator, formConfigAuth } from "../utils/formValidator";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .authorize(email, password)
      .then(() => {
        handleLogin(email);
        navigate("/");
        resetValidation();
      })
      .catch((error) => {
        console.error("Login error:", error);
        setShowModal(true);
        setIsSuccess(false);
        setMessage("Ops, algo deu errado! Por favor, tente novamente.");
      });
  };

  const resetValidation = () => {
    const formValidator = new FormValidator({
      formElement: formRef.current,
      config: formConfigAuth,
    });
    formValidator.resetValidation();
  };

  const enableValidation = () => {
    const formValidator = new FormValidator({
      formElement: formRef.current,
      config: formConfigAuth,
    });
    formValidator.enableValidation();
  };

  useEffect(() => {
    enableValidation();
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setIsSuccess(false);
    setMessage("");
  };

  return (
    <div className="login">
      <h2 className="login__welcome">Entrar</h2>
      <form
        onSubmit={handleSubmit}
        className="auth__form login__form"
        ref={formRef}
      >
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
          className="auth__input login__input"
        />
        <span className="popup__error" id="email-error"></span>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          minLength={6}
          required
          className="auth__input login__input"
        />
        <span className="popup__error" id="password-error"></span>
        <div className="login__button-container">
          <button type="submit" className="auth__button login__button">
            Entrar
          </button>
        </div>
      </form>
      <p className="login__signin">
        Ainda não é membro?{" "}
        <Link className="link" to="/signup">
          Inscreva-se aqui!
        </Link>
      </p>
      <InfoTooltip
        isOpen={showModal}
        onClose={closeModal}
        isSuccess={isSuccess}
        message={message}
      />
    </div>
  );
};

export default Login;

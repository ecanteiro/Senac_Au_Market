import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput.jsx";
import RegistrationHeader from "../components/RegistrationHeader.jsx";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const noteStyle = { fontSize: "13px" };

  const actionButtonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
  };

  const titleText = "Crie sua conta";
  const subtitleText = "Preencha os dados abaixo para se cadastrar no aplicativo.";
  const emailNote = "A confirmação e acompanhamento do seu pedido serão enviados ao e-mail cadastrado.";
  const passwordNote = "Use oito ou mais caracteres com uma combinação de letras, números e símbolos para uma senha mais segura.";

  const navigate  = useNavigate();

  localStorage.clear();

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/about-you");
  }

  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">

              <RegistrationHeader
                title={titleText}
                subtitle={subtitleText}
              />

              <form onSubmit={handleSubmit}>
                <CustomInput
                  label="Insira seu e-mail"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required={true}
                />
                <h4 style={noteStyle}>{emailNote}</h4>
                <CustomInput
                  label="Insira uma senha:"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required={true}
                />
                <h4 style={noteStyle}>{passwordNote}</h4>
                <div className="mt-5" style={actionButtonContainerStyle}>
                  <Link to={"/"}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>
                  <button type="submit" className="button is-rounded is-primary-au-market">
                    <span className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <span>Avançar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput.jsx";

function SignUpEmail() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  const headerStyle = {
    color: "#06B3C4",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  };

  const subtitleStyle = {
    color: "#777777",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    margin: "16px 80px",
  };

  const noteStyle = { fontSize: "13px" };

  const actionButtonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
  };

  const headerText = "Acesse sua conta";
  const subtitleText = "Preencha os campos abaixo para efetuar o login.";
  
  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle" style={headerStyle}>
                {headerText}
              </h1>
              <h2 style={subtitleStyle}>{subtitleText}</h2>
              <form action="">
                <CustomInput
                  label="Insira seu e-mail"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />                
                <CustomInput
                  label="Insira sua senha:"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />                
                <div className="mt-5" style={actionButtonContainerStyle}>
                  <Link to={"/"}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="button is-rounded is-primary-au-market">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span>Avançar</span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUpEmail;

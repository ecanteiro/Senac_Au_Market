import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function SignUp() {

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');

  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }, [email, password]);

  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">

              <h1 className="subtitle"
                style={
                  {color:'#06B3C4',
                    textAlign:"center",
                    fontSize:"20px",
                    fontWeight:"600"}}>
                                    Crie sua conta</h1>
              <h2 style={
                {color:'#777777',
                  textAlign:"center",
                  fontSize:"16px",
                  fontWeight:"600",
                  margin:"16px 80px"}}>Preencha os dados abaixo para se cadastrar no aplicativo.</h2>

              <form action="">
                <div className="field" style={
                  {color:'#777777',}}>
                  <label className="label" style={
                    {color:'#777777',}}>
                    Insira seu e-mail:</label>
                  <div className="control">
                    <input className="input"
                      type="email" placeholder="aumarket@seuemail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required={true}/>

                    <h3 style={
                      {fontSize:"13px",}}>A confirmação e acompanhamento do seu pedido
                                                serão enviados ao e-mail cadastrado.
                    </h3>
                  </div>
                </div>

                <div className="field" style={
                  {color:'#777777',}}>
                  <label className="label" style={
                    {color:'#777777'}}>
                                        Insira uma senha:</label>
                  <div className="control">
                    <input className="input"
                      type="password"
                      required={true}
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="***********"/>

                    <h4 style={
                      {fontSize:"13px",}}>Use oito ou mais caracteres com uma combinação de letras,
                                                números e símbolos para uma senha mais segura.</h4>
                  </div>
                </div>

                <div className="mt-5"
                  style={{display:'flex',
                    justifyContent:'space-between',
                    padding:"16px 0",}}>
                  <Link to={'/'}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>

                  <Link to={'/about-you'}>
                    <button className="button is-rounded is-primary-au-market">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i></span>
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
  )
}

export default SignUp

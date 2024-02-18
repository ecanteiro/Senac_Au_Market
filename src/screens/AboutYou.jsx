import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react";
import InputLabel from "../components/InputLabel.jsx";
import CustomInput from "../components/CustomInput.jsx";
import API from "../api.js";

function AboutYou() {

  let navigate = useNavigate();

  const [nome, setNome] = useState(localStorage.getItem('nome') || '');
  const [cpf, setCpf] = useState(localStorage.getItem('cpf') || '');
  const [celular, setCelular] = useState(localStorage.getItem('celular') || '');
  const [dataNascimento, setDataNascimento] = useState(localStorage.getItem('data_nascimento') || '');
  const [sexo, setSexo] = useState(localStorage.getItem('sexo') || '');

  useEffect(() => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('celular', celular);
    localStorage.setItem('data_nascimento', dataNascimento);
    localStorage.setItem('sexo', sexo);
  }, [nome, cpf, celular, dataNascimento, sexo]);

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleClick = async () => {
    const postUserData = {
      senha: localStorage.getItem('password'),
      email: localStorage.getItem('email'),
      nome: localStorage.getItem('nome'),
      cpf: localStorage.getItem('cpf'),
      celular: localStorage.getItem('celular'),
      data_nascimento: localStorage.getItem('data_nascimento'),
      sexo: localStorage.getItem('sexo')
    };

    const userData = await API.postUsuario(postUserData);
    localStorage.setItem('userId', userData.insertedId);
    navigate('/Address');
  };

  return (
    <>
      <div className="container is-fluid" >
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle"
                style={
                  {color:'#06B3C4',
                    textAlign:"center",
                    fontSize:"20px",
                    fontWeight:"600"}}>
                                    Sobre você:</h1>

              <CustomInput
                label="Nome completo"
                name="nome"
                placeholder="Maria da Silva"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />

              <CustomInput
                label="CPF"
                name="cpf"
                type="number"
                placeholder="123.456.789-10"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
              />

              <CustomInput
                label="Celular"
                type="tel"
                value={celular}
                onChange={e => setCelular(e.target.value)}
                placeholder={"(11) 91234-5678"}
              />

              <CustomInput
                label="Data de Nascimento"
                placeholder="01/01/2000"
                name="datanascimento"
                onChange={e => setDataNascimento(e.target.value)}
              />

              <div className="field">
                <InputLabel labelTitle="Sexo"/>
                <div className="control" style={
                  {color:'#777777',}}>
                  <label className="radio" >
                    <input type="radio" id="sexo"
                      name="sexo" value="M"
                      checked={sexo === 'M'} onChange={handleSexoChange} /> Masculino
                  </label>
                  <label className="radio">
                    <input type="radio" id="sexo"
                      name="sexo" value="F"
                      checked={sexo === 'F'} onChange={handleSexoChange} /> Feminino
                  </label>
                </div>
              </div>

              <div className="mt-5"
                style={{display:'flex',
                  justifyContent:'space-between'}}>
                <Link to={'/sign-up'}>
                  <button className="button is-rounded is-primary-au-market is-outlined">
                    <span className="icon">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span>Voltar</span>
                  </button>
                </Link>

                <button className="button is-rounded is-primary-au-market"
                  onClick={handleClick}>
                  <span>Avançar</span>
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

}

export default AboutYou

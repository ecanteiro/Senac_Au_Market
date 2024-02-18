import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react";

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

  const handleClick = () => {
    const postUserData = {
      senha: localStorage.getItem('password'),
      email: localStorage.getItem('email'),
      nome: localStorage.getItem('nome'),
      cpf: localStorage.getItem('cpf'),
      celular: localStorage.getItem('celular'),
      data_nascimento: localStorage.getItem('data_nascimento'),
      sexo: localStorage.getItem('sexo')
    };

    try {
      const response = fetch('http://localhost:8080/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postUserData),
      });

      if (response.status !== 200) {
        throw new Error('Failed to post user data');
      }

      navigate('/Address');

    } catch (error) {
      console.error('Error:', error);
    }
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

              <div className="field" >
                <label className="label" style={
                  {color:'#777777',}}>Nome completo</label>
                <div className="control">
                  <input className="input" type="text"
                    placeholder="Maria da Silva" required={true}
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" style={
                  {color:'#777777',}}>CPF</label>
                <div className="control">
                  <input className="input" type="number"
                    required={true} placeholder="123.456.789-10"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" style={
                  {color:'#777777',}}>Celular</label>
                <div className="control">
                  <input className="input" type="tel"
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                    required={true} placeholder="(11) 91234-5678"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" style={
                  {color:'#777777',}}>Data de Nascimento</label>
                <div className="control">
                  <input className="input" type="text"
                    required={true} placeholder="01/01/2000"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                  />
                </div>

              </div>

              <div className="field">
                <label className="label" style={
                  {color:'#777777',}}>Sexo</label>
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

              <div className="control">
                <div className="field"></div>
              </div>

              <div className="mt-5"
                style={{display:'flex',
                  justifyContent:'space-between',}}>
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

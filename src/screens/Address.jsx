import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import CustomInput from "../components/CustomInput.jsx";
import API from "../api.js";

function Address() {

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postAddressData = {
      id_usuario: localStorage.getItem('userId'),
      cep: cep,
      rua: rua,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      numero: numero,
    }


    try {
      const addressData = await API.postEndereco(postAddressData);


      if (addressData && addressData.id) {
        console.log(addressData);

        alert("Endereço inserido! ID: " + addressData.id);

        // The navigation is conditioned to successful API request
        navigate("/pet-profile");
      } else {
        alert("Error: Couldn't create the address.");
      }
    } catch (error) {
      alert("Error: The request failed, check your console for more info.");
      console.error("Error in handleSubmit API call:", error);
    }

  }

  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle"
                style={{
                  color: '#06B3C4',
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "600"
                }}>
              Seu endereço:</h1>

              <form onSubmit={handleSubmit}>

                <CustomInput
                  label="CEP"
                  placeholder="01310-930"
                  mask="00000-000"
                  required={true}
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />

                <CustomInput
                  label="Rua"
                  name="rua"
                  placeholder="Av Paulista"
                  required={true}
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                />

                <CustomInput
                  label="Número"
                  name="numero"
                  placeholder="1000"
                  required={true}
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />

                <CustomInput
                  label="Complemento"
                  name="complemento"
                  placeholder="Casa"
                  required={true}
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />

                <CustomInput
                  label="Estado"
                  name="estado"
                  placeholder="SP"
                  required={true}
                  value={estado}
                  mask={"aa"}
                  onChange={e => setEstado(e.target.value)}
                />

                <CustomInput
                  label="Cidade"
                  name="cidade"
                  placeholder={"São Paulo"}
                  required={true}
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />

                <CustomInput
                  label={"Bairro"}
                  name={"bairro"}
                  placeholder={"Higienópolis"}
                  required={true}
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />

                <div className="mt-5" style={{display: 'flex', justifyContent: 'space-between'}}>

                  <Link to={'/about-you'}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>

                  <button type={"submit"}
                    className="button is-rounded is-primary-au-market">
                    <span>Avançar</span>
                    <span className="icon">
                      <i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Address

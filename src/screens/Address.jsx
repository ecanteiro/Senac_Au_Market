import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import CustomInput from "../components/CustomInput.jsx";
import API from "../api.js";
import RegistrationHeader from "../components/RegistrationHeader.jsx";
import {CommonContainer} from "../components/CommonContainer.jsx";

function Address() {

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");

  const navigate = useNavigate();

  const createAddressData = () => ({
    id_usuario: localStorage.getItem('userId'),
    cep: cep,
    rua: rua,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    numero: numero,
  });

  const formFields = [
    {
      name: 'cep',
      label: 'CEP',
      placeholder: '01310-930',
      mask: '00000-000',
      value: cep,
      setValue: setCep,
    },
    {
      name: 'rua',
      label: 'Rua',
      placeholder: 'Av Paulista',
      value: rua,
      setValue: setRua,
    },
    {
      name: 'numero',
      label: 'Número',
      placeholder: '1000',
      value: numero,
      setValue: setNumero,
    },
    {
      name: 'complemento',
      label: 'Complemento',
      placeholder: 'Casa',
      value: complemento,
      setValue: setComplemento,
    },
    {
      name: 'estado',
      label: 'Estado',
      placeholder: 'SP',
      mask: 'aa',
      value: estado,
      setValue: setEstado,
    },
    {
      name: 'cidade',
      label: 'Cidade',
      placeholder: 'São Paulo',
      value: cidade,
      setValue: setCidade,
    },
    {
      name: 'bairro',
      label: 'Bairro',
      placeholder: 'Higienópolis',
      value: bairro,
      setValue: setBairro,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postAddressData = createAddressData();

    try {
      const addressData = await API.postEndereco(postAddressData);
      console.log(addressData);
      if (addressData) {
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
      <CommonContainer>
        <RegistrationHeader
          title={"Seu endereço"}
        />

        <form onSubmit={handleSubmit}>

          {/* Cria os CustomInput com base nos valores inseridos em formFields */}
          {formFields.map((field) => (
            <CustomInput
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              value={field.value}
              onChange={e => field.setValue(e.target.value)}
              {...(field.mask && {mask: field.mask})}
              required={true}
            />
          ))}

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
      </CommonContainer>
    </>
  )
}

export default Address

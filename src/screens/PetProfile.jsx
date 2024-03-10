import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import InputLabel from "../components/InputLabel.jsx";
import CustomInput from "../components/CustomInput.jsx";
import API from "../api.js";

function PetProfile() {

  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");

  const navigate = useNavigate();

  const createPetPostData = () => ({
    id_usuario: localStorage.getItem('userId'),
    nome: nome,
    raca: raca,
    idade: idade,
    sexo: sexo
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPetData = createPetPostData();

    try {
      const petData = await API.postPet(postPetData);
      console.log(petData);
      if (petData) {
        navigate("/");
      } else {
        alert("Error: Couldn't added the pet.");
      }
    } catch (error) {
      alert("Error: The request failed, check your console for more info.");
      console.error("Error in handleSubmit API call:", error);
    }
  }

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const formFields = [
    {
      name: 'nome',
      label: 'Nome',
      placeholder: 'Lully',
      value: nome,
      setValue: setNome,
    },
    {
      name: 'raca',
      label: 'Raça',
      placeholder: 'Vira Lata',
      value: raca,
      setValue: setRaca,
    },
    {
      name: 'idade',
      label: 'Idade',
      placeholder: '13',
      value: idade,
      setValue: setIdade,
    }
  ];

  return(
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle"
                style=
                  {{color:'#06B3C4',
                    textAlign:"center",}}>
                                Sobre seu pet</h1>

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

                <div className="field">
                  <InputLabel labelTitle="Sexo"/>
                  <div className="control" style={
                    {color: '#777777',}}>
                    <label className="radio">
                      <input type="radio" id="sexo"
                        name="sexo" value="M"
                        checked={sexo === 'M'} onChange={handleSexoChange}/> Masculino
                    </label>
                    <label className="radio">
                      <input type="radio" id="sexo"
                        name="sexo" value="F"
                        checked={sexo === 'F'} onChange={handleSexoChange}/> Feminino
                    </label>
                  </div>
                </div>

                <div className="mt-5"
                  style=
                    {{display:'flex',
                      justifyContent: 'space-between',}}>
                  <Link to={"/address"}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>

                  <button className="button is-rounded is-primary-au-market">
                    <span className="icon">
                      <i className="fa-solid" ></i>
                    </span>
                    <span>Finalizar cadastro</span>
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

export default PetProfile

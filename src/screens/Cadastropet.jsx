import { Link } from "react-router-dom";

function Cadastropet() {
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

                            <form action="">
                                <div className="field">
                                    <label className="label"
                                    style={{color:'#777777',}}>
                                    Nome do pet</label>
                                        <div className="control">
                                            <input className="input" type="string"
                                                placeholder="Pepe" required={true}
                                            />
                                        </div>
                                </div>

                                <div className="field">
                                    <label className="label"
                                    style={{color:'#777777',}}>
                                    Raça</label>
                                        <div className="control">
                                            <input className="input" type="string"
                                                required={true} placeholder="pitbull"
                                            />
                                        </div>
                                </div>

                                <div className="field">
                                    <label className="label"
                                        style={{color:'#777777',}}>
                                        Idade</label>
                                        <div className="control">
                                            <input className="input" type="number"
                                                required={true} placeholder="1"
                                            />
                                        </div>
                                </div>                              
                                
                                <div className="field">
                                    <label className="label"
                                        style={{color:'#777777',}}>
                                        Sexo</label>
                                        <div className="control"
                                        style={{color:'#777777',}}>
                                            <div className="radio">
                                            <label class="radio">
                                            <input type="radio" id="sexo"
                                                name="sexo" value="Masculino"
                                            /> Macho
                                        </label>
                                        <label class="radio">
                                            <input type="radio" id="sexo"
                                                name="sexo" value="Feminino"
                                            /> Fêmea
                                        </label>                                           
                                            </div>
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

                                    <Link to={"/"} >
                                        <button className="button is-rounded is-primary-au-market" onClick={MessageEvent="Pet Cadastro com sucesso"}>                                         
                                            <span className="icon">
                                                <i className="fa-solid fa-arrow-right" ></i>
                                            </span>
                                            <span>Cadastrar</span>                                             
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

export default Cadastropet
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Cadastropet(){
    return(
        <>
            <div className="container is-fluid">
                <section className="mt-5">
                <div className="columns">
                        <div className="column">
                            <h1 className="subtitle" style={{color: '#0AB3C4',textAlign:"center"}}>Sobre seu pet</h1>

                            <form action="">
                                <div className="field">
                                    <label className="label">Nome do pet</label>
                                    <div className="control">
                                        <input className="input"
                                            type="string"
                                            placeholder="Pepe"
                                            required={true}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Raça</label>
                                    <div className="control">
                                        <input className="input"
                                            type="string"
                                            required={true}
                                            placeholder="pitbull"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Idade</label>
                                    <div className="control">
                                        <input className="input"
                                            type="number"
                                            required={true}
                                            placeholder="1"
                                        />
                                    </div>
                                
                                
                                <div className="field">
                                    <label className="label">Sexo</label>
                                    <div className="control">
                                    <div className="radio">
                                        <div className=".testecss">
                                            <input type="radio" id="sexo" name="sexo" 
                                            value="Macho" checked/>
                                            Macho
                                            <input type="radio" id="sexo" name="sexo" 
                                            value="Femêa" />
                                            Femêa                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                                className="mt-5">
                                    <Link to={"/address"}>
                                        <button className="button is-rounded is-primary-au-market is-outlined">
                                            <span className="icon">
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </span>
                                            <span>Voltar</span>
                                        </button>
                                    </Link>

                                    <Link to={'/cadastropet'} >
                                        <button className="button is-rounded is-primary-au-market" onClick={MessageEvent="Pet Cadastro com sucesso"} >
                                        
                                            <span>Cadastrar</span>                                         
                                            <span className="icon"><i className="fa-solid fa-arrow-right" ></i>  </span>
                                            
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
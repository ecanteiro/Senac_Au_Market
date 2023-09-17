import { Link } from "react-router-dom";

function AboutYou() {
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
                                        <input className="input" type="email"
                                            placeholder="Maria da Silva" required={true}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" style={
                                    {color:'#777777',}}>CPF</label>
                                    <div className="control">
                                        <input className="input" type="number"
                                            required={true} placeholder="123.456.789-10"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" style={
                                    {color:'#777777',}}>Celular</label>
                                    <div className="control">
                                        <input className="input" type="password"
                                            required={true} placeholder="(11) 91234-5678"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" style={
                                    {color:'#777777',}}>Data de Nascimento</label>
                                    <div className="control">
                                        <input className="input" type="password"
                                            required={true} placeholder="01/01/2000"
                                        />
                                    </div>

                                </div>
                                
                                <div class="field">
                                    <label className="label" style={
                                    {color:'#777777',}}>Sexo</label>
                                    <div class="control" style={
                                    {color:'#777777',}}>
                                        <label class="radio" >
                                            <input type="radio" id="sexo"
                                                name="sexo" value="Masculino"
                                            /> Masculino
                                        </label>
                                        <label class="radio">
                                            <input type="radio" id="sexo"
                                                name="sexo" value="Feminino"
                                            /> Feminino
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

                                    <Link to={'/address'}>
                                        <button className="button is-rounded is-primary-au-market">
                                            <span>Avançar</span>
                                            <span className="icon">
                                                <i className="fa-solid fa-arrow-right"></i></span>
                                        </button>
                                    </Link>
                                </div>                       
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutYou
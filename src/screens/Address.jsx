import {Link} from "react-router-dom";

function Address() {
    return (
        <>
            <div className="container is-fluid">
                <section className="mt-5">
                    <div className="columns">
                        <div className="column">

                            <h1 className="subtitle">Endereço</h1>

                            <form action="">
                                <div className="field">
                                    <label className="label">CEP:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="text"
                                               placeholder="01310-930"
                                               required={true}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Rua:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="string"
                                               required={true}
                                               name="password"
                                               placeholder="Av. Paulista"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Número:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="number"
                                               required={true}
                                               name="password"
                                               placeholder="1000"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Complemento:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="string"
                                               required={true}
                                               name="password"
                                               placeholder="Casa"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Estado:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               required={true}
                                               name="password"
                                               placeholder="Selecione..."
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Cidade:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               required={true}
                                               name="password"
                                               placeholder="São Paulo"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Bairro:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               required={true}
                                               name="password"
                                               placeholder="Higienópolis"
                                        />
                                    </div>
                                </div>


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                                     className="mt-5">
                                    <Link to={'/'}>
                                        <button className="button is-rounded is-primary-au-market is-outlined">
                                            <span className="icon">
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </span>
                                            <span>Voltar</span>
                                        </button>
                                    </Link>

                                    <Link to={'/'}>
                                        <button className="button is-rounded is-primary-au-market">
                                            <span>Avançar</span>
                                            <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
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

export default Address
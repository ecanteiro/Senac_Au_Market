import {Link} from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="container is-fluid">
                <section className="mt-5">
                    <div className="columns">
                        <div className="column">

                            <h1 className="subtitle">Crie sua conta</h1>
                            <h2>Preencha os dados abaixo para se cadastrar no aplicativo.</h2>
                            <form action="">
                                <div className="field">
                                    <label className="label">Insira seu e-mail:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="email"
                                               placeholder="aumarket@seuemail.com"
                                               required={true}
                                        />
                                        <h3>A confirmação e acompanhamento do seu pedido serão enviados ao e-mail cadastrado.</h3>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Insira uma senha:</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               required={true}
                                               name="password"
                                               placeholder="***********"
                                        />
                                        <h4>Use oito ou mais caracteres com uma combinação de letras, números e símbolos para uma senha mais segura.</h4>
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

                                    <Link to={'/about-you'}>
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
        </>)
}

export default SignUp

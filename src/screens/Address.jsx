import {Link} from "react-router-dom";

function Address() {
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

              <form action="">
                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>CEP:</label>
                  <div className="control">
                    <input className="input" type="text"
                      placeholder="01310-930" required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Rua:</label>
                  <div className="control">
                    <input className="input" type="string"
                      required={true} name="password"
                      placeholder="Av. Paulista"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Número:</label>
                  <div className="control">
                    <input className="input" type="number"
                      required={true} name="password"
                      placeholder="1000"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Complemento:</label>
                  <div className="control">
                    <input className="input" type="string"
                      required={true} name="password"
                      placeholder="Casa"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Estado:</label>
                  <div className="control">
                    <input className="input" type="password"
                      required={true} name="password"
                      placeholder="Selecione..."
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Cidade:</label>
                  <div className="control">
                    <input className="input" type="password"
                      required={true} name="password"
                      placeholder="São Paulo"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={
                    {color: '#777777',}}>Bairro:</label>
                  <div className="control">
                    <input className="input" type="password"
                      required={true} name="password"
                      placeholder="Higienópolis"
                    />
                  </div>
                </div>

                <div className="mt-5" style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Link to={'/about-you'}>
                    <button className="button is-rounded is-primary-au-market is-outlined">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <span>Voltar</span>
                    </button>
                  </Link>

                  <Link to={'/pet-profile'}>
                    <button className="button is-rounded is-primary-au-market">
                      <span>Avançar</span>
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i></span>
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

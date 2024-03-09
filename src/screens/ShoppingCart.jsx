import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <form action="">
                {/* Botão "Limpar Carrinho" abaixo de "Continuar Comprando" com ícone de lixeira */}
                <div className="field mt-3 has-text-centered">
                  <div className="control">
                    <button className="button is-rounded is-danger is-small">
                      <span className="icon">
                        <i className="fa-solid fa-trash"></i>
                      </span>
                      <span>Limpar Carrinho</span>
                    </button>
                  </div>
                </div>

                <h1 className="subtitle mt-3">
                  <span className="icon">
                    <i className="fa-solid fa-shopping-cart"></i>
                  </span>
                                    Carrinho de Compra
                </h1>

                {/* Texto indicando o produto escolhido */}
                <div className="field mt-5">
                  <label className="label is-uppercase has-text-weight-bold" style={{ display: 'block', width: '100%' }}>
                                        Produto Escolhido:
                  </label>
                  <Link to={'/'}>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          {/*<img src="your-product-image-url" alt="Product" />*/}
                        </figure>
                      </div>
                      <div className="media-content ml-3">
                        <p className="is-size-4">Nome do Produto</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Total da Compra */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'fixed',
                  bottom: '120px',
                  left: '10px',
                  right: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderTop: '1px solid #ccc',
                }} className="mt-5">
                  <div className="field">
                    <label className="label">Total da Compra:</label>
                    <div className="control">
                      <span className="has-text-success">R$ 100,00</span>
                    </div>
                  </div>
                </div>

                {/* Pagamento */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'fixed',
                  bottom: '70px',
                  left: '10px',
                  right: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderTop: '1px solid #ccc',
                }} className="mt-5">
                  <div className="field">
                    <div className="control">
                      <button className="button is-rounded is-success">
                                                Pagamento!!!
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botões no rodapé da página */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'fixed',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderTop: '1px solid #ccc',
                }} className="mt-5">
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

export default ShoppingCart

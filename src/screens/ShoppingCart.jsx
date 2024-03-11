import { Link } from "react-router-dom";
import {CommonContainer} from "../components/CommonContainer.jsx";
import RegistrationHeader from "../components/RegistrationHeader.jsx";

function ShoppingCart() {
  const handleButtonClick = () => {
    window.alert('Compra realizada com sucesso!');
  };
  return (
    <>

      <CommonContainer>
        <RegistrationHeader
          title="Carrinho de Compras"/>

        <form action="">
          {/* Texto indicando o produto escolhido */}
          <div className="field mt-5">
            <label className="label has-text-weight-bold">
              Itens:
            </label>
            <Link to={'/'}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src="../../src/assets/racao.webp" alt="Product" />
                  </figure>
                </div>
                <div className="media-content ml-3">
                  <p className="">Ração Úmida Dog NaturalFood</p>
                  <p>200g</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Total da Compra */}
          <div style={{
            display: 'flex',
            justifyContent: 'right',
            alignContent: 'baseline',
            borderTop: '1px solid #ccc',
            padding: '1em'
          }} className="mt-5">
            <p className=" mr-1">Total: </p>
            <p className="has-text-success" style={{fontWeight: 'bold', fontSize: '18px'}}> R$ 100,00</p>
          </div>

          {/* Pagamento */}


          <div className="mt-3" style={{
            display: `flex`,
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <button className="button is-rounded is-danger is-small">
              <span className="icon">
                <i className="fa-solid fa-trash"></i>
              </span>
              <span>Limpar Carrinho</span>
            </button>
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
            <Link to={'/order'}>
              <button className="button is-rounded is-primary-au-market is-outlined">
                <span className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span>Voltar</span>
              </button>
            </Link>

            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <button className="button is-rounded is-success" onClick={handleButtonClick}>
                      <span className="icon">
                        <i className="fa-solid fa-dollar"></i>
                      </span>
                      <p>Pagamento</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      </CommonContainer>
    </>
  )
}

export default ShoppingCart

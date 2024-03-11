import { Link } from 'react-router-dom';
import {CommonContainer} from "../components/CommonContainer.jsx";
import RegistrationHeader from "../components/RegistrationHeader.jsx";
function PurchaseOrder() {
  return (
    <CommonContainer>
      <RegistrationHeader
        title="Pedidos"
        subtitle="Acompanhe seus pedidos"
      />

      <div className="rectangle">
        <h1 style={
          {
            color: '#06B3C4',
            textAlign: "left",
            fontWeight: "600",
          }}>Ração Úmida Dog NaturalFood</h1>
        <p>Tamanho: <b>200g</b></p>
        <p>Sabor: <b>Carne</b></p>
        <p style={
          {
            color: '#777777',
            textAlign: "right",
            fontSize: "10px",
            fontWeight: "600",
          }}>
          Número do pedido: 884879
        </p>

        <Link to={"/shopping-cart"}>
          <button className="button is-rounded is-primary-au-market">
            <span className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span>Avançar</span>
          </button>
        </Link>
      </div>

    </CommonContainer>
  )}

export default PurchaseOrder

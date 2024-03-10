import { Link } from 'react-router-dom';
function PurchaseOrder() {
  return (
    <>
      <div className="container is-fluid">
        <section className="mt-5">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle"
                style={
                  {color:'#06B3C4',
                    textAlign:"center",
                    fontSize:"20px",
                    marginBottom:"3px",
                    fontWeight:"600"}}>

                                    Pedidos</h1>
              <h2 style={
                {color:'#777777',
                  textAlign:"center",
                  fontSize:"14px",
                  fontWeight:"600",
                  margin:"16px 80px"}}>Meus pedidos</h2>

            </div>
          </div>
          <div>
            <h2 style={
              {color:'#06B3C4',
                textAlign:"center",
                fontSize:"16px",
                fontWeight:"600",
                margin:"16px 80px"}}>Acompanhe seu pedido</h2>
          </div>

          <div className="rectangle">

            <h2 style={
              {color:'#06B3C4',
                textAlign:"left",
                fontSize:"14px",
                fontWeight:"600",
                margin:"16px 18px"}}>Ração úmida dog NaturalFood - Pacote 200g(Carne, Frango ou Suíno).</h2>
            <h1 style={
              {color:'#777777',
                textAlign:"right",
                fontSize:"10px",
                fontWeight:"600",
                margin:"-10px 20px"}}>Número do pedido: 884879 </h1>
            <ol>
              <li>
                                        Ração úmida dog NaturalFood
              </li>
            </ol>
            <Link to={"/shopping-cart"}>
              <button className="button is-rounded is-primary-au-market">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span>Avançar</span>
              </button>
            </Link>
          </div>

        </section>
      </div>
    </>
  )
}

export default PurchaseOrder

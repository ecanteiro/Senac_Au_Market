import { useState } from 'react';
import { Link } from 'react-router-dom';
import pixQRCodeImage from '../assets/qrcodepix.png';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCardFields, setShowCardFields] = useState(false);
  const [showPixOptions, setShowPixOptions] = useState(false);
  const [showPixQRCode, setShowPixQRCode] = useState(false);
  const [pixKey, setPixKey] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === 'creditCard' || method === 'debitCard') {
      setShowCardFields(true);
      setShowPixOptions(false);
    } else if (method === 'pix') {
      setShowPixOptions(true);
      setShowCardFields(false);
    }
  };

  return (
    <div className="container is-fluid">
      <div className="columns has-centered">
        <h1 className="titleh1">Pagamentos</h1>
        <p className="mb-5 subtitle1">Selecione seu método de pagamento.</p>

        <div className="buttons mb-5 buttonsPayment">
          <button className={`button ${paymentMethod === 'creditCard' ? 'is-primary' : ''}`} onClick={() => handlePaymentMethodChange('creditCard')}>Cartão de Crédito</button>
          <button className={`button ${paymentMethod === 'debitCard' ? 'is-primary' : ''}`} onClick={() => handlePaymentMethodChange('debitCard')}>Cartão de Débito</button>
          <button className={`button ${paymentMethod === 'pix' ? 'is-primary' : ''}`} onClick={() => handlePaymentMethodChange('pix')}>Pix</button>
        </div>

        {showCardFields && (
          <form>
            <h2 className='titleh1'>{paymentMethod === 'creditCard' ? 'Crédito' : 'Débito'}</h2>
            <p className='infoSubtitle'>{paymentMethod === 'creditCard' ? 'Faremos uma pequena cobrança com devolução automática.' : 'Consulte as bandeiras disponíveis.'}</p>
            <div className="field dadosCartao">
              <label className="label">Número do Cartão</label>
              <div className="control">
                <input type="text" className="input" placeholder="1234 5678 9012 3456" />
                <label className="label">Nome do  Titular</label>
                <input type="text" className="input" placeholder="Nome do Titular" />
                <label className="label">CPF</label>
                <input type="text" className="input" placeholder="000.000.000-00" />
                <label className="label">Data de Validade</label>
                <input type="text" className="input" placeholder="00/00/0000" />
                <label className="label">CVV</label>
                <input type="text" className="input" placeholder="CVV" />
                <label className="label">Apelido do cartão (opcional)</label>
                <input type="text" className="input" placeholder="1234 5678 9012 3456" />
              </div>
            </div>

            <button className="button is-primary">Cadastrar</button>
          </form>
        )}

        {showPixOptions && (
          <div>
            <h3 className='titleh1'>PIX</h3>
            <p className='infoSubtitle'>Qual forma gostaria de realizar o pagamento via PIX?</p>
            <section className='buttonsPayment'>
              <button className="button" onClick={() => { setShowPixQRCode(false); setPixKey('37c2a65d-e018-4f17-8a35-593b1b25816d'); }}>Chave Copia e Cola</button>
              <button className="button" onClick={() => setShowPixQRCode(true)}>QR Code</button>
            </section>
            <section className='qrcodeContainer'>
              {showPixQRCode && <img src={pixQRCodeImage} alt="PIX QR Code" />}
              {!showPixQRCode && (
                <div className="field">
                  <label className="label infoSubtitle">Chave PIX</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={pixKey}
                      readOnly
                    />
                  </div>
                </div>
              )}
            </section>
          </div>
        )}



        <div className="columns">
          <div className="column">
            <p className='infoSubtitle'>Precisa mudar alguma informação?</p>
            <Link to={'/cart'}>
              <button className="button is-fullwidth is-rounded is-primary-au-market">
                <span className="icon">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span>Voltar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

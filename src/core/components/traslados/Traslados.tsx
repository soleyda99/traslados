import { Footer } from '../../shared/footer/Footer';
import { Header } from '../../shared/header/Header';
import Home from '../home/Home';
import { MetodosPagos } from '../metodosPagos/MetodosPagos';
import Servicios from '../servicios/Servicios';

const Traslados = () => {
  return (
    <div id="home">
      <Header />
      <Home />
      <div id="servicios">
        <Servicios />
      </div>
      <div id="metodos-de-pago">
        <MetodosPagos />
      </div>
      <Footer />
    </div>
  );
};

export default Traslados;

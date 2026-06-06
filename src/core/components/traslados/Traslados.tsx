import { Helmet } from 'react-helmet-async';
import { Footer } from '../../shared/footer/Footer';
import { Header } from '../../shared/header/Header';
import Home from '../home/Home';
import { MetodosPagos } from '../metodosPagos/MetodosPagos';
import Servicios from '../servicios/Servicios';
import ValoresMarquee from '../valores/ValoresMarquee';

const Traslados = () => {
	return (
		<div id="home">
			<Helmet>
				<title>Go Drive | Traslados al Aeropuerto, Mascotas y Paquetería en CABA y Buenos Aires</title>
				<meta
					name="description"
					content="Go Drive: traslados privados al aeropuerto Ezeiza y Aeroparque, traslado de mascotas, servicio de paquetería y mensajería express en CABA y Gran Buenos Aires. Remis ejecutivo 24hs. ¡Reservá ahora!"
				/>
				<meta
					name="keywords"
					content="traslados al aeropuerto Buenos Aires, transfer aeropuerto Ezeiza, transfer Aeroparque Jorge Newbery, remis al aeropuerto CABA, transporte aeropuerto Buenos Aires, traslado de mascotas Buenos Aires, transporte de mascotas CABA, traslado de perros Buenos Aires, traslado de gatos Buenos Aires, remis para mascotas, servicio de paquetería Buenos Aires, mensajería express CABA, cadetería puerta a puerta Buenos Aires, envío de paquetes Buenos Aires, cadete CABA, mensajería a domicilio, envíos express GBA, traslados corporativos Buenos Aires, remis ejecutivo CABA, transporte privado aeropuerto, transfer privado Buenos Aires, remise ezeiza, remis ezeiza, traslados 24 horas Buenos Aires"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.instagram.com/godrive.ar/" />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="es_AR" />
				<meta
					property="og:title"
					content="Go Drive | Traslados al Aeropuerto, Mascotas y Paquetería en Buenos Aires"
				/>
				<meta
					property="og:description"
					content="Traslados privados al aeropuerto Ezeiza y Aeroparque, traslado de mascotas y paquetería express en CABA y GBA. Remis ejecutivo disponible 24hs."
				/>
				<meta property="og:site_name" content="Go Drive Agencia de Traslados y Envíos" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Go Drive | Traslados al Aeropuerto, Mascotas y Paquetería en Buenos Aires"
				/>
				<meta
					name="twitter:description"
					content="Traslados privados al aeropuerto Ezeiza y Aeroparque, traslado de mascotas y paquetería express en CABA y GBA."
				/>
			</Helmet>

			<Header />
			<Home />
			<div id="servicios">
				<Servicios />
			</div>
			<ValoresMarquee />
			<div id="metodos-de-pago">
				<MetodosPagos />
			</div>
			<Footer />
		</div>
	);
};

export default Traslados;

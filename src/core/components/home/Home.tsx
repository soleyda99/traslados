import { Carousel } from 'react-bootstrap';
import obelisco from '../../../assets/img/obelisco.jpg';
import puente from '../../../assets/img/puente.jpeg';
import ezeiza from '../../../assets/img/ezeiza.jpg';
import boca from '../../../assets/img/servicio_paqueteria.png';
import styles from './Home.module.css';

const carouselItems = [
  {
    id: 'aeroparque',
    src: puente,
    alt: 'Imagen sobre el puente de la mujer',
    prefix: 'Servicio de traslados privados desde y hacia ',
    highlight: 'Aeroparque'
  },
  {
    id: 'ezeiza',
    src: ezeiza,
    alt: 'Imagen sobre avion en ezeiza',
    prefix: 'Servicio de traslados privados desde y hacia ',
    highlight: 'Ezeiza'
  },
  {
    id: 'cualquier-punto',
    src: obelisco,
    alt: 'Imagen sobre el obelisco',
    prefix: 'Servicio de traslados privados desde y hacia ',
    highlight: 'cualquier punto'
  },
  {
    id: 'paqueteria-express',
    src: boca,
    alt: 'Imagen sobre envio de paquetes en la boca',
    prefix: 'Servicio de ',
    highlight: 'paquetería express',
    suffix: ' en CABA y Gran Buenos Aires'
  }
];

const imageStyle = {
  objectFit: 'cover' as const,
  width: '100%',
  height: '90vh',
  filter: 'brightness(50%)'
};

const Home = () => {
  return (
    <Carousel fade controls={false}>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id} interval={2000}>
          <div className={styles.carouselItemContainer}>
            <img
              src={item.src}
              alt={item.alt}
              className="d-block w-100"
              style={imageStyle}
            />
            <div className={styles.carouselText}>
              {item.prefix}
              <span style={{ color: '#fab93d' }}>{item.highlight}</span>
              {item.suffix}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;

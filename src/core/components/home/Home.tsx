import { Carousel } from 'react-bootstrap';
import obelisco from '../../../assets/img/obelisco.jpg';
import puente from '../../../assets/img/puente.jpeg';
import ezeiza from '../../../assets/img/ezeiza.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item interval={500}>
        <div className={styles.carouselItemContainer}>
          <img
            src={puente}
            alt="Imagen sobre el puente de la mujer"
            className="d-block w-100"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '90vh',
              filter: 'brightness(50%)'
            }}
          />
          <div className={styles.carouselText}>
            Servicio de traslados privados desde{' '}
            <span style={{ color: '#fab93d' }}>Aeroparque</span>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className={styles.carouselItemContainer}>
          <img
            src={ezeiza}
            alt="Imagen sobre avion en ezeiza"
            className="d-block w-100"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '90vh',
              filter: 'brightness(50%)'
            }}
          />
          <div className={styles.carouselText}>
            Servicio de traslados privados desde{' '}
            <span style={{ color: '#fab93d' }}>Ezeiza</span>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className={styles.carouselItemContainer}>
          <img
            src={obelisco}
            alt="Imagen sobre el obelisco"
            className="d-block w-100"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '90vh',
              filter: 'brightness(50%)'
            }}
          />
          <div className={styles.carouselText}>
            Servicio de traslados privados desde{' '}
            <span style={{ color: '#fab93d' }}>cualquier punto</span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;

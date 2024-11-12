import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import whatsapp from '../../../assets/img/whatsapp.png';
import instagram from '../../../assets/img/instagram.png';
import styles from './Footer.module.css';
import { Helmet } from 'react-helmet';

export const Footer = () => {
  return (
    <>
      <Helmet>
        <title>Go Drive - Contacto</title>
        <meta
          name="description"
          content="Contáctanos a través de WhatsApp o Instagram. Go Drive - Alquiler de autos."
        />
        <meta
          name="keywords"
          content="alquiler de autos, contacto Go Drive, WhatsApp, Instagram"
        />
        <meta property="og:title" content="Go Drive - Contacto" />
        <meta
          property="og:description"
          content="Contáctanos a través de WhatsApp o Instagram. Go Drive - Alquiler de autos."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.godrive.com/contacto" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <footer className={`${styles.footer}`}>
        <Container>
          <Row>
            <Col>
              <img
                alt="Logo de Go Drive, empresa de alquiler de autos"
                src={logo}
                width="155"
                height="150"
                className="d-inline-block align-top"
                style={{ objectFit: 'contain' }}
              />
            </Col>
            <Col className="d-flex align-items-end justify-content-center">
              <small style={{ color: '#fff' }}>
                © 2024 Go Drive. Todos los derechos reservados.
              </small>
            </Col>

            <Col className="d-flex align-items-center justify-content-center ms-1 flex-column">
              <p className="text-white fw-bold text-center">CONTACTO</p>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className={`${styles.svg} me-1`}>
                  <a
                    href="https://www.instagram.com/godrive.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ir al Instagram de Go Drive"
                  >
                    <img
                      src={instagram}
                      alt="Icono de Instagram de Go Drive"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>

                <div className={`${styles.svg} ms-1`}>
                  <a
                    href="https://api.whatsapp.com/send/?phone=+541132533816&text=Hola, quisiera realizar una reserva&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp Go Drive"
                  >
                    <img
                      src={whatsapp}
                      alt="Icono de WhatsApp de Go Drive"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

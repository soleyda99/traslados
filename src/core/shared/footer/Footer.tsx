import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import whatsapp from '../../../assets/img/whatsapp.png';
import instagram from '../../../assets/img/instagram.png';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <Container>
          <Row>
            <Col>
              <img
                alt="Logo de Go Drive Agencia de Traslados y Envíos, traslados de mascotas"
                src={logo}
                width="155"
                height="150"
                className="d-inline-block align-top"
                style={{ objectFit: 'contain' }}
              />
            </Col>

            <Col className="d-flex align-items-end justify-content-center  flex-column">
              <p className="text-white fw-bold text-center">CONTACTO</p>
              <div className="d-flex flex-row justify-content-center align-items-center me-1">
                <div className={`${styles.svg} me-1`}>
                  <a
                    href="https://www.instagram.com/godrive.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ir al Instagram de Go Drive Agencia de Traslados y Envíos"
                  >
                    <img
                      src={instagram}
                      alt="Icono de Instagram de Go Drive Agencia de Traslados y Envíos"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>

                <div className={`${styles.svg} ms-1 `}>
                  <a
                    href="https://api.whatsapp.com/send/?phone=+541132533816&text=Hola, quisiera realizar una reserva&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp Go Drive Agencia de Traslados y Envíos"
                  >
                    <img
                      src={whatsapp}
                      alt="Icono de WhatsApp de Go Drive Agencia de Traslados y Envíos"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-end justify-content-center">
              <small style={{ color: '#fff' }}>
                © 2017 Go Drive Agencia de Traslados y Envíos. Todos los derechos reservados
              </small>
            </Col>
          </Row>
        </Container>
    </footer>
  );
};

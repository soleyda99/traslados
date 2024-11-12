import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Servicios.module.css';
import reloj from '../../../assets/img/reloj.png';
import avion from '../../../assets/img/avion.png';
import carro from '../../../assets/img/carro.png';
import { Helmet } from 'react-helmet';

const Servicios = () => {
  const services = [
    {
      imgSrc: avion,
      alt: 'Avion',
      title: 'TRASLADOS DESDE Y HACIA AEROPUERTOS',
      description:
        'Servicio de transporte exclusivo en las áreas de llegada nacionales e internacionales de los aeropuertos. Monitoreamos tu vuelo constantemente para evitar cualquier inconveniente con los horarios.'
    },
    {
      imgSrc: carro,
      alt: 'Carro',
      title: 'TRASLADOS CORPORATIVOS Y PARTICULARES',
      description:
        'En Go Drive ofrecemos traslados tanto para empresas como para particulares. Contamos con conductores experimentados y vehículos de alta gama que se ajustan a las necesidades de tu negocio o evento.'
    },
    {
      imgSrc: reloj,
      alt: 'Reloj',
      title: 'ESTAMOS LAS 24H LOS 365 DIAS AL AÑO',
      description:
        'Realiza tu reserva sin importar la fecha o la hora. Estamos disponibles las 24 horas del día, los 365 días del año, para brindarte el servicio que necesitas cuando lo necesites.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios de Traslado - Go Drive</title>
        <meta
          name="description"
          content="Ofrecemos servicios de traslado exclusivos desde y hacia aeropuertos, traslados corporativos y particulares, y disponibilidad las 24 horas del día."
        />
        <meta
          name="keywords"
          content="traslados, aeropuertos, servicios corporativos, transporte 24 horas, traslado de lujo, transporte privado"
        />
        <meta name="author" content="Go Drive" />
        <meta property="og:title" content="Servicios de Traslado - Go Drive" />
        <meta
          property="og:description"
          content="Descubre nuestros servicios exclusivos de traslado desde y hacia aeropuertos, corporativos y particulares, disponibles las 24 horas del día."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Container className=" d-flex flex-column justify-content-center">
        <hr className="mt-5" />
        <h1 style={{ fontSize: '30px', color: '#fab93d' }} className="mt-5">
          - Servicios de traslados
        </h1>
        <p className="mb-4" style={{ fontSize: '20px', color: '#fff' }}>
          Ofrecemos servicios exclusivos para satisfacer todas tus necesidades
          de transporte, ya sea para viajes de negocios o personales.
        </p>
        <Row className="mb-5">
          {services.map(({ imgSrc, alt, title, description }, index) => (
            <Col lg={4} sm={12} key={index}>
              <Card className={`mb-4 ${styles.testimonialCard}`}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div className={`${styles.svg} mb-3`}>
                    <img src={imgSrc} alt={alt} width={60} height={60} />
                  </div>
                  <Card.Text className="d-flex flex-column align-items-center text-center">
                    <Card.Title>{title}</Card.Title>
                    <span>{description}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <hr className="mb-5" />
      </Container>
    </>
  );
};

export default Servicios;

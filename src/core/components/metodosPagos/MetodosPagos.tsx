import { Col, Container, Image, Row } from 'react-bootstrap';
import peru from '../../../assets/img/peru.jpeg';
import argentina from '../../../assets/img/argentina.jpeg';
import brasil from '../../../assets/img/brasil.jpeg';
import chile from '../../../assets/img/chile.jpeg';
import binance from '../../../assets/img/binance.png';
import zelle from '../../../assets/img/zelle.png';
import mercadopago from '../../../assets/img/mercadopago.png';
import usa from '../../../assets/img/usa.jpeg';
import { Helmet } from 'react-helmet';

export const MetodosPagos = () => {
  return (
    <Container>
      <Helmet>
        <title>Métodos de Pago - Go Drive</title>
        <meta
          name="description"
          content="Descubre los diferentes métodos de pago disponibles en nuestra plataforma, incluyendo opciones de criptomonedas y transferencias bancarias."
        />
        <meta
          name="keywords"
          content="métodos de pago, transferencias, criptomonedas, MercadoPago, Zelle, Binance"
        />
        <meta property="og:title" content="Métodos de Pago - Go Drive" />
        <meta
          property="og:description"
          content="Explora todas las opciones de pago disponibles en nuestra página, desde MercadoPago hasta criptomonedas como Binance."
        />
        <meta property="og:image" content={binance} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 style={{ fontSize: '30px', color: '#fab93d' }}>- Métodos de pagos</h1>
      <p style={{ fontSize: '20px' }}>
        Aceptamos una variedad de monedas para facilitar tus transacciones de
        forma rápida y segura
      </p>
      <Row className="mt-5">
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Image src={peru} roundedCircle width={150} />
        </Col>
        <Col
          xs={6}
          md={2}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Image src={argentina} roundedCircle width={150} />
        </Col>
        <Col
          xs={6}
          md={2}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Image src={brasil} roundedCircle width={150} />
        </Col>
        <Col
          xs={6}
          md={2}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Image src={chile} roundedCircle width={150} />
        </Col>
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Image src={usa} roundedCircle width={150} />
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={zelle} roundedCircle width={150} />
        </Col>

        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={mercadopago} roundedCircle width={150} />
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={binance} roundedCircle width={230} height={200} />
        </Col>
      </Row>
    </Container>
  );
};

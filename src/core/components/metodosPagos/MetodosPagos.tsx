import { type ReactNode } from 'react';
import { Card, Container } from 'react-bootstrap';
import peru from '../../../assets/img/peru.jpeg';
import argentina from '../../../assets/img/argentina.jpeg';
import brasil from '../../../assets/img/brasil.jpeg';
import chile from '../../../assets/img/chile.jpeg';
import binance from '../../../assets/img/binance.png';
import zelle from '../../../assets/img/zelle.png';
import mercadopago from '../../../assets/img/mercadopago.png';
import usa from '../../../assets/img/usa.jpeg';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';
import styles from './MetodosPagos.module.css';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ScrollReveal = ({ children, className = '', delay = 0 }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.revealVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

type PaymentMethod = {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  isLogo?: boolean;
};

const currencies: PaymentMethod[] = [
  {
    imgSrc: argentina,
    alt: 'Bandera de Argentina',
    title: 'Peso argentino (ARS)',
    description: 'Pagos en efectivo en pesos argentinos al momento del servicio.',
    category: 'Moneda'
  },
  {
    imgSrc: peru,
    alt: 'Bandera de Perú',
    title: 'Sol peruano (PEN)',
    description: 'Pagos en efectivo en soles peruanos al momento del servicio.',
    category: 'Moneda'
  },
  {
    imgSrc: brasil,
    alt: 'Bandera de Brasil',
    title: 'Real brasileño (BRL)',
    description: 'Pagos en efectivo en reales brasileños al momento del servicio.',
    category: 'Moneda'
  },
  {
    imgSrc: chile,
    alt: 'Bandera de Chile',
    title: 'Peso chileno (CLP)',
    description: 'Pagos en efectivo en pesos chilenos al momento del servicio.',
    category: 'Moneda'
  },
  {
    imgSrc: usa,
    alt: 'Bandera de Estados Unidos',
    title: 'Dólar  (USD)',
    description: 'Pagos en efectivo en dólares  al momento del servicio.',
    category: 'Moneda'
  }
];

const digitalPayments: PaymentMethod[] = [
  {
    imgSrc: zelle,
    alt: 'Logo de Zelle',
    title: 'Zelle',
    description: 'Transferencias instantáneas en USD desde cuentas bancarias en EE.UU.',
    category: 'Digital',
    isLogo: true
  },
  {
    imgSrc: mercadopago,
    alt: 'Logo de Mercado Pago',
    title: 'Mercado Pago',
    description: 'Pagos rápidos y seguros a través de la plataforma Mercado Pago.',
    category: 'Digital',
    isLogo: true
  },
  {
    imgSrc: binance,
    alt: 'Logo de Binance',
    title: 'Binance',
    description: 'Aceptamos pagos en criptomonedas a través de Binance Pay.',
    category: 'Cripto',
    isLogo: true
  }
];

type PaymentCardProps = PaymentMethod & {
  delay: number;
};

const PaymentCard = ({
  imgSrc,
  alt,
  title,
  description,
  category,
  isLogo,
  delay
}: PaymentCardProps) => (
  <ScrollReveal delay={delay}>
    <Card className={styles.card}>
      <div className={styles.imageArea}>
        <div className={`${styles.imageWrapper} ${isLogo ? styles.imageWrapperSquare : ''}`}>
          <img
            src={imgSrc}
            alt={alt}
            className={`${styles.image} ${isLogo ? styles.imageLogo : ''}`}
          />
        </div>
      </div>
      <Card.Body className={styles.cardBody}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </Card.Body>
    </Card>
  </ScrollReveal>
);

export const MetodosPagos = () => {
  return (
    <>
      <section className={styles.section}>
        <Container>
          <hr className={`${styles.divider} mt-5`} />

          <ScrollReveal>
            <header className={`${styles.header} mt-5`}>
              <span className={styles.badge}>Formas de pago</span>
              <h1 className={styles.title}>
                Pagá de forma <span className={styles.titleAccent}>rápida y segura</span>
              </h1>
              <p className={styles.subtitle}>
                Aceptamos una variedad de monedas y plataformas digitales para facilitar
                tus transacciones sin complicaciones.
              </p>
            </header>
          </ScrollReveal>

          <div className={`${styles.cardsGrid} ${styles.cardsGridCurrencies} mb-5`}>
            {currencies.map((currency, index) => (
              <div className={styles.cardItem} key={currency.title}>
                <PaymentCard {...currency} delay={150 + index * 100} />
              </div>
            ))}
          </div>

          <div className={`${styles.cardsGrid} ${styles.cardsGridDigital} mb-5`}>
            {digitalPayments.map((payment, index) => (
              <div className={styles.cardItem} key={payment.title}>
                <PaymentCard {...payment} delay={150 + index * 100} />
              </div>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <hr className={styles.divider} />
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
};

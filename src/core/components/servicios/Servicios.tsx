import { type ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import reloj from '../../../assets/img/reloj.png';
import avion from '../../../assets/img/avion.png';
import carro from '../../../assets/img/carro.png';
import paqueteria from '../../../assets/img/paquete.png';
import mascotas from '../../../assets/img/huella.png';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';
import styles from './Servicios.module.css';

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

type Service = {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  isPhoto?: boolean;
};

const services: Service[] = [
  {
    imgSrc: avion,
    alt: 'Avión',
    title: 'Traslados desde y hacia aeropuertos',
    description:
      'Servicio de transporte exclusivo en las áreas de llegada nacionales e internacionales. Monitoreamos tu vuelo constantemente para evitar cualquier inconveniente con los horarios.',
    category: 'Traslado'
  },
  {
    imgSrc: carro,
    alt: 'Vehículo ejecutivo',
    title: 'Traslados corporativos y particulares',
    description:
      'Traslados para empresas y particulares con conductores experimentados y vehículos de alta gama, adaptados a las necesidades de tu negocio o evento.',
    category: 'Corporativo'
  },
  {
    imgSrc: reloj,
    alt: 'Disponibilidad 24 horas',
    title: 'Disponibles las 24h, los 365 días',
    description:
      'Reservá sin importar la fecha o la hora. Estamos disponibles todo el año para brindarte el servicio que necesitás, cuando lo necesitás.',
    category: 'Disponibilidad'
  },
  {
    imgSrc: mascotas,
    alt: 'Traslado de mascotas',
    title: 'Traslado de mascotas',
    description:
      'Transporte seguro y cómodo para tu mascota. Conductores capacitados y vehículos adaptados para el traslado de perros, gatos y otras mascotas con la máxima atención.',
    category: 'Mascotas'
  },
  {
    imgSrc: paqueteria,
    alt: 'Servicio de mensajería',
    title: 'Servicio de mensajería',
    description:
      'Mensajería y cadetería puerta a puerta para empresas y particulares. Todo tipo de envíos en CABA y GBA.',
    category: 'Envíos',
    isPhoto: true
  }
];

type ServiceCardProps = Service & {
  index: number;
};

const ServiceCard = ({
  imgSrc,
  alt,
  title,
  description,
  category,
  isPhoto,
  index
}: ServiceCardProps) => (
  <article className={styles.serviceCard}>
    <div className={styles.cardTop}>
      <div className={styles.iconBox}>
        <img
          src={imgSrc}
          alt={alt}
          className={isPhoto ? styles.iconPhoto : styles.icon}
        />
      </div>
      <span className={styles.cardIndex} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <span className={styles.category}>{category}</span>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardDescription}>{description}</p>

    <footer className={styles.cardFooter}>
      <span className={styles.footerDot} aria-hidden="true" />
      <span className={styles.footerLine} aria-hidden="true" />
      <span className={styles.footerLabel}>Go Drive Agencia de Traslados y Envíos</span>
    </footer>
  </article>
);

const Servicios = () => {
  return (
    <section className={styles.section}>
        <Container>
          <hr className={`${styles.divider} mt-5`} />

          <ScrollReveal>
            <header className={`${styles.header} mt-5`}>
              <span className={styles.badge}>Nuestros servicios</span>
              <h1 className={styles.title}>
                Traslados de <span className={styles.titleAccent}>calidad premium</span>
              </h1>
              <p className={styles.subtitle}>
                Ofrecemos servicios exclusivos para satisfacer todas tus necesidades
                de transporte, ya sea para viajes de negocios o personales.
              </p>
            </header>
          </ScrollReveal>

          <div className={styles.cardsGrid}>
            {services.map((service, index) => (
              <div key={service.title} className={styles.cardCol}>
                <ScrollReveal delay={150 + index * 120}>
                  <ServiceCard {...service} index={index} />
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <hr className={styles.divider} />
          </ScrollReveal>
        </Container>
    </section>
  );
};


export default Servicios;

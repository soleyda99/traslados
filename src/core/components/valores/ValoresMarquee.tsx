import { type ReactNode } from 'react';
import styles from './ValoresMarquee.module.css';

type Valor = {
	id: string;
	icon: ReactNode;
	title: string;
	subtitle: string;
};

const HeadsetIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<path d="M12 32v-4a20 20 0 0 1 40 0v4" strokeLinecap="round" />
		<rect x="8" y="32" width="10" height="18" rx="4" />
		<rect x="46" y="32" width="10" height="18" rx="4" />
		<path d="M18 50v4a14 14 0 0 0 28 0v-4" strokeLinecap="round" />
		<path d="M32 54v6" strokeLinecap="round" />
		<path d="M26 60h12" strokeLinecap="round" />
	</svg>
);

const AwardIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<circle cx="32" cy="26" r="14" />
		<path d="M22 38l-6 18 16-8 16 8-6-18" strokeLinejoin="round" />
		<path d="M32 18v16M26 26h12" strokeLinecap="round" />
	</svg>
);

const SecurityIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<rect x="16" y="12" width="32" height="40" rx="4" />
		<path d="M24 12V8a8 8 0 0 1 16 0v4" strokeLinecap="round" />
		<path d="M26 34l6 6 12-14" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const TeamIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<circle cx="24" cy="22" r="8" />
		<circle cx="40" cy="22" r="8" />
		<path d="M10 50c0-8 6-14 14-14s14 6 14 14" strokeLinecap="round" />
		<path d="M36 50c0-6 4-10 10-10" strokeLinecap="round" />
	</svg>
);

const SuitcaseIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<rect x="14" y="24" width="36" height="28" rx="4" />
		<path d="M24 24V18a8 8 0 0 1 16 0v6" strokeLinecap="round" />
		<path d="M14 34h36" strokeLinecap="round" />
		<path d="M32 34v8" strokeLinecap="round" />
		<circle cx="32" cy="38" r="2" fill="currentColor" stroke="none" />
	</svg>
);

const LightbulbIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<path d="M32 8a16 16 0 0 0-8 29.8V44h16v-6.2A16 16 0 0 0 32 8z" strokeLinejoin="round" />
		<path d="M24 48h16" strokeLinecap="round" />
		<path d="M26 54h12" strokeLinecap="round" />
		<path d="M28 54v4h8v-4" strokeLinejoin="round" />
	</svg>
);

const StopwatchIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<circle cx="32" cy="36" r="18" />
		<path d="M32 36V24" strokeLinecap="round" />
		<path d="M32 36l8 6" strokeLinecap="round" />
		<path d="M28 10h8" strokeLinecap="round" />
		<path d="M32 10V6" strokeLinecap="round" />
		<path d="M40 14l3-3" strokeLinecap="round" />
	</svg>
);

const StarIcon = () => (
	<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
		<path
			d="M32 10l6.5 13.2 14.5 2.1-10.5 10.2 2.5 14.4L32 44.8 18.9 50l2.5-14.4L11 25.3l14.5-2.1L32 10z"
			strokeLinejoin="round"
		/>
	</svg>
);

const valores: Valor[] = [
	{
		id: 'comunicacion',
		icon: <HeadsetIcon />,
		title: 'COMUNICACIÓN',
		subtitle: 'Contamos con la última tecnología'
	},
	{
		id: 'responsabilidad',
		icon: <AwardIcon />,
		title: 'RESPONSABILIDAD',
		subtitle: 'Profesionalismo y dedicación'
	},
	{
		id: 'seguridad',
		icon: <SecurityIcon />,
		title: 'SEGURIDAD',
		subtitle: 'Capacitación e innovación constante'
	},
	{
		id: 'trabajo-equipo',
		icon: <TeamIcon />,
		title: 'TRABAJO EN EQUIPO',
		subtitle: 'Valiosos Recursos Humanos'
	},
	{
		id: 'honestidad',
		icon: <SuitcaseIcon />,
		title: 'HONESTIDAD',
		subtitle: 'Entrega segura de objetos extraviados'
	},
	{
		id: 'originalidad',
		icon: <LightbulbIcon />,
		title: 'ORIGINALIDAD',
		subtitle: 'Desarrollo de servicios a medida'
	},
	{
		id: 'puntualidad',
		icon: <StopwatchIcon />,
		title: 'PUNTUALIDAD',
		subtitle: 'Siempre a horario'
	},
	{
		id: 'calidad',
		icon: <StarIcon />,
		title: 'CALIDAD',
		subtitle: 'Atención en cada detalle'
	}
];

const ValorItem = ({ icon, title, subtitle }: Omit<Valor, 'id'>) => (
	<article className={styles.item}>
		<div className={styles.iconWrap}>{icon}</div>
		<h2 className={styles.itemTitle}>{title}</h2>
		<p className={styles.itemSubtitle}>{subtitle}</p>
	</article>
);

const ValoresMarquee = () => {
	const loopItems = [...valores, ...valores];

	return (
		<section className={styles.section} aria-label="Nuestros valores">

			<div className={styles.overlay} aria-hidden="true" />

			<div className={styles.track}>
				<div className={styles.marquee}>
					{loopItems.map((valor, index) => (
						<ValorItem
							key={`${valor.id}-${index}`}
							icon={valor.icon}
							title={valor.title}
							subtitle={valor.subtitle}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ValoresMarquee;

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ARREGLO DE COMPUTADORAS',
    Svg: require('@site/static/img/arreglo.svg').default,
    description: (
      <>
        Si tienes alguna computadora con algun defecto nosotros te ayudaremos, ya que contamos con mucho personal de servicio. No dudes de traer tu computadora.
      </>
    ),
  },
  {
    title: 'VENTA DE REPUESTOS DE COMPUTADORAS',
    Svg: require('@site/static/img/repuesto.svg').default,
    description: (
      <>
        Si nesesitas renobar tu computadora no dudes de asercarte a nuestras instalaciones de trabajo, porque aqui tenemos todo lo que nesesitas.
      </>
    ),
  },
  {
    title: 'TUTORIALES GRATUITOS',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
      Si quieres aprender más sobre arreglo de computadoras no dudes en visitar nuestro canal de YouTube. 
    {' '} {/* Esto agrega un espacio antes del enlace */}
    <a href="https://www.youtube.com/channel/UCpU9Fvee31I5zgOfX2Dr1zw" target="_blank" rel="noopener noreferrer">Click aquí</a> 
    .
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

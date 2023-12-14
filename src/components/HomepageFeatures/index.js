import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'GitHub',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Jonesy-1212'>
          {'Jonesy'}
        </a>
      </>
    ),
  },
  {
    title: '关于',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Frontend engineer</>,
  },
  {
    title: '联系',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>w19121297@163.com</>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        {/* <Svg className={styles.featureSvg} role='img' /> */}
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

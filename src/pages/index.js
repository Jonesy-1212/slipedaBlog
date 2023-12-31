import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import Heading from '@theme/Heading'
import styles from './index.module.css'

// import profile from '@site/static/img/profile.png'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className='container'>
        <img
          // src={profile}
          src='https://cdn.jsdelivr.net/gh/Jonesy-1212/image-share/img/profile.png'
          style={{ width: 280, borderRadius: '50%' }}
        />
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link className='button button--secondary button--lg' to='docs/all-intro'>
            学习笔记
          </Link> */}
          <Link className='button button--secondary button--lg' to='blog'>
            博客
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

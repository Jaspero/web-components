import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div class={styles.hero}>
        <h1>@jaspero/web-components</h1>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Documentation
        </Link>
      </div>
    </Layout>
  );
}

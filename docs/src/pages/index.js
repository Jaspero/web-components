import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const codeElement = document.querySelector(`.${styles.terminalCode}`);
    const textToCopy = codeElement.textContent.trim().replace(/^\$/, ''); // Remove the leading "$"

    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    });
  };

  return (
    <Layout
      title="Jaspero Web Components"
      description="A collection of commonly used web components. Each distributed independently."
    >
      <div className={styles.hero}>
        <div className={styles.heroUpper}>
          <div className={styles.heroUpperContainer}>
            <div>
              <h1>JASPERO</h1>
              <h2>web components</h2>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Documentation
              </Link>
            </div>

            <img src={useBaseUrl('/img/logo.svg')} alt="logo" />
          </div>
        </div>
        <div className={styles.heroLower}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButton}></div>
              <div className={styles.terminalButton}></div>
              <div className={styles.terminalButton}></div>
              <div className={styles.terminalTitle}>terminal</div>
            </div>
            <code className={styles.terminalCode}>
              $ npm i --save-exact @jaspero/web-components
              <button onClick={copyToClipboard}>
                {' '}
                {/*Add copy to clipboard functionality here*/}
                {isCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    <span>Copied</span>
                  </>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                    <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
                  </svg>
                )}
              </button>
            </code>
          </div>
        </div>
      </div>
    </Layout>
  );
}

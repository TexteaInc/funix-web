import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';

const demoCode = `from openai import OpenAI
from typing import Literal
from IPython.display import Image

client = OpenAI()


def generate_image(
    prompt: str,
    model: Literal["dall-e-3", "dall-e-2"] = "dall-e-3",
) -> Image:
    response = client.images.generate(
        model=model,
        prompt=prompt,
    )
    return Image(url=response.data[0].url)`

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroColumns}>
          <div className={styles.demoCodeAndTerminal}>
            <ReactPrismjs source={demoCode} language="python" className={styles.demoCode} />
            <ReactPrismjs source={"$ funix generate.py"} language="bash" className={styles.demoCode} />
          </div>
          <img src="/img/funix_generate_image.png" alt="Funix Demo" />
        </div>
        <div className={styles.buttons}>
          
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Building web apps without manually creating widgets">
      <HomepageHeader />
      <main>
        {/* WIP */}
      </main>
    </Layout>
  );
}

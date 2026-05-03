import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">D. J. P. Holtzman</span>
        </h1>

        <p className="hero-tagline">
           Legal Assistant at{' '}
          <a href="https://lawcornwall.com" className="hero-highlight">
           Huza Law Office{' '} 
          </a>
           and Student at{' '}
          <a href="https://www.yorkvilleu.ca/" className="hero-highlight">
           Yorkville University{' '}
          </a>
           pursuing a future in psychotherapy.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">uOttawa Alumni</span>
          <span className="hero-chip">Yorkville MACP</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
          {/* resume download link if needed
          <a href="/docs/CV.pdf" download className="button button-secondary">
            Download Resume
          </a>
          */}
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}

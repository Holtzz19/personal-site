import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>David Holtzman</h2>
        <p>
          <a href="mailto:david@holtzz.com">david@holtzz.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m a psychology student at{' '}
        <a href="https://uottawa.ca/">The University of Ottawa</a>. I&apos;m nearing the end of my bachelor and I&apos;m very excited. I&apos;m also an administrative assistant at{' '}
        <a href="https://lawcornwall.com">Huza Law Office</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
        <li>
          <a href="/CV.pdf" download className="button">
            Download Resume
          </a>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; David Holtzman <Link to="/">holtzz.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

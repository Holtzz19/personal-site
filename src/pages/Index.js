import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "David Holtzman's personal website. Cornwall based uOttawa Graduate, "
      + '-'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome To My Portfolio</Link>
          </h2>
          <p>
            Here you can learn all about who I am and what I do.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more {' '}
        <Link to="/about">about me</Link>, check out my{' '}
        <Link to="/resume">resume</Link>, {' '}
        view <Link to="/stats">my statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Thanks for visiting!
      </p>
    </article>
  </Main>
);

export default Index;

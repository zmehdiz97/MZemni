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
        <h2>Mehdi Zemni</h2>
        <p><a href="mailto:mehdi.zemni@student-cs.fr">mehdi.zemni@student-cs.fr</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mehdi. I am a final year student at
        <a href="https://www.centralesupelec.fr/">Centralesupélec</a> and master’s student at ENS Paris-Saclay (<a href="https://www.master-mva.com/">MVA</a>)
        . Passionate about AI and computer vision and highly motivated by technical challenges
        . My interests include generative models
        , self-supervised learning
        , Interpretabilty and 3D computer vision
        . Proactive in my work with a strong desire for self-improvement and overachievement.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;

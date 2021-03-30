import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section id="qq_contacts">
      <h2>Who we are</h2>
      <p>
        We are a team of several skilled developers with a huge experience in commercial software development. We
        decided to get together as we feel the power to create simple and usable applications helping the people around.
      </p>
    </section>
    <section>
      <h2>Please write to us!</h2>
      <p>
        We love any feedback! Tell us what you think about our apps. Tell us any difficulties you face in everyday life
        – maybe part of these problems can be solved with the right mobile app or web service.
      </p>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:info@free-simple-apps.com">info@free-simple-apps.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://www.facebook.com/free.simple.apps" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/free_simple_apps" className="icon fa-telegram alt">
            <span className="label">Telegram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy; 2021 Free Simple Apps. All rights reserved.</p>
  </footer>
)

export default Footer

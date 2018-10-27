import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section id="qq_contacts">
      <h2>Who we are</h2>
      <p>
        We are a team of several skilled developers with huge experience in commercial software development. We decided to get together as we feel the power to create simple and usable applications helping all the people.
      </p>

      <ul className="actions">

<!--

        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>

-->

      </ul>
    </section>
    <section>
      <h2>Please write to us!</h2>
		<p>
			We love any feedback! Tell us what you think about our apps.Tell us any difficulties you face in everyday life – maybe part of these problem can be solved with the right softphone app or web service.
		</p>
      <dl className="alt">

<!--

        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>

-->

        <dt>Email</dt>
        <dd>
          <a href="mailto:info@free-simple-apps.com">info@free-simple-apps.com</a>
        </dd>
      </dl>
      <ul className="icons">

<!--

        <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>

-->

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

<!--

        <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>

-->

      </ul>
    </section>
    <p className="copyright">&copy; 2018 Free Simple Apps. All rights reserved.</p>
  </footer>
)

export default Footer

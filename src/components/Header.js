import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Free Simple Apps</h1>
    <p style={{ marginBottom: '2px' }}>We make apps for easy, cheerful and healthy life.</p>
    <p>
      <a href="https://play.google.com/store/apps/developer?id=FSA+–+Simple+Apps" style={{ fontWeight: 'bold' }}>
        Find our apps in Google Play.
      </a>
    </p>
    <p>
      Lightweight and {' '}
      <a href="https://photo2pdf.me/">
        simple Photo to PDF converter
      </a>
      {' '}, find it here:{' '}
      <a href="https://photo2pdf.me/">
        https://photo2pdf.me
      </a>
      {' '}. <br/>Hundreds of thousands of users from all over the world use our PDF converters every day.
    </p>
    <p>
      Try our handy and{' '}
      <a href="https://1daytodo.com/to-do/" style={{ fontWeight: 'bold' }}>
        simple to-do list
      </a>
      {' '}for Android, iOS and any browser.
    </p>
  </header>
)

export default Header

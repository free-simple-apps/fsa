import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Free Simple Apps</h1>
    <p style="margin-bottom:2px;">We make apps for easy, cheerful and healthy life.</p>
    <p>
      <a href="https://play.google.com/store/apps/developer?id=Free+Simple+Apps" style="font-weight:bold">Find our apps in Google Play!</a>
    </p>
  </header>
)

export default Header

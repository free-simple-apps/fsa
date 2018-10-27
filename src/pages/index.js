import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Productivity and entertainment – Free Simple Apps" />

        <Header />

        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

<!--

          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>We're FSA</h2>
                </header>
                <p>
                  We are a team of skilled app developers, UI and UX designers, product strategists and marketers, who
                  understand what makes people and mobile apps click.
                  <br />
                  <br />
                  At FSA, we don't just build apps. We create the kind of apps that people talk about, that they use
                  over and over again. We eat, sleep, and breathe mobile. It's who we are.
                  <br />
                  <br />
                  We do strategy, design, and development for iPhone apps and Android apps. We work for startups and
                  enterprise alike. We also know a thing or two about websites, and services.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

-->

          <section id="services" className="main special">
            <header className="major">
              <h2>Our passion: making life easier</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Productivity</h3>
                <p>
                  Personal and Team productivity is our goal. We create apps and services solving everyday difficulties that annoy you like mosquitoes.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Entertainment</h3>
                <p>
                  We enjoy working, but we also need to rest. We think we can spend our free time efficiently and use every spare minute more pleasantly. Moreover, we believe that everyday routine can be more comfortable with perfectly created apps and tools.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

<!--

          <section id="projects" className="main special">
            <header className="major">
              <h2>Previous Mobile Projects</h2>
              <p>
                We are an experienced mobile app development company, focused on doing more than coding native apps:
                <br />
                we work with innovative entrepreneurs to launch products that solve real market needs and create
                delightful experiences for their users.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.
              Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem,
              sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus
              semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et
              accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
              Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Let's talk</h2>
              <p>
                Ready to create the next big thing? Great, us too!
                <br />
                we’ll get back to you within one business day.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

-->

        </div>
      </Layout>
    )
  }
}

export default Index

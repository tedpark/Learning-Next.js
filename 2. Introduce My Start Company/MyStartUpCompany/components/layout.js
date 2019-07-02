import Head from "next/head";
import Link from "next/link";
import "../styles/styles.sass";
import "../styles/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faGamepad } from "@fortawesome/free-solid-svg-icons";

export default ({ children }) => {
  const toggleStyles = event => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };
  return (
    <section className="hero is-medium is-primary">
      <Head>
        <title>My StartUp Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="hero-head">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
            style={{ height: 60, marginLeft: 60, marginRight: 60 }}
          >
            <div className="navbar-brand">
              <Link prefetch href="/">
                <a className="navbar-item">
                  <img src="/static/pic.png" alt="Logo" />
                </a>
              </Link>
              <a
                id="burger"
                onClick={toggleStyles}
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarmenu"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarmenu" className="navbar-menu">
              <div className="navbar-end">
                <Link prefetch href="/">
                  <a className="navbar-item" style={{ color: "#FFFFFF" }}>
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ marginRight: 6, fontSize: 23 }}
                      color="#FFFFFF"
                    />
                    Main
                  </a>
                </Link>
                <Link prefetch href="/teams">
                  <a className="navbar-item" style={{ color: "#FFFFFF" }}>
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ marginRight: 6, fontSize: 23 }}
                      color="#FFFFFF"
                    />
                    Teams
                  </a>
                </Link>
                <Link prefetch href="/products">
                  <a className="navbar-item" style={{ color: "#FFFFFF" }}>
                    <FontAwesomeIcon
                      icon={faGamepad}
                      style={{ marginRight: 6, fontSize: 23 }}
                      color="#FFFFFF	"
                    />
                    Products
                  </a>
                </Link>
              </div>
              {/* <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
                </div>
              </div>
            </div> */}
            </div>
          </nav>
        </div>
      </header>
      {children}
      <footer className="footer" style={{ backgroundColor: "##FAFAFA" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-3 is-offset-2">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Vestibulum errato isse</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Aisia caisia</a>
                </li>
                <li>
                  <a href="#">Murphy's law</a>
                </li>
                <li>
                  <a href="#">Flimsy Lavenrock</a>
                </li>
                <li>
                  <a href="#">Maven Mousie Lavender</a>
                </li>
              </ul>
            </div>
            <div className="column is-3">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Labore et dolore magna aliqua</a>
                </li>
                <li>
                  <a href="#">Kanban airis sum eschelor</a>
                </li>
                <li>
                  <a href="#">Modular modern free</a>
                </li>
                <li>
                  <a href="#">The king of clubs</a>
                </li>
                <li>
                  <a href="#">The Discovery Dissipation</a>
                </li>
                <li>
                  <a href="#">Course Correction</a>
                </li>
                <li>
                  <a href="#">Better Angels</a>
                </li>
              </ul>
            </div>
            <div className="column is-4">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Objects in space</a>
                </li>
                <li>
                  <a href="#">Playing cards with coyote</a>
                </li>
                <li>
                  <a href="#">Goodbye Yellow Brick Road</a>
                </li>
                <li>
                  <a href="#">The Garden of Forking Paths</a>
                </li>
                <li>
                  <a href="#">Future Shock</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="https://github.com/tedpark/Learning-Next.js/tree/master/SecondPart/MyStartUpCompany"
              >
                <i className="fa fa-github" />
              </a>
            </p>
            <div className="control level-item">
              <a href="https://github.com/tedpark/Learning-Next.js/tree/master/SecondPart/MyStartUpCompany">
                <div className="tags has-addons">
                  <span className="tag is-dark">Learning Next.js</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

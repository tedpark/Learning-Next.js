import Layout from "../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  coffee,
  apple,
  faCheckSquare,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import "../styles/tabs.css";
export default () => (

  <Layout>
    <section className="hero is-info">
      <div className='embed-container image'>
        <iframe src='https://player.vimeo.com/video/118578774' frameBorder='0' allow="autoplay; fullscreen" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      </div>
    </section>
  </Layout >
);
{/* <iframe src="https://player.vimeo.com/video/118578774" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */ }
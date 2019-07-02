import Layout from "../components/layout";
import "../styles/modal-fx.css";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  coffee,
  apple,
  faCheckSquare,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";

import React, { Component } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};


export default class Teams extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Head>
          <script src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
        </Head>
        <section className="container">
          <div className="columns features">
            <div className="column is-4 modal-button" data-target="modal1-card">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://i.imgsafe.org/3f/3f0c578f9d.jpeg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>
                      1Click anywhere on card to <br />
                      expand into modal card
                    </h4>
                    <p>
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
                    </p>
                    <span className="button is-link modal-button">
                      Modal card
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4 modal-button" data-target="modal-image">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://i.imgsafe.org/ba/baa924a5e3.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Click anywhere on card</h4>
                    <p>
                      Imperdiet dui accumsan sit amet nulla facilisi morbi.
                      Fusce ut placerat orci nulla pellentesque dignissim enim.
                      Libero id faucibus nisl tincidunt eget nullam. Commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <span
                      className="button is-link modal-button"
                      data-target="modal-image"
                    >
                      Image modal
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4 modal-button" data-target="modal1-card">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>
                      1Click anywhere on card to <br />
                      expand into modal card
                    </h4>
                    <p>
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
                    </p>
                    <span className="button is-link modal-button">
                      Modal card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="box cta">
          <p className="has-text-centered">
            <span className="tag is-primary">New</span> **We make tools to help people achieve their best thinking. And We're Hiring.**
          </p>
        </div>

        <div id="modal1-card" className="modal modal-fx-3dSlit">
          <div className="modal-background" />
          <div className="modal-content is-tiny">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/6Ticnhs1AG0"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                        alt="linda barret avatar"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Jane Doe</p>
                    <p className="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div className="content">
                  111Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
                  tellin' you way up north bookin' it can't get theyah from
                  heeyah native bean suppah whawf Powrtland Museum of Aht, back
                  woods hawsun around the pit mummah Yessah, mummah muckle riyht
                  on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce
                  ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah
                  sumpin' fierce hoppa bub If you can't stand the wintah you
                  don't deserve the summah slower than molasses going uphill in
                  January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak
                  Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor
                  ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig,
                  naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye.
                  Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih
                  throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
                  nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2018-02-02">12:45 AM - 20 June 2018</time> */}
                </div>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>

        <div id="modal-card2" className="modal modal-fx-3dSlit">
          <div className="modal-background" />
          <div className="modal-content is-tiny">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/hLyd1LukQ7E"
                    alt="butterfly"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                        alt="linda barret avatar"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Jane Doe</p>
                    <p className="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div className="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm
                  tellin' you way up north bookin' it can't get theyah from
                  heeyah native bean suppah whawf Powrtland Museum of Aht, back
                  woods hawsun around the pit mummah Yessah, mummah muckle riyht
                  on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce
                  ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah
                  sumpin' fierce hoppa bub If you can't stand the wintah you
                  don't deserve the summah slower than molasses going uphill in
                  January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak
                  Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor
                  ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig,
                  naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye.
                  Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih
                  throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg
                  nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2018-02-02">12:45 AM - 20 May 2018</time> */}
                </div>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>

        <div id="modal-image2" className="modal modal-fx-3dSlit">
          <div className="modal-background" />
          <div className="modal-content is-huge is-image">
            <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
        <div id="modal-image4" className="modal modal-fx-3dSlit">
          <div className="modal-background" />
          <div className="modal-content is-huge is-image">
            <img
              src="https://source.unsplash.com/hLyd1LukQ7E"
              alt="butterfly"
            />
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>

        <div id="modal-image" className="modal modal-fx-superScaled">
          <div className="modal-background" />
          <div className="modal-content  is-image">
            <img
              src="https://i.imgsafe.org/ba/baa924a5e3.png"
              alt="Placeholder image"
            />
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
        <script src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
      </Layout>
    );
  }
}

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <>
    <div className="hero-body">
      <div className="search-bar">
        <div className="search">
          <input type="text" className="search-text" placeholder="What's your postcode?" />
          <button type="submit" className="search-button">
            <img src="../../assets/search.png" />
          </button>
        </div>
      </div>
    </div>
    <a href="#skills" className="arrow"><img src="../../assets/arrow.png" /></a>
    <section>
      <div className="wrapper" id="skills">
        <div className="columns is-mobile is-multiline">
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/african2.jpeg" alt="african" />
              <div className="border">
                <h2>African</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/caribbean4.jpeg" alt="caribbean" />
              <div className="border">
                <h2>Caribbean</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/chinese2.jpeg" alt="chinese" />
              <div className="border">
                <h2>Chinese</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/french4.jpeg" alt="french" />
              <div className="border">
                <h2>French</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/greek.jpeg" alt="greek" />
              <div className="border">
                <h2>Greek</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/indian2.jpeg" alt="indian" />
              <div className="border">
                <h2>Indian</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/italian2.jpeg" alt="italian" />
              <div className="border">
                <h2>Italian</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/japan3.jpeg" alt="japanese" />
              <div className="border">
                <h2>Japanese</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/korean5.jpeg" alt="korean" />
              <div className="border">
                <h2>Korean</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/mexican3.jpg" alt="mexican" />
              <div className="border">
                <h2>Mexican</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/moroccan.jpeg" alt="moroccan" />
              <div className="border">
                <h2>Moroccan</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/asian.jpeg" alt="south-east asian" />
              <div className="border">
                <h2>South-East Asian</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/spanish6.jpg" alt="spanish" />
              <div className="border">
                <h2>Spanish</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/turkish4.jpg" alt="turkish middle-eastern" />
              <div className="border">
                <h2>Turkish/Middle-Eastern</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/vegan6.jpeg" alt="vegan" />
              <div className="border">
                <h2>Vegan</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/vegan8.jpg" alt="vegetarian" />
              <div className="border">
                <h2>Vegetarian</h2>
              </div>
            </Link>
          </div>
        </div >
      </div >
    </section >
  </>
)

export default Home
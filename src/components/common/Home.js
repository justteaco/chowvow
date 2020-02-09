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
              <img src="../../assets/african.jpeg" alt="african" />
              <div className="border">
                <h2>African</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/caribbean.jpeg" alt="caribbean" />
              <div className="border">
                <h2>Caribbean</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/chinese.jpeg" alt="chinese" />
              <div className="border">
                <h2>Chinese</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/french.jpeg" alt="french" />
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
              <img src="../../assets/indian.jpeg" alt="indian" />
              <div className="border">
                <h2>Indian</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/italian.jpeg" alt="italian" />
              <div className="border">
                <h2>Italian</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/japanese.jpeg" alt="japanese" />
              <div className="border">
                <h2>Japanese</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/korean.jpeg" alt="korean" />
              <div className="border">
                <h2>Korean</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/mexican.jpg" alt="mexican" />
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
              <img src="../../assets/spanish.jpg" alt="spanish" />
              <div className="border">
                <h2>Spanish</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/turkish.jpg" alt="turkish middle-eastern" />
              <div className="border">
                <h2>Turkish/Middle-Eastern</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/vegan.jpeg" alt="vegan" />
              <div className="border">
                <h2>Vegan</h2>
              </div>
            </Link>
          </div>
          <div className="skill column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <Link to="/chefs">
              <img src="../../assets/vegetarian.jpg" alt="vegetarian" />
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
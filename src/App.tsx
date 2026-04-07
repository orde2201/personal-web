import { useState, useRef } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

// Importing images
import another from './assets/another.png'
import portofolio from './assets/portofolio.png'
import socialmedia from './assets/social-media.png'
import adminImage from './assets/admin.png'
import page4image from './assets/page4.png'
import homeIcon from './assets/home.png'
import instagramIcon from './assets/instagram.png'
import githubIcon from './assets/github.png'
import certificate1 from './assets/sertifikat/itbox1.png'
import certificate2 from './assets/sertifikat/itbox2.png'
import certificate3 from './assets/sertifikat/itbox3.png'
import certificate4 from './assets/sertifikat/udemy.jpg'
// Route components
import  FavoritAnime  from './favAnime.tsx'
import { FavoritMusic }from './favMusic.tsx'
//import imgEdit from './imgEdit.tsx'
//import instWeb from './instWeb.tsx'

function App() {
  const [adminImageHover, setAdminImageHover] = useState(false)

  const homeRef = useRef<HTMLElement | null>(null)
  const portofolioRef = useRef<HTMLElement | null>(null)
  const socialmediaRef = useRef<HTMLElement | null>(null)
  const otherRef = useRef<HTMLElement | null>(null)

  const scrolltoHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrolltoPortofolio = () => {
    portofolioRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrolltoSocialmedia = () => {
    socialmediaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrolltoOther = () => {
    otherRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseEnter = () => setAdminImageHover(true)
  const handleMouseLeave = () => setAdminImageHover(false)

  return (
    <>
      <Routes>
        <Route
          path="/" 
          element={
            <div className="main-container">

              {/* First Page */}
              <section ref={homeRef}>
                <div className="page1">
                  <div className='page1-left'>
                    <div className='top-box'></div>
                    <div className='left-box'>
                      <img src={another} alt="other" className='icon' onClick={scrolltoOther} />
                      <img src={portofolio} alt="portfolio" className='icon' onClick={scrolltoPortofolio} />
                      <img src={socialmedia} alt="social media" className='icon' onClick={scrolltoSocialmedia} />
                    </div>
                    <div className='donate-box'>Donate</div>
                  </div>

                  <div className='page1-right'>
                    <p className={`name ${adminImageHover ? 'hover-name' : ''}`}>YOGA</p>

                    <div className={`image-box ${adminImageHover ? 'hover-image-box' : ''}`}>
                      <p className={`description ${adminImageHover ? 'hover-description' : ''}`}>
                        Hello, my name is I Gede Krisna Yoga Saputra from Indonesia. 
                        I'm a penetration testing enthusiast. I hope you like anything that I make.
                      </p>
                    </div>

                    <img
                      src={adminImage}
                      alt="admin"
                      className={`image-admin ${adminImageHover ? 'hover-image-admin' : ''}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
              </section>

              {/* Second Page */}
              <section ref={portofolioRef}>
                <div className="page2">
                  <div className='left-box'>
                    <div className='home-box'>
                      <img src={homeIcon} alt="home" className='icon' onClick={scrolltoHome} />
                    </div>
                    <div className='porto'>Certificate</div>
                  </div>
                  <div className='portofolio-box'>
                    <img src={certificate1} alt="portofolio" className='portofolio-image' />
                    <img src={certificate2} alt="portofolio" className='portofolio-image' />
                    <img src={certificate3} alt="portofolio" className='portofolio-image' />
                    <img src={certificate4} alt="portofolio" className='portofolio-image' />
                  </div>
                </div>
              </section>

              {/* Third Page */}
              <section ref={socialmediaRef}>
                <div className="page3">
                  <div className='top-box'>
                    <p className='medsos-text'>Social Media and Contact</p>
                  </div>
                  <div className='bottom-box'>
                      <div className='right-box'>
                        <div className='home-box'>
                          <img src={homeIcon} alt="" className='icon' onClick={scrolltoHome} />
                        </div>
                      </div>
                      <div className='left-box'>
                        <div className='icon' id='1'>
                          <a href="fac"></a>
                        </div>
                        <div className='icon' id='2'>

                        </div>
                        <div className='icon' id='3'>
                          <a href="https://github.com/orde2201">
                            <img src={githubIcon} alt="" className='github-icon' />
                          </a>
                        </div>
                        <div className='icon' id='4'>
                          <a href="https://www.instagram.com/yoga_pepsodent/">
                            <img src={instagramIcon} alt="" className='instagram-icon' />
                          </a>
                        </div>
                        <div className='icon' id='5'>

                        </div>
                        <div className='icon' id='6'>
                        </div>
                      </div>
                  </div>
                </div>
              </section>

              {/* Fourth Page */}
              <section ref={otherRef}>
                <div className="page4">
                  <div className='left-box'>
                    <div className='home-box'>
                      <img src={homeIcon} alt="home" className='icon' onClick={scrolltoHome} />
                    </div>
                  </div>

                  <div className='middle-box'>
                    <p className='other'>Other</p>

                    <p className='other-list'>
                      <Link to="/favAnime">My favorite anime</Link>
                    </p>

                    <p className='other-list'>
                      <Link to="/imgEdit">My images edit</Link>
                    </p>

                    <p className='other-list'>
                      <Link to="/favMusic">My favorite music</Link>
                    </p>

                    <p className='other-list'>
                      <Link to="/instWeb">Interesting website</Link>
                    </p>
                  </div>

                  <div className='right-box'>
                    <img src={page4image} alt="page4" className='page4-image' />
                    <div className='background-image'></div>
                  </div>
                </div>
              </section>

            </div>
        } 
        />
        {/* Routes */}
      
        <Route path="/favAnime" element={<FavoritAnime />} />
        <Route path="/favMusic" element={<FavoritMusic />} />
       
      </Routes>
    </>
  )
}

export default App
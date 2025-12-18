import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing images from assets
import another from './assets/another.png'
import portofolio from './assets/portofolio.png'
import socialmedia from './assets/social-media.png'
import adminImage from './assets/admin.png'
import page4image from './assets/page4.png'
import homeIcon from './assets/home.png'
import instagramIcon from './assets/instagram.png'
import githubIcon from './assets/github.png'

//functional main
function App() {
  const [adminImageHover, setAdminImageHover] = useState(false);

  //scroll to home function
  const homeRef = useRef(null);
  const scrolltoHome = () => {
    homeRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const portofolioRef = useRef(null);
  const scrolltoPortofolio = () => {
    portofolioRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const socialmediaRef = useRef(null);
  const scrolltoSocialmedia = () => {
    socialmediaRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const otherRef = useRef(null);
  const scrolltoOther = () => {
    otherRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };



  const handleMouseEnter = () => {
    setAdminImageHover(true);
  };

  const handleMouseLeave = () => {
    setAdminImageHover(false);
  };

  return (
    <>
      <div className="main-container">
        <section className='waveeffect'>
          <div className="wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="content">
           
          </div>
        </section>
        {/* First Page */}
        <section ref={homeRef}>
          <div className="page1">
            <div className='page1-left'>
              <div className='top-box'>
              </div>

              <div className='left-box'>
                <img src={another} id='1' className='icon' onClick={scrolltoOther} />
                <img src={portofolio} id='2' className='icon' onClick={scrolltoPortofolio} />
                <img src={socialmedia} id='3' className='icon' onClick={scrolltoSocialmedia} />
              </div>
              
              <div className='donate-box'>
                <p>
                  Donate
                </p>
              </div>
            </div>

            <div className='page1-right'>
              <p className={`name ${adminImageHover ? 'hover-name':""}`}>YOGA</p>
              <div className={`image-box ${adminImageHover ? ' hover-image-box' : ''}`}>
                <p className={`description ${adminImageHover ? 'hover-description' : ''}`}  >
                  Hello, my name is I Gede Krisna Yoga Saputra from Indonesian. I'm full stak web development. i hope you like anything that i make
                </p>
              </div>
              <img src={adminImage} alt="" className={`image-admin ${adminImageHover ? ' hover-image-admin' : ''}`}
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
                <img src={homeIcon} alt="" className='icon' onClick={scrolltoHome} />
              </div>
              <div className='porto'>Portofolio</div>
            </div>

            <div className='portofolio-box'>
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
                 <img src={homeIcon} alt="" className='icon' onClick={scrolltoHome} />
              </div>
            </div>
            <div className='middle-box'>
              <p className='other'>Other</p>
              <p className='other-list'>
                My favorite anime
              </p>
              <p className='other-list'>
                My images eddit
              </p>
              <p className='other-list'>
                My favorite music
              </p>
              <p className='other-list'>
                Interesting website
              </p>
            </div>
            <div className='right-box'>
              <img src={page4image} alt="" className='page4-image' />
              <div className='background-image'></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

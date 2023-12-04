import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NFT from './assets/NF.svg'
import NFTRose from './assets/NFTRose.svg'
import NFTBleu from './assets/NFTBleu.svg'
import Dollar from './assets/Dollar.svg'
import Facebook from './assets/Facebook.svg'
import Image from './assets/Image.svg'
import LinkedIn from './assets/LinkedIn.svg'
import twitter from './assets/twitter.svg'
import RectangleOrange from './assets/RectangleOrange.svg'
import RectangleBleu from './assets/RectangleBleu.svg'
import RectangleComing from './assets/RectangleComing.svg'
import RectangleEnter from './assets/RectangleEnter.svg'
import RectangleMathieu from './assets/RectangleMathieu.svg'
import RectangleEwan from './assets/RectangleEwan.svg'
import Step1 from './assets/Step1.svg'
import Step2 from './assets/Step2.svg'
import Step3 from './assets/Step3.svg'
import Line from './assets/Line 2.svg'
import view from './assets/vew.png'
import test from './assets/teest.jpg'
import billet from './assets/billet.png'
import billetDroit from './assets/billetDroit.png'
import winner1 from './assets/winner.png'
import RectangleConnect from './assets/RectangleConnect.svg'


import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'




import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const lotterie = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 950,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };
  const works = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 2500,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };
  const winner = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 3500,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };
  const top = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<>
            <div className="slide-169-1">
              <div className="slide-169-1-child" />

              <div className="slide-169-1-item" />
              <div className="slide-169-1-inner" />
              <div className="slide-169-1-inner1" />
              <div className="slide-169-1-item1" />

              <b className="play-and-win">Play and win some prizes</b>
              <div className="top">
                <button className="denignma">Denigma</button>
                {/* <div className="lotterie">Lotterie</div> */}
                <div className="lotterie" onClick={lotterie}>Lotterie</div>
                <div className="how-i-works" onClick={works}>How it works</div>
                <div className="previous-winner" onClick={winner}>Previous winner</div>
                <Link to="/page1"><div className="my-account">my Account</div></Link>

              </div>
              <div className="bottom">
                <Link to="/"><div className="denigma" onClick={top}>denigma</div></Link>
                <Link to="/page1"><div className="my-account1" onClick={top}>my Account</div></Link>
                <div className="play-lotterie">play lotterie</div>
                <img className="facebook-icon" alt="" src={Facebook} />
                <img className="twitter-icon" alt="" src={twitter} />
                <img className="group-icon" alt="" src={LinkedIn} />
              </div>
              <div className="lotterie-wrapper">
                <b className="lotterie1">lotterie</b>
              </div>
              <img
                className="cryptocurrency-1-icon"
                alt=""
                src={view}
              />
              <div className="lotterie2">
                {/* <div className="lotterie-child" /> */}
                <button className="button">
                  <img className="button-child" alt="" src={RectangleBleu} />
                  <b className="enter">Enter</b>
                </button>
                <div className="eth">0.12 ETH</div>
                <img
                  className="unsplashpvoepplw818-icon"
                  alt=""
                  src={billetDroit}
                />
              </div>
              <button className="button2">
                <img className="button-item" alt="" src={RectangleConnect} />
                <b className="connect">Connect</b>
              </button>
              <div className="lotterie3">
                {/* <div className="lotterie-item" /> */}
                <button className="button1">
                  <img className="button-item" alt="" src={RectangleComing} />
                  <b className="coming-soon">Coming soon</b>
                </button>
                <div className="eth1">0.12 ETH</div>
                <img
                  className="unsplashpvoepplw818-icon1"
                  alt=""
                  src={billet}
                />
              </div>
              <div className="lotterie4">
                {/* <div className="lotterie-child" /> */}
                <button className="button">
                  <img className="button-child" alt="" src={RectangleBleu} />
                  <b className="enter">Enter</b>
                </button>
                <div className="eth">0.12 ETH</div>
                <img
                  className="unsplashpvoepplw818-icon"
                  alt=""
                  src={billetDroit}
                />
              </div>
              <button className="button3">
                <img className="rectangle-icon" alt="" src={RectangleOrange} />
                <b className="discover" onClick={lotterie}>Discover</b>
              </button>
              <div className="denigma-is-the">
                Denigma is the first dNFT’s Lotterie, buy some NFTs to try to win the
                prize, if not, sell it to a potential winner.
              </div>
              <div className="previous-winner1">
                <div className="lotterie5">
                  {/* <div className="rectangle-div" /> */}
                  <button className="button4">
                    <img className="button-child1" alt="" src={RectangleEwan} />
                    <img className="winner-icon1" alt="" src={winner1} />
                    <b className="ewan">Ewan</b>
                  </button>
                  <div className="lotterie-002">Lotterie #002</div>
                </div>
                <div className="lotterie6">
                  {/* <div className="lotterie-child1" /> */}
                  <button className="button4">
                    <img className="button-child1" alt="" src={RectangleMathieu} />
                    <img className="winner-icon2" alt="" src={winner1} />
                    <b className="ewan">Marc</b>
                  </button>
                  <div className="lotterie-002">Lotterie #001</div>
                </div>
                <div className="lotterie7">
                  {/* <div className="lotterie-child1" /> */}
                  <button className="button4">
                    <img className="button-child1" alt="" src={RectangleMathieu} />
                    <img className="winner-icon3" alt="" src={winner1} />
                    <b className="ewan">Mathieu</b>
                  </button>
                  <div className="lotterie-002">Lotterie #003</div>
                </div>
                <b className="previous-winners">Previous winners</b>
              </div>
              <div className="how-it-works">
                <button className="button7">
                  <img className="button-child4" alt="" src={RectangleBleu} />
                  <b className="discover1">Discover</b>
                </button>
                <b className="start-your-journey">Start your journey with Denigma</b>
                <img className="nft-4-icon" alt="" src={Step1} />
                <img className="mint-hammer-icon" alt="" src={Step2} />
                <img className="money-bag-icon" alt="" src={Step3} />
                <img className="how-it-works-child" alt="" src={Line} />
                <img className="how-it-works-item" alt="" src={Line} />
                <div className="how-it-works-inner" />
                <div className="ellipse-div" />
                <div className="how-it-works-child1" />
                <div className="how-it-works-child2" />
                <div className="step-1">Step 1</div>
                <div className="step-2">Step 2</div>
                <div className="step-3">Step 3</div>
                <div className="enter-a-lotterie">Enter a lotterie by buying a NFT</div>
                <div className="answer-some-enigmas">
                  Answer some enigmas to level up your NFT
                </div>
                <div className="discover-if-you">Discover if you win the game</div>
              </div>
            </div>
          </>} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
        </Routes>
      </Router>


    </>
  )
}

export default App

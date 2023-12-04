import { useState } from 'react'
import viteLogo from '/vite.svg'
import styles from './page2.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Ellipse from '../assets/Ellipse.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import RectangleAnswer from '../assets/RectangleAnswer.svg'
import RectangleEnterAnswer from '../assets/RectangleEnterAnswer.svg'
import RectangleBet from '../assets/RectangleBet.svg'
import RectangleConnect from '../assets/RectangleConnect.svg'

import style from './page2.module.css'

function Page2() {

    return (
        <>
            <div className={styles['slide-169-3']}>
                <div className={styles['slide-169-3-child']} />
                <div className={styles['slide-169-3-item']} />
                <div className={styles['slide-169-3-inner']} />
                <b className={styles['lotterie-001']}>Lotterie #001</b>
                <div className={styles['bottom']}>
                <Link to="/"><div className={styles['denigma']} onClick={top}>denigma</div></Link>
                <Link to="/page1"><div className={styles['my-account']} onClick={top}>My account</div></Link>


                    <div className={styles['play-lotterie']}>play lotterie</div>
                    <img className={styles['facebook-icon']} alt="" src={Facebook} />
                    <img className={styles['twitter-icon']} alt="" src={twitter} />
                    <img className={styles['group-icon']} alt="" src={LinkedIn} />
                </div>
                <div className={styles['enigma']}>
                    <b className={styles['enigma1']}>Enigma</b>
                    <div className={styles['i-am-a-container']}>
                        <span className={styles['i-am-a-container1']}>
                            {/* ... (Votre contenu JSX pour i-am-a-container1) */}
                            <p className={styles["i-am-a"]}>I am a digital ledger, secure and true,</p>
                            <p className={styles["i-am-a"]}>Blocks of data, in a chain I accrue.</p>
                            <p className={styles["i-am-a"]}>Decentralized and encrypted, what am I?</p>
                            <p className={styles["i-am-a"]}>A technology that makes transactions fly.</p>
                        </span>
                    </div>
                    <div className={styles['i-am-a-container2']}>
                        <span className={styles['i-am-a-container1']}>
                            {/* ... (Votre contenu JSX pour i-am-a-container1) */}
                            <p className={styles["i-am-a"]}>I am a digital ledger, secure and true,</p>
                            <p className={styles["i-am-a"]}>Blocks of data, in a chain I accrue.</p>
                            <p className={styles["i-am-a"]}>Decentralized and encrypted, what am I?</p>
                            <p className={styles["i-am-a"]}>A technology that makes transactions fly.</p>
                        </span>
                    </div>
                    <div className={styles['answer']}>
                        <div className={styles['email-grou']}>
                            <div className={styles['email-grou-child']} />
                            <input
                                className={styles['enter-answer']}
                                placeholder="Enter answer"
                                type="text"
                            />
                        </div>
                        <button className={styles['vector-parent']}>
                            <img className={styles['frame-child']} alt="" src={RectangleAnswer} />
                            <div className={styles['answer1']}>Answer</div>
                        </button>
                    </div>
                    <div className={styles['answer2']}>
                        <div className={styles['email-grou']}>
                            <div className={styles['email-grou-child']} />
                            <input
                                className={styles['enter-answer']}
                                placeholder="Enter answer"
                                type="text"
                            />
                        </div>
                        <button className={styles['vector-parent']}>
                            <img className={styles['frame-child']} alt="" src={RectangleAnswer} />
                            <div className={styles['answer1']}>Answer</div>
                        </button>
                    </div>
                    {/* ... (Votre contenu JSX pour numro et numro1) */}
                    <div className={styles["numro"]}>
                        <div className={styles["numro-child"]} />
                        <div className={styles["div"]}>1</div>
                    </div>
                    <div className={styles["numro1"]}>
                        <div className={styles["numro-child"]} />
                        <div className={styles["div1"]}>2</div>
                    </div>
                </div>
                <div className={styles['email-grou2']}>
                    <div className={styles['email-grou-inner']} />
                    <input className={styles['tokenid']} placeholder="BetID" type="text" />
                </div>
                <div className={styles['email-grou3']}>
                    <div className={styles['email-grou-inner']} />
                    <input className={styles['tokenid']} placeholder="Amount" type="text" />
                </div>
                <div className={styles['email-grou4']}>
                    <div className={styles['email-grou-inner']} />
                    <input className={styles['tokenid']} placeholder="Price" type="text" />
                </div>
                <div className={styles['email-grou5']}>
                    <div className={styles['email-grou-inner']} />
                    <input className={styles['tokenid']} placeholder="TokenId" type="text" />
                </div>
                <b className={styles['bets']}>Bets</b>
                <b className={styles['stack-tokens']}>Stack tokens</b>
                <div className={styles['numro2']}>
                    <div className={styles['numro-child']} />
                    <div className={styles['div']}>1</div>
                </div>
                <div className={styles['numro3']}>
                    <div className={styles['numro-child']} />
                    <div className={styles['div']}>1</div>
                </div>
                <div className={styles['btc']}>BTC</div>
                <div className={styles['total-stacked']}>total stacked</div>
                <div className={styles['line-div']} />
                <div className={styles['in-1-week']}>40.000$ in 1 week</div>
                <div className={styles['div4']}>0</div>
                <div className={styles['in-1-week1']}>35.000$ in 1 week</div>
                <button className={styles['button']}>
                    <img className={styles['button-child']} alt="" src={RectangleBet} />
                    <b className={styles['bet']}>BET</b>
                </button>
                <button className={styles['button1']}>
                    <img className={styles['button-child']} alt="" src={RectangleBet} />
                    <b className={styles['bet']}>Details</b>
                </button>
                <button className={styles['button2']}>
                    <img className={styles['button-child']} alt="" src={RectangleBet} />
                    <b className={styles['bet']}>BET</b>
                </button>
                <img
                    className={styles['unsplashpvoepplw818-icon']}
                    alt=""
                    src={NFT2}
                />
                <div className={styles['top']}>
                <Link to="/"><div className={styles['denignma']}>Denignma</div></Link>
                <Link to="/page1"><div className={styles['my-account1']}>my Account</div></Link>
                    
                    
                    <button className={styles['button3']}>
                        <img className={styles['rectangle-icon']} alt="" src={RectangleConnect} />
                        <b className={styles['connect']}>Connect</b>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Page2
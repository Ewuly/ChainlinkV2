import { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import RectangleConnect from '../assets/RectangleConnect.svg'
import NFT from '../assets/Cryptocurrency.svg'
import RectangleSetPrice from '../assets/RectangleSetPrice.svg'


import styles from './page1.module.css'




function Page1() {

    const top = () => {
        // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This adds a smooth scrolling effect
        });
    };

    return (
        <>
            <div className={styles['slide-169-2']}>
                <div className={styles['slide-169-2-child']} />
                <div className={styles['slide-169-2-item']} />
                <div className={styles['slide-169-2-inner']} />
                <b className={styles['dashboard']}>Dashboard</b>
                <div className={styles['top']}>
                    <Link to="/"><div className="denignma">Denignma</div></Link>
                    <b className={styles['my-account']}>My Account</b>
                    <button className={styles['button']}>
                        <img className={styles['button-child']} alt="" src={RectangleConnect} />
                        <b className={styles['connect']}>Connect</b>
                    </button>
                </div>
                <div className={styles['bottom']}>
                    <Link to="/"><div className={styles['denigma']} onClick={top}>denigma</div></Link>

                    <div className={styles['play-lotterie']}>play lotterie</div>
                    <img className={styles['facebook-icon']} alt="" src={Facebook} />
                    <img className={styles['twitter-icon']} alt="" src={twitter} />
                    <img className={styles['group-icon']} alt="" src={LinkedIn} />
                </div>
                <div className={styles['raffle']}>
                    <div className={styles['lotterie']}>
                        <div className={styles['lotterie-child']} />
                        <div className={styles['state-0']}>State 0</div>
                        <div className={styles['nft-1']}>NFT 1</div>
                        <div className={styles['answer']}>
                            <div className={styles["email-grou"]}>
                                <div className={styles["email-grou-child"]} />
                                <input
                                    className={styles["select-price"]}
                                    placeholder="Select Price"
                                    type="text"
                                />
                            </div>
                            <button className={styles["button1"]}>
                                <img className={styles["button-item"]} alt="" src={RectangleSetPrice} />
                                <div className={styles["set-price"]}>Set price</div>
                            </button>
                        </div>
                        <div className={styles['answer1']}>
                            <div className={styles['email-grou']}>
                                <div className={styles['email-grou-child']} />
                                <input
                                    className={styles["select-price"]}
                                    placeholder="Select Price"
                                    type="text"
                                />
                            </div>
                            <button className={styles['button2']}>
                                <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                                <div className={styles['sell']}>SELL</div>
                            </button>
                            <div className={styles['button3']}>
                                <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                                <div className={styles['remove-sell']}>remove SELL</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['lotterie1']}>
                        <div className={styles['lotterie-item']} />
                        <div className={styles['state-1']}>State 1</div>
                        <div className={styles['nft-2']}>NFT 2</div>
                        <img
                            className={styles['unsplashpvoepplw818-icon']}
                            alt=""
                            src={NFT2}
                        />
                    </div>
                    <button className={styles['button4']}>
                        <img className={styles['button-child1']} alt="" src={RectangleEnigma} />
                        <Link to="/page2"><b className={styles['answer-enigmas']} onClick={top}>Answer enigmas</b></Link>
                    </button>
                    <b className={styles['raffle-1']}>Raffle 1</b>
                </div>
                <div className={styles['raffle1']}>
                    <div className={styles['lotterie2']}>
                        <div className={styles['lotterie-inner']} />
                        <div className={styles['state-01']}>State 0</div>
                        <div className={styles['nft-11']}>NFT 1</div>
                        <img
                            className={styles['unsplashpvoepplw818-icon1']}
                            alt=""
                            src={NFT2}
                        />
                    </div>
                    <div className={styles['lotterie3']}>
                        <div className={styles['rectangle-div']} />
                        <div className={styles['state-1']}>State 1</div>
                        <div className={styles['nft-2']}>NFT 2</div>
                        <img
                            className={styles['unsplashpvoepplw818-icon']}
                            alt=""
                            src={NFT2}
                        />
                    </div>
                    <button className={styles['button5']}>
                        <img className={styles['button-child1']} alt="" src={RectangleEnigma} />
                        <Link to="/page2"><b className={styles['answer-enigmas']} onClick={top}>Answer enigmas</b></Link>
                    </button>
                    <b className={styles['raffle-2']}>Raffle 2</b>
                </div>
                <b className={styles['buy-tokens']}>Buy tokens</b>
                <div className={styles['answer2']}>
                    <div className={styles['email-grou2']}>
                        <div className={styles['email-grou-inner']} />
                        <input className={styles['tokenid']} placeholder="Amount" type="text" />
                    </div>
                    <div className={styles['email-grou3']}>
                        <div className={styles['email-grou-inner']} />
                        <input className={styles['tokenid']} placeholder="Amount" type="text" />
                    </div>
                    <div className={styles['email-grou4']}>
                        <div className={styles['email-grou-inner']} />
                        <input className={styles['tokenid']} placeholder="Price" type="text" />
                    </div>
                    <button className={styles['button6']}>
                        <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                        <div className={styles['buy']}>Buy</div>
                    </button>
                    <button className={styles['button7']}>
                        <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                        <div className={styles['fetch-price']}>Fetch Price</div>
                    </button>
                </div>
                <img className={styles['cryptocurrency-1-icon']} alt="" src={NFT} />
            </div>
        </>
    )

}

export default Page1
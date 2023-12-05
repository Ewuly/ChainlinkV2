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

import { ethers } from "ethers";
import { abi, contractAddress } from "../constants.js"

import styles from './page1.module.css'

function Page1() {
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');

    const [tokenId, setTokenId] = useState('');
    const [tokenScore, setTokenScore] = useState('');
    const [tokenImage, setTokenImage] = useState(null);
    const [tokenName, setTokenName] = useState('');
    const [fetchedPrice, setFetchedPrice] = useState('');

    const [price, setPrice] = useState('');
    const [ethAmount, setEthAmount] = useState('');

    const top = () => {
        // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This adds a smooth scrolling effect
        });
    };
    const handleTokenIdChange = (e) => {
        setTokenId(e.target.value);
    };

    // Function to handle changes in the price input
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    // Function to set the NFT price, triggered by a button click
    const handleSetNFTPrice = async (tokenId) => {
        await setNFTPrice(tokenId, price);
    };

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" })
                setConnectionStatus('Connected'); // Update button text
                const accounts = await ethereum.request({ method: "eth_accounts" })
                console.log(accounts)
            } catch (error) {
                console.log(error)
            }
        } else {
            setConnectionStatus('Please install MetaMask'); // Update button text
        }
    }

    //DISPLAY NFT
    async function fetchTokenURI(tokenId) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const uri = await contract.tokenURI(tokenId);
            fetchTokenDetails(uri);
        } catch (error) {
            console.error('Error fetching token URI:', error);
        }
    }
    async function fetchTokenDetails(uri) {
        try {
            const response = await fetch(uri);
            const metadata = await response.json();
            setTokenImage(metadata.image); // Update the state with the fetched image URL
            setTokenName(metadata.name);   // Update the state with the fetched name
            setTokenScore(metadata.score); // Update the state with the fetched score
        } catch (error) {
            console.error('Error fetching token details:', error);
        }
    }
    async function setNFTPrice(tokenId, price) {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try {
                const signerAddress = await signer.getAddress();
                const transactionResponse = await contract.setPrice(tokenId, ethers.utils.parseEther(price));
                await provider.waitForTransaction(transactionResponse.hash);
                console.log(`${signerAddress} set the price for Token ID ${tokenId}. Price: ${price} ETH`);
            } catch (error) {
                console.error(error);
            }
        }
    }
    async function removeTokenFromSale(tokenId) {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try {
                const transactionResponse = await contract.removeTokenSale(tokenId);
                await provider.waitForTransaction(transactionResponse.hash);
                console.log(`Token ID ${tokenId} removed from sale.`);
            } catch (error) {
                console.error(error);
            }
        }
    }
    async function fetchPrice(tokenId) {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(contractAddress, abi, provider);

            try {
                const price = await contract.getPrice(tokenId);
                setFetchedPrice(ethers.utils.formatEther(price));
                console.log(`Price for Token ID ${tokenId}: ${price} Wei`);
            } catch (error) {
                console.error(error);
            }
        }
    }
    async function buyToken(tokenId, ethAmount) {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try {
                const signerAddress = await signer.getAddress();
                const transactionResponse = await contract.buyToken(tokenId, { value: ethers.utils.parseEther(ethAmount) });
                await provider.waitForTransaction(transactionResponse.hash);
                console.log(`Token ID ${tokenId} purchased by ${signerAddress} for ${ethAmount} ETH. Transaction hash: ${transactionResponse.hash}`);
            } catch (error) {
                console.error(error);
            }
        }
    }

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
                    <button className={styles['button']} onClick={connect}>
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
                        <button className={styles['buttonPerso2']} onClick={() => fetchTokenURI(0)}>Fetch Token Details</button>
                        {/* Display the token details here */}
                        <img src={tokenImage} alt={tokenName} className={styles['tokenImage']} />
                        <div>
                            {/* Overlay Content */}
                            <div className={styles['token-details']}>
                                {tokenName && <p>Name: {tokenName}</p>}
                                {tokenScore && <p>Score: {tokenScore}</p>}
                            </div>
                        </div>

                        <div className={styles['lotterie-child']} />
                        <div className={styles['answer']}>
                            <div className={styles["email-grou"]}>
                                <div className={styles["email-grou-child"]} />
                                <input
                                    className={styles["select-price"]}
                                    placeholder="Price in AVAX"
                                    type="text"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </div>
                            <button onClick={() => handleSetNFTPrice(0)} className={styles["button1"]}>
                                <img className={styles["button-item"]} alt="" src={RectangleSetPrice} />
                                <div className={styles['sell']}>SELL</div>
                            </button>
                        </div>
                        <div className={styles['answer1']}>
                            <div className={styles['button3']} onClick={() => removeTokenFromSale(0)}>
                                <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                                <div className={styles['remove-sell']}>Remove Sale</div>
                            </div>
                        </div>
                    </div>
                    {/*NFT 2*/}
                    <div className={styles['lotterie1']}>
                        <button className={styles['buttonPerso2']} onClick={() => fetchTokenURI(1)}>Fetch Token Details</button>
                        {/* Display the token details here */}
                        <img src={tokenImage} alt={tokenName} className={styles['tokenImage']} />
                        <div>
                            {/* Overlay Content */}
                            <div className={styles['token-details']}>
                                {tokenName && <p>Name: {tokenName}</p>}
                                {tokenScore && <p>Score: {tokenScore}</p>}
                            </div>
                        </div>


                        <div className={styles['lotterie-item']} />
                        <div className={styles['answer']}>
                            <div className={styles["email-grou"]}>
                                <div className={styles["email-grou-child"]} />
                                <input
                                    className={styles["select-price"]}
                                    placeholder="Price in AVAX"
                                    type="text"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </div>
                            <button onClick={() => handleSetNFTPrice(1)} className={styles["button1"]}> {/*TOKEN URI 1 The best is to do a loop to see all the */}
                                <img className={styles["button-item"]} alt="" src={RectangleSetPrice} />
                                <div className={styles['sell']}>SELL</div>
                            </button>
                        </div>
                        <div className={styles['answer1']}>
                            <div className={styles['button3']} onClick={() => removeTokenFromSale(1)}>
                                <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                                <div className={styles['remove-sell']}>Remove Sale</div>
                            </div>
                        </div>
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
                        <input
                            className={styles['tokenid']}
                            placeholder="Token ID"
                            type="text"
                            value={tokenId}
                            onChange={(e) => setTokenId(e.target.value)} />
                    </div>
                    <div className={styles['email-grou3']}>
                        <div className={styles['email-grou-inner']} />
                        <input
                            className={styles['tokenid']}
                            placeholder="Amount in AVAX"
                            type="text"
                            value={ethAmount}
                            onChange={(e) => setEthAmount(e.target.value)} />
                    </div>

                    <div className={styles['email-grou4']}> {/*With button 7*/}
                        <div className={styles['email-grou-inner']} />
                        <input type="number" className={styles['tokenid']} placeholder="Token ID"
                            value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
                    </div>
                    {/*BUTTON BUY*/}
                    <button
                        className={styles['button6']}
                        onClick={() => buyToken(tokenId, ethAmount)}>
                        <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                        <div className={styles['buy']}>Buy</div>
                    </button>

                    {/*BUTTON FETCHPRICE*/}
                    <button className={styles['button7']} onClick={() => fetchPrice(tokenId)} >
                        <img className={styles['button-item']} alt="" src={RectangleSetPrice} />
                        <div className={styles['fetch-price']}>Fetch Price</div>
                    </button>
                    {fetchedPrice && <p className={styles['price-label']}>Price: {fetchedPrice} AVAX</p>}
                </div>
                <img className={styles['cryptocurrency-1-icon']} alt="" src={NFT} />
            </div>
        </>
    )

}

export default Page1
// import ImageCard from "../../components/ImageCard/ImageCard"
import Navbar from "../../components/Navbar/Navbar"
import './Home.css'
import { useState } from "react";
import { Link } from "react-router-dom";
// import imageOne from "../../assets/valleost2.jpg"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Bed from '../../assets/bed-2-svgrepo-com.svg'
import BedRoom from '../../assets/sleep-bed-bedroom-furniture-chair-households-belongings-svgrepo-com.svg'
import EcoHouse from '../../assets/rural-hotel-sign-of-a-house-and-a-leaf-svgrepo-com.svg'
import Relaxing from '../../assets/man-lying-on-a-deck-chair-of-a-spa-svgrepo-com.svg'


// import imageTwo from "../../assets/IMG_3302.jpg";
import imageTwo from "../../assets/Hallbild1a.jpg";

// import imageThree from "../../assets/utsiktvalle1.jpg";
import imageFour from "../../assets/vallesoderbild.jpg";
import imageFive from "../../assets/IMG_3297.jpg";
import imageSix from "../../assets/IMG_3299.jpg";
import imageSeven from "../../assets/vallevastkvall.jpg";
import imageEight from "../../assets/IMG_3295.jpg";
// import imageNine from "../../assets/vallekok.jpg";
import imageTen from "../../assets/Hallbild1a.jpg";
import imageEleven from "../../assets/badrumvalle.jpg";
import imageTwelve from "../../assets/solbildvallle.jpg";
import imageThirteen from "../../assets/kok1.jpg";
import imageFourteen from "../../assets/kok2.jpg";
import imageFifteen from "../../assets/kok3.jpg";
import imageSixteen from "../../assets/vardagsrum1.jpg";
import imageSeventeen from "../../assets/vardagsrum2.jpg";
import imageEighteen from "../../assets/vysoder.jpg";
import imageNineteen from "../../assets/vysoder2.jpg";
import imageTwenty from "../../assets/gastrum.jpg";
import imageTwentyOne from "../../assets/sovrum1.jpg";
import imageTwentyTwo from "../../assets/sovrum2.jpg";
import imageTwentyThree from "../../assets/sovbod1.jpg";
import imageTwentyFour from "../../assets/sovbod2.jpg";
import imageTwentyFive from "../../assets/valleentre.jpg";


const images = [
    {
        original: imageTwo,
        thumbnail: imageTwo,
    },
    // {
    //     original: imageThree,
    //     thumbnail: imageThree,
    // },
    {
        original: imageFour,
        thumbnail: imageFour,
    },
    {
        original: imageFive,
        thumbnail: imageFive,
    },
    {
        original: imageSix,
        thumbnail: imageSix,
    },
    {
        original: imageSeven,
        thumbnail: imageSeven,
    },
    {
        original: imageEight,
        thumbnail: imageEight,
    },
    // {
    //     original: imageNine,
    //     thumbnail: imageNine,
    // },
    {
        original: imageTen,
        thumbnail: imageTen,
    },
    {
        original: imageEleven,
        thumbnail: imageEleven,
    },
    {
        original: imageTwelve,
        thumbnail: imageTwelve,
    },
    {
        original: imageThirteen,
        thumbnail: imageThirteen,
    },
    {
        original: imageFourteen,
        thumbnail: imageFourteen,
    },
    {
        original: imageFifteen,
        thumbnail: imageFifteen,
    },
    {
        original: imageSixteen,
        thumbnail: imageSixteen,
    },
    {
        original: imageSeventeen,
        thumbnail: imageSeventeen,
    },
    {
        original: imageEighteen,
        thumbnail: imageEighteen,
    },
    {
        original: imageNineteen,
        thumbnail: imageNineteen,
    },
    {
        original: imageTwenty,
        thumbnail: imageTwenty,
    },
    {
        original: imageTwentyOne,
        thumbnail: imageTwentyOne,
    },
    {
        original: imageTwentyTwo,
        thumbnail: imageTwentyTwo,
    },
    {
        original: imageTwentyThree,
        thumbnail: imageTwentyThree,
    },
    {
        original: imageTwentyFour,
        thumbnail: imageTwentyFour,
    },
]

const Home = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleScreenChange = (fullScreen: boolean) => {
        setIsFullscreen(fullScreen);

        if (fullScreen) {
            document.body.style.overflow = "auto"; // Enable scrolling
            document.documentElement.style.overflow = "auto"; // Ensure root element scrolls
        } else {
            document.body.style.overflow = "visible";
            document.documentElement.style.overflow = "visible";
        }
    };
    return (
        <>
            <div className="Home-Container">
                <Navbar />
                <div className="Home-Content">
                    <div className="Home-Hero">
                        <img src={imageTwentyFive} alt="" />
                    </div>
                    <div className="Home-Bullets">
                        <div className="Home-Bullets-Info">
                            <div>
                                <img src={Bed} alt="6 beds" className="Home-Bed-Icon" />
                                <p>6 bäddar</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M29 15v16h-2v-6h-6v6h-2v-6.15a2 2 0 0 1 1.84-1.84L21 23h6v-8zM5 15v8h6a2 2 0 0 1 2 1.85V31h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.56 8.57 1 1 0 0 1-.8 1.42l-.1.01H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.35a1 1 0 0 1-.95-1.32l.04-.1A15 15 0 0 1 16 1zm0 2A13 13 0 0 0 5.4 8.47l-.2.28-.16.25h21.92l-.17-.25a13 13 0 0 0-10.1-5.73L16.34 3z"></path></svg>
                                <p>Uteplats</p>
                            </div>

                            <div>
                                <img src={EcoHouse} alt="eco house" className="Home-Eco-House-Icon" />
                                <p>Miljövänligt</p>
                            </div>
                        </div>
                        <div className="Home-Bullets-Info">
                            <div>
                                <img src={BedRoom} alt="3 bedrooms" className="Home-Bedroom-Icon" />
                                <p>3 sovrum</p>
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M13 2h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19C11.6 10 11.2 10.9 11.06 12H9.04c.1-1.07.38-1.97.9-3H6a10 10 0 0 0 20 .28V9h-3.77a7.44 7.44 0 0 0-1.17 3h-2.02c.15-1.61.71-2.84 1.91-4.73l.57-.88c1.11-1.79 1.47-2.78 1.47-4.4h2c0 1.93-.4 3.17-1.5 5L28 7v2c0 .68-.06 1.35-.17 2H30v2h-2.68a12.04 12.04 0 0 1-5.9 6.7l4.5 9.89-1.83.82-2-4.41H17v4h-2v-4H9.92L7.9 30.41l-1.82-.82 4.49-9.88A12.04 12.04 0 0 1 4.68 13H2v-2h2.17A12.06 12.06 0 0 1 4 9.3V7h7.13l.39-.6c1.11-1.8 1.47-2.8 1.47-4.4zm-.57 18.46L10.83 24H15v-3.04a11.95 11.95 0 0 1-2.57-.5zm4.57.5V24h4.17l-1.6-3.54c-.69.21-1.4.37-2.13.45zM18 2h2c0 2.06-.48 3.35-1.77 5.42l-.75 1.19C16.6 10 16.2 10.9 16.06 12h-2.02c.15-1.62.71-2.84 1.91-4.74l.57-.88C17.63 4.6 17.99 3.61 17.99 2z"></path></svg>
                                <p>Grillplats</p>
                            </div>
                            <div>
                                <img src={Relaxing} alt="Relaxing" className="Home-Relaxing-Icon" />
                                <p>Avkopplande</p>
                            </div>

                        </div>
                    </div>
                    <div className="Home-Describing-Text">
                        <p>
                            Välkommen till vår lantliga idyll! Här kan du njuta av en fantastisk utsikt och sol från morgon till kväll.
                            <span> </span>
                            <Link to="/facilities">Läs mer om vårt boende här.</Link>
                        </p>
                    </div>
                    <div className={`Image-Gallery-Home-Container ${isFullscreen ? "fullscreen-active" : ""}`}>
                        <ImageGallery items={images} slideDuration={1000} onScreenChange={handleScreenChange} />
                    </div>
                </div>
                {/* <ImageCard /> */}
            </div >
        </>
    )
}

export default Home
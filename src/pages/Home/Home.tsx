// import ImageCard from "../../components/ImageCard/ImageCard"
import Navbar from "../../components/Navbar/Navbar"
import './Home.css'
import imageOne from "../../assets/valleost2.jpg"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import imageTwo from "../../assets/IMG_3302.jpg";
import imageThree from "../../assets/utsiktvalle1.jpg";
import imageFour from "../../assets/vallenyamotladan.jpg";
import imageFive from "../../assets/IMG_3297.jpg";
import imageSix from "../../assets/IMG_3299.jpg";
import imageSeven from "../../assets/vallevastkvall.jpg";
import imageEight from "../../assets/IMG_3295.jpg";
import imageNine from "../../assets/vallekok.jpg";


const images = [
    {
        original: imageTwo,
        thumbnail: imageTwo,
    },
    {
        original: imageThree,
        thumbnail: imageThree,
    },
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
    {
        original: imageNine,
        thumbnail: imageNine,
    },
]

const Home = () => {
    return (
        <>
            <div className="Home-Container">
                <Navbar />
                <div className="Home-Hero">
                    <img src={imageOne} alt="" />
                </div>
                <p>Välkommen till denna lantliga idyll! Vi har ett fantastiskt öppet läge med sol från morgon till kväll. </p>
                <div className="Image-Gallery-Home-Container">
                    <ImageGallery
                        items={images}
                        slideDuration={1000}

                    />
                </div>
                {/* <ImageCard /> */}
            </div >
        </>
    )
}

export default Home
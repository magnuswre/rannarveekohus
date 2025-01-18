import ImageCard from "../../components/ImageCard/ImageCard"
import Navbar from "../../components/Navbar/Navbar"
import './Home.css'
import imageOne from "../../assets/Vallebild1.jpg"

const Home = () => {
    return (
        <>
            <div className="Home-Container">
                <Navbar />
                <div className="Home-Hero">
                    <img src={imageOne} alt="" />
                </div>
                <p>Välkommen till denna lantliga idyll! Vi har ett fantastiskt öppet läge med sol från morgon till kväll. </p>
                <ImageCard />
            </div >
        </>
    )
}

export default Home
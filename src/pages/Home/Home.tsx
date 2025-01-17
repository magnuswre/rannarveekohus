import ImageCard from "../../components/ImageCard/ImageCard"
import Navbar from "../../components/Navbar/Navbar"
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="Home-Container">
                <Navbar />
                <p>Välkommen till denna lantliga idyll! Vi har ett fantastiskt öppet läge med sol från morgon till kväll. </p>
                <ImageCard />
            </div>
        </>
    )
}

export default Home
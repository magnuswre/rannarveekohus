import ImageCard from "../../components/ImageCard/ImageCard"
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="Home-Container">
                <h1>Ekohuset Rannarve</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Perferendis, voluptatum tenetur!
                    Animi nostrum debitis, natus illum ad modi dignissimos,
                    blanditiis cumque nisi quo et libero. Laborum, praesentium accusamus? Autem, vitae?</p>
                <ImageCard />
            </div>
        </>
    )
}

export default Home
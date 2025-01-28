import Navbar from "../../components/Navbar/Navbar"
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="Contact-Info">
                <h3>Välkommen att kontakta oss:</h3>
                <p>Magnus: 0738-212808</p>
                <p>Henrik: 0739-461318</p>
                <p>hallinwretblad@gmail.com </p>
                <p>Klinte Valle 433</p>
                <p>62376 Klintehamn</p>
            </div>
        </div>
    )
}

export default Contact
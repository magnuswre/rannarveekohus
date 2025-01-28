import Navbar from '../../components/Navbar/Navbar'
import './Facilities.css'

const Facilities = () => {
    return (
        <div>
            <Navbar />
            <div className='Facilities-Content'>
                <h3>Boendeinformation</h3>
                <p>Välkommen till vårt mysiga fritidshus på ca 65 kvm, färdigställt 2022 och byggt med naturliga material. Huset erbjuder två sovrum med totalt fyra bäddar och ett nybyggt gästhus (friggebod) med våningssäng för två personer – perfekt för större familjer eller vänner som reser tillsammans.
                    Här finns allt du behöver för en bekväm vistelse: ett fullt utrustat kök, ett badrum med dusch och tvättmaskin samt en inbjudande uteplats där du kan njuta av lugnet och utsikten. På den stora tomten finns alltid en plats i solen under dagen, och solnedgångarna är magiska.
                    Läget är lantligt och fridfullt, med fri utsikt åt alla håll och minimal trafik – en perfekt plats för avkoppling.
                    Varmt välkommen att hyra och skapa minnen i denna idylliska miljö!
                </p>
            </div>
        </div>
    )
}

export default Facilities
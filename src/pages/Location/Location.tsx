import Navbar from '../../components/Navbar/Navbar'
import './Location.css'

const Location = () => {
    return (
        <div>
            <Navbar />
            <div className='Location-Content'>
                <h3>
                    Platsen
                </h3>
                <p>
                    Vårt fritidshus ligger i ett lantligt paradis omgivet av böljande åkrar och fri sikt i alla väderstreck.
                    Två kilometer bort ligger charmiga Klintehamn, där du hittar allt du behöver: livsmedelsbutik (Coop), apotek, bageri, pizzeria, pub och ett växande utbud av retro- och designbutiker. Klintehamn är Gotlands retrocentrum och utgångspunkten för båtturer till Stora och Lilla Karlsö. Missa inte heller fantastiska Pensionat Warfsholm. Ta cykeln hit på 15 minuter och varför inte ta ett dopp vid badplatsen?
                    Läget är perfekt för att utforska Gotlands pärlor, med närhet till Tofta Strand (17 km), Eksta-kusten och Sudret. Visby ligger endast 34 km bort (35 min med bil), och buss 10 förbinder Klintehamn med Visby och Tofta bad med täta avgångar.
                    Här får du en plats där lugn och ro möter närhet till allt det bästa Gotland har att erbjuda!

                </p>

            </div>
        </div>
    )
}

export default Location
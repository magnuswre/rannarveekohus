import Navbar from "../../components/Navbar/Navbar"
import './BuildingTechnique.css'

const BuildingTechnique = () => {
    return (
        <div>
            <Navbar />
            <div className="BuildingTechnique-Content">
                <h3>Byggnadsmaterial och tekniker</h3>
                <p>För att ge huset en stabil grund och säkerställa en väl dränerad plats grävdes matjorden bort och ersattes med makadam och grus.</p>
                <p>Grunden består av Albabalkar, som kombinerar betong och lättklinker, och hålrummen fylldes med perlite för extra isolering.</p>
                <p>Byggnaden är uppförd med naturliga material som trä, träullsisolering och innerpaneler av trä målade med linoljefärg. På entréplanet finns ett lergolv, medan övervåningen har massiva trägolv.</p>
                <p>För att spara på vatten så används en vacuumtoalett.</p>
            </div>
        </div>
    )
}

export default BuildingTechnique
//visi komponentai privalo prasideti is didziosios raides. Failo vardas privalo atvaizduoti komponenta.

function Box({ls, boxColor, boxNumber}) {

    return (
        <>
        <div className="black-box">
            <span style={{

                letterSpacing: ls,
                color: boxColor
                
                }}>This is the BLACK box namber: {boxNumber}</span>
        </div>
        </>
    )
}

export default Box;

//Sukurti reacto aplikaciją kuri nupaišytų aštuonis skirtingų spalvų apskritimus, 
//duomenis imant iš masyvo su aštuoniais hex spalvų kodais.
//dette skal skrives i html ofc
// <div id="faktaboks">
   //            <random-fakta></random-fakta>
 //              </div>
const template = document.createElement("template");

template.innerHTML = `
  <article>
     <input type="button" value="FAKTA OM UU"
     <p>Her kommer tilfeldig fakta om Universell Utforming<p>
  <article/>
`;

class RandomFakta extends HTMLElement {
    constructor(){
        super();
        this.appendChild( template.content.cloneNode(true) );
        
        this.querySelector("input").addEventListener("click", this.showRandomFakta);
        
    }
    showRandomFakta = () => {
        
        let wordArray = ["UU handler å gjøre all type av design fra arkitektur, produkter og miljø til å være tilgjengelig og forståelig for alle type mennesker uavhengig av alder, funksjonshemning eller andre faktorer. " , "Utformingen skal kunne brukes effektivt og skal ikke oppleves som er byrde for brukeren. Dette kan være som å kun presentere med film eller lyd og ikke ha noe alternativ til de som skulle ha behov for tekst." , "Uavhengig om brukerene kroppsstørrelse, kropsstilling eller mobilitet skal vedkommende ha full tilgjengelighet.", "Uformingen skal være lett å forstå for alle uavhengig av erfaring og kunnskap man har fra før. Eller hvorvidt språkevne er eller dysleksi til brukerene."];
        let randomfakta = wordArray[ Math.floor( Math.random() * 3 ) ];
        
        this.querySelector("p").innerHTML = randomfakta;
    }
}

window.customElements.define("random-fakta", RandomFakta);
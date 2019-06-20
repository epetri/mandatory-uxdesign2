const countrys = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


function   createList(str) {                                //Skapa en funktion som skapar li.element med unika 'key:'s. I detta fall sätts
    return React.createElement('li', {key:str}, str);       //'key:'s till det specifika landet(str)
}


class Component extends React.Component {                   //I constructorn sätter vi alla startvärden och bindar alla metoder som ska 
    constructor(props) {                                    //använda this. 
        super(props);
        this.state = {
            value : "",
            reverse: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
   
    onChange(event) {                                           //I denna metod ändras listan efter vad nyckeln Value sätts till
        this.setState({value: event.target.value});                // <------------------ När något ändras : setState({ });
        console.log('this.state.value = ' + this.state.value);
        console.log('event.target = ' + event.target.value);

    }

    onClick(){                                                  //I denna metod ändras listan när man trycker på knappen och visas som bakvänt        
        this.setState({reverse: !this.state.reverse});          //ändrar nyckeln 'reverse' till true/false
    }

    render() {                                                  //render metoden renderar allt vi vill ha på sidan
        const value = this.state.value;
        const input = React.createElement('input',{             //Skapar ett input 
            type: 'text',                                       //ger type:text
            value: value,                                       //Sätter value till det vi skriver i inputfältet
            onChange: this.onChange,                            //Kallar på onChange-metoden
            id: 'inputField',
            placeholder: 'Search',
        });

        const button = React.createElement('button',{           //skapar en knapp
            onClick: this.onClick,                              //kalla på onClick-metoden
            className: 'button',                                //Ger class 'button' så jag kan style i css
        }, "click");                                            // vad som ska synas i knappen

        

        const filteredCountries = countrys.filter(x => x.toLowerCase().includes(this.state.value.toLowerCase())); //ändrar alla bokstäver till små bokstäver

        if (this.state.reverse) {                       //Kollar om reverse-nyckeln är satt till 'true', då reversas listan
            filteredCountries.reverse();
        }

        let ul = React.createElement('ul', {}, filteredCountries.map(createList));  //skapar UL-element. Tar alla länder och kör in dem i createList
        return React.createElement('div', {
            className: 'mainDiv',
        }, input, button, ul);                   //skapar en div där vi lägger in input,button och ul 
    }

   
} 

const form = document.querySelector('.form');               //Väljer vart vi vill appenda allt
ReactDOM.render(React.createElement(Component), form);      //Renderar hela classen i form
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import axios from 'axios';

function MyComponent(){
    const [countrys, updateCountrys] = useState([]);
    const [text, updateText] = useState('');
    const [value] = useDebounce(text, 1000); //fördröjer api requestet med 1sekund så användaren hinner skriva klart

    const api = 'https://restcountries.eu/rest/v2/name/';


    useEffect(() => {
        if(value.length === 0){
            axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                updateCountrys(response.data);
            });
        } else {
            axios.get(api + value ).then(response => {            
                updateCountrys(response.data);
            }).catch((err) => {
                updateCountrys([]);
            });
        }
        }, [value])



    function onChange(e){
        let inputVal = e.target.value;
        updateText(inputVal);
    } 

    function cr8list(country){
        return(
            <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
            </tr>
        )
    }

return (
    <div>
        <label>
            <input onChange={onChange} placeholder='search country'></input>
        </label>
        <table>
            <thead>
                <tr>
                    <th>country</th>
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {countrys.map(country => cr8list(country))}
            </tbody>
        </table>
    </div>

)
}

export default MyComponent;
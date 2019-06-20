import React, { useState } from 'react';

const BodyMassIndexCalculator = (props) => {
    const [height, updateHeight] = useState(null);
    const [weight, updateWeight] = useState(null);
    const [result, updateResult] = useState(null);

    function count(e){
        e.preventDefault();
        let convert = height/100;

        let bmi = weight/(convert * convert);
        bmi = Math.round(bmi,2)

        console.log(bmi);
        
   

        if(bmi <= 18){
            updateResult("U 2 skinny man" + bmi)
        }   else if (bmi <= 24){
            updateResult('U fat Normal' + bmi)
        }   else if(bmi <= 25){
            updateResult('')
        }
    }

    return(
        <form className='bmi'>
            <label className='bmi-hight'>
                Height(cm):
                <input className='bmi-input' onChange={(e)=> updateHeight(e.target.value)}>
                </input>
            </label>

            <label className='bmi-weight'>
                Weight(kg):
                <input className='bmi-input' onChange={(e)=> updateWeight(e.target.value)}>
                </input>
            </label>

            <button onClick={count}>Count</button>

            <h4>{result}</h4>

        </form>
    )
}



export default BodyMassIndexCalculator;
import React, { Component } from 'react';
import { css } from 'glamor';

const rule = css({
    'backgroundColor': 'blanchedalmond',
    'border': 'none',
    'height': '70px',
    'width': '70px',
    'marginTop': '50px',
    'color': 'white',
    'fontSize': '15px',
    'transition': 'border-radius 0.2s',
    ':hover': {
        'backgroundColor':'pink',
        'borderRadius': '50%',
    },
    ':active': {
        'fontWeight': 'bold',
        'outline': 'none',
        'fontSize': '20px',
    },
    ':focus': {
        'outline': 'none',
    }

})

class Button extends Component {


    onClick = () => {         
        let duration = 500;
        let start = null;
        let initialScroll = document.scrollingElement.scrollTop;

        function easeCubic(t){
            return Math.max(0, Math.min(1.0, t))**3;    //funktion för animeringen 
        }

        function step(timeStamp){
            if (!start){
                start = timeStamp
            }                
             
            const progress = timeStamp - start;

            console.log(progress);
            console.log(initialScroll);
            
            

            const delta = easeCubic(progress/duration);
            
            document.scrollingElement.scrollTop = initialScroll + delta * initialScroll;

            if (progress < duration){
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick} className={rule}>Click!</button>
            </div>
        )
    }
}

export default Button;
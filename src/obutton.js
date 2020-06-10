import React from 'react';

function Obutton(props){
    return(
        <div >
            <div style={{width:'40.15vw', height: '10vh', background:'lightgrey', fontSize:'20px', textAlign: 'center',paddingTop:'10px',border:'0.2px solid grey'}}>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default Obutton;
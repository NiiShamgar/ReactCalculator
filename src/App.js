import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './display.js'
import Buttons from './buttons.js'
import Orbuttons from './orangebuttons.js'
import Obutton from './obutton.js'

function App() {
  return (
    <div>
          <Display/>
            <span  style={{flex:1, display:'flex', flexDirection:'row',flexWrap: 'wrap',maxwidth:'80vw',marginLeft:'10vw'}}>
              <Buttons name='AC'/>
              <Buttons name='+/-'/>
              <Buttons name='%'/>
              <Orbuttons name='÷'/>
              <Buttons name='7'/>
              <Buttons name='8'/>
              <Buttons name='9'/>
              <Orbuttons name='x'/>
              <Buttons name='4'/>
              <Buttons name='5'/>
              <Buttons name='6'/>
              <Orbuttons name='-'/>
              <Buttons name='1'/>
              <Buttons name='2'/>
              <Buttons name='3'/>
              <Orbuttons name='+'/>
              <Obutton name='0'/>
              <Buttons name='.'/>
              <Orbuttons name='='/>
            </span>           
    </div>
  );
}

export default App;

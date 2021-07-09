import React from 'react';
import './App.css';

export default function Scoremanage(props) {
 
    console.log('here')
 
 return (
    <div>
       <p className={'cardscore'}>score : {props.score}</p>
       <p className={'cardscore'}>blood : {props.blood}</p>
       <p className={'cardscore'}>win : {props.win}</p>
       <p className={'cardscore'}>lost : {props.lost}</p>
    </div>
   )

}
import _ from 'lodash';
import React,{useState} from 'react';
import CharacterCard from './CharacterCard';
import Scoremanage from './Scoremanage';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        blood:100,
        word,
        chars,
        attempt: 1,
        score: 0,
        win:0,
        lost:0,
        completed: false
    }
}
export default function WordCard(props){
    const [state,setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        
        if(c === 'X'){
            let blood = state.blood-40
            setState({...state,  blood})
            console.log(blood)
            if(blood < 0){
                
                setState({...state, attempt: state.attempt + 1 , blood : 100 , score : 0 ,lost:state.lost+1})
            }
        }
        if(c === 'S'){
            let score = state.score+40
            setState({...state,  score})
            console.log(score)
            if(score > 100){
                setState({...state,  win:state.win+1})
                setState({...state, attempt: state.attempt + 1 , blood : 100 , score : 0 ,win:state.win+1})
            }

        }
        //let guess = state.guess + c
        //console.log(guess)
        //setState({...state, guess})
        //if(guess === state.word.length){
            
         //   if(guess === state.word){
          //      console.log('yeah!')
            //    setState({...state, guess: '', completed: true})
           // }
            //else{
            //    console.log('reset')
            //    setState({...state, guess: '', attempt: state.attempt + 1})
       // }
       // }
    }
    return (
            <div>
                <div>
                    < Scoremanage score={state.score} blood={state.blood} win={state.win} lost={state.lost}/>
                    
                </div>
                <div>
                    {
                    state.chars.map((c, i)=>
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt} blood = {state.blood}/>)
                    }
                </div>
            </div>
        )
       
}

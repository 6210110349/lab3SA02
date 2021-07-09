import _ from 'lodash';
import React,{useState} from 'react';
import CharacterCard from './CharacterCard';
 
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        blood:100,
        word,
        chars,
        attempt: 1,
        score: 0,
        completed: false
    }
}
export default function WordCard(props){
    const [state,setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        
        if(c === 'X'){
            let blood = state.blood-50
            setState({...state,  blood})
            console.log(blood)
            if(blood === 0){
                console.log('game over')
                setState({...state, attempt: state.attempt + 1 , blood : 100 , score : 0 })
            }
        }
        if(c === 'S'){
            let score = state.score+50
            setState({...state,  score: state.score+50})
            console.log(score)
            if(score === 100){
                console.log('you win')
                setState({...state, attempt: state.attempt + 1 , blood : 100 , score : 0 })
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
                {
                    state.chars.map((c, i)=>
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt} blood = {state.blood}/>)
                }
            </div>
        )
       
}

import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MaskedText from '../components/Masked/MaskedText';
import LetterButton from '../components/LetterButton/LetterButton';
import { useState } from 'react';
function PlayGame() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("text"))
  const {state} = useLocation();
  const [gussedLetters,setGussedLetters] = useState([]);
  function hndleclickletters(letter){
      setGussedLetters([...gussedLetters,letter])
  }
  return (
    <><div>PlayGame</div>
    <MaskedText text={state.word} gussedWords={gussedLetters}/>
    <div>
    <LetterButton text={state.word} gussedLetters={gussedLetters} onLetterClick={hndleclickletters}/>

    </div>
    <Link to='/start' className='text-blue-300'>StartGame link</Link>
    </>

  )
}
export default PlayGame
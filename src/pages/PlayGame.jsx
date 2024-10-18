import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MaskedText from '../components/Masked/MaskedText';
function PlayGame() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("text"))
  const {state} = useLocation();
  return (
    <><div>PlayGame {state.word}</div>
    <MaskedText text={state.word} gussedWords={['h','e']}/>
    <Link to='/start' className='text-blue-300'>StartGame link</Link>
    </>

  )
}
export default PlayGame
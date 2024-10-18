import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function PlayGame() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("text"))
  const {state} = useLocation();
  return (
    <><div>PlayGame {state.word}</div>
    <Link to='/start' className='text-blue-300'>StartGame link</Link>
    </>

  )
}
export default PlayGame
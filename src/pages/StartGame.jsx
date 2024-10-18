import React from 'react'
import { Link } from 'react-router-dom'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'

function StartGame() {
  return (
    <>
    <h1>StartGme</h1>
    <TextInputFormContainer/>
    <Link to='/play' className='text-blue-300'>PlayGame link</Link>
    </>
  )
}

export default StartGame
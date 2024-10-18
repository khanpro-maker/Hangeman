import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../button/Button'
import TextInputFormContainer from './TextInputFormContainer'
function TextInputForm({input,handlesubmit,handlechange,handleShowHideClick}) {
  return (
    <form onSubmit={handlesubmit}>
        <div>
            <TextInput
            type={input}
            label="Enter a word or a phase"
            placeholder='Enter word or phase'
            onChangeHandler={handlechange}

            />
        </div>
        <div> 
            <Button styleType=''
            text= {input === "password"?"Show":"Hide"}
            onClickHandeler={handleShowHideClick}

            />
        </div>
        <div>
            <Button styleType='primary'
            text= 'Submit'
            type='submit'
            />
        </div>
    </form>
  )
}

export default TextInputForm
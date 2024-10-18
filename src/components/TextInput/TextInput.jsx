import React from 'react'

export default function TextInput({type = 'text',label,placeholder = "Enter Your Input",value,onChangeHandler}) {
  return (
    <label>
        <span className='text-gray-700'>{label}</span>
        <input type={type} 
        className='px-4 py-2 border border-grey-500 rounded-md w-full'
        placeholder={placeholder}
       
        onChange={onChangeHandler}
        />
    </label>
  )
}

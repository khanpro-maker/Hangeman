import React from 'react'
import getStyleBtn from './Getbuttoncolor';
export default function Button({text,onClickHandeler,styleType = 'primary',type="button"}) {
  return (
    <button onClick={onClickHandeler}
    type={type}
    className={`px-4 py-3 my-4 mx-4 border-2 rounded-lg ${getStyleBtn(styleType)} text-white`}
    >{text
    }</button>
  );
  
}


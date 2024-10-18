import React from 'react'
import TextInputForm from './TextInputForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TextInputFormContainer() {
  const [input,setInput] = useState("password");
  const [value,setValue] = useState("");
  const navigate  = useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        console.log("form submitted.",value)
        if(value){
          navigate(`/play`,{state:{word: value}});
        }
    }
    function handlechange(e){
        setValue(e.target.value);
    }
    function handleShowHideClick(){
      console.log("clicked button show/hide")
      if(input === "text"){
        setInput("password")
      }else{
        setInput("text")
      }
  }
  return (
    <TextInputForm
    input={input}
    handlesubmit = {handlesubmit}
    handlechange = {handlechange}
    handleShowHideClick = {handleShowHideClick}
    />
  )
}

export default TextInputFormContainer
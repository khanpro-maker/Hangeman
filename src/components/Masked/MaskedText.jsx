import {getAllMaskedWords} from './MaskedUtilities'
function MaskedText({text,gussedWords}) {
    const maskedString = getAllMaskedWords(text,gussedWords);
  return (
    <>
    {maskedString.map((letter,index)=>{
        return(
            <span key={index} className='mx-1'>{letter}</span>
        )
    })}
    </>
  )
}

export default MaskedText
const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
function LetterButton({text,gussedLetters,onLetterClick}) {
    const originalLetter = new Set(text.toUpperCase().split(''))
    const gussedLettersSet = new Set(gussedLetters)
    const buttonStyle = function(letter){
        if(gussedLettersSet.has(letter)){
            return `${originalLetter.has(letter) ? 'bg-green-500':'bg-red-500'}`
        }else{
            return 'bg-blue-500'
        }
    }
    function handleLetterclick(e){
        const charoftheletter = e.target.value
        onLetterClick?.(charoftheletter)
    }
    const buttons = ALPHABETS.map((letter)=>{
        return(
            <button
            key={letter}
            value={letter}
            onClick={handleLetterclick}
            disabled = {gussedLettersSet.has(letter)}
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >{letter}</button>
        )
    })
  return (
   <>{buttons}</>
  )
}

export default LetterButton
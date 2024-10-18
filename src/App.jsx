import { Routes,Route } from "react-router-dom"
import Button from "./components/button/Button"
import TextInput from "./components/TextInput/TextInput"
// import TextInputForm from "./components/TextInputForm/TextInputForm"
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer"
import StartGame from './pages/StartGame'
import PlayGame from "./pages/PlayGame"
function App() {
  return (
   <>
   <Routes>
    <Route path="/start" element={<StartGame/>}/>
    <Route path="/play" element={<PlayGame/>}/>
   </Routes>
    {/* <TextInputFormContainer/> */}
   </>
  )
}
export default App
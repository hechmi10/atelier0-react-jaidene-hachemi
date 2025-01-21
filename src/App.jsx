import { findLongestWord } from './ecmascript/test'
import './App.css'

function App() {
  const words=["Bonjour","Hello"];

  return (
    <>
      <div>
        <h1>Le mot le plus long est :{findLongestWord(words)}</h1>
      </div>
    </>
  )
}

export default App

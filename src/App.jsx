import findLongestWord from './ecmascript/test'
import numberRedundants from './ecmascript/test_2'
import calculateMarks from './ecmascript/test_3'
import search from './ecmascript/test_4';
import './App.css'

let tab = [];
let lastID = 0;
const words=["Bonjour","Hello"];
const input=[["a","b","c"],["c","d","f"],["d","f","g"]];
const students=[{name:'John',id:123,marks:98},{name:'Baba',id:101,marks:23},{name:'John',id:200,marks:45},{name:'Wick',id:115,marks:75}]
function App() {
  tab.push({ id: ++lastID, name: "Alice", age: 25 });
  tab.push({ id: ++lastID, name: "Bob", age: 30 });
  tab.unshift({id:++lastID,name:"Charlie",age:28});
  console.log(numberRedundants(input));
  console.log(calculateMarks(students));
  console.log(tab);
  console.log(search(tab,2))
  return ( 
    <div className="card">
      <h1>Le mot le plus long est:{findLongestWord(words).mot} de longueur {findLongestWord(words).longueur}</h1>
    </div>
  )
}

export default App

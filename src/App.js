import './App.css';
import {Async} from "./Lessons/Lesson1/Async";
import {FetchJs} from "./Lessons/Lesson2/Fetch-js";
import {FetchReact} from "./Lessons/Lesson2/Fetch_react";

function App() {
  return (
    <div className="App">
     {/*<Async />*/}
     {/*   <FetchJs />*/}
        <FetchReact />
    </div>
  );
}

export default App;

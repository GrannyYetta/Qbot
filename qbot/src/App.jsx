
import "./styles.css"
import NavigationBar from "./NavBar";

function App() {
  return (
    <>
    <div className="header">
      <h1 className="jersey-10-regular">Meet Jamie, a non-judgemental counsellor developed by and for the queer
        community</h1>
      </div>
      <div>
        <ul className="krub-regular">
        <li>at your fingertip</li>
        <li>listens and provides guidance</li>
        <li>safe and anonymous</li>
        <li>free to use</li>
      </ul>
      </div>
      <div>
        <NavigationBar/>
      </div>
    </>
  )
;

}

export default App;

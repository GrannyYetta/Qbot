
import './styles.css';
import image from '../src/assets/image.png'


function App() {
  return (
  <>
    <div className="container">
      <img src={image} alt="jamie-logo" className='jamie-logo'/>
      <h1 className="jersey-10-regular">
        Meet <span className='jamie'>Jamie</span>, a non-judgemental counsellor developed by and for the queer
        community
      </h1>
      <ul className="roboto-regular">
        <li>at your fingertip</li>
        <li>listens and provides guidance</li>
        <li>safe and anonymous</li>
        <li>free to use</li>
      </ul>
      </div>
      <div className='alt-div'></div>
    </>)
}

export default App;

import logo from './logo.svg';
import LikeButton from './components/LikeButton'
import MoustTracker from './components/MouseTracker'
import DogShow from './components/DogShow'
import useMoustPositions from './hooks/useMousePositions'
import useUrlLoader from './hooks/useUrlLoader'
import './App.css';

const style = {
  width:200
}
const DogShowWithHook = () => {
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  return (
    <div>
      {loading ? <p>🐶读取中</p>
          : <img src={data&&data.message} alt='dog' style={style} />
            }
    </div>
  )
}

function App() {
  const position = useMoustPositions()
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <DogShow /> */}
        <DogShowWithHook />
        <MoustTracker />
        <h1>x:{position.x}y:{position.y}</h1>
       <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

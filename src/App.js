import './App.css';
import NavBar from './Components/NavBar';
import SearchArea from './Components/SearchArea';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='weather-data'>
        <SearchArea />
        {/* <Weather /> */}
      </div>
    </div>
  );
}

export default App;

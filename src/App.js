import Navbar from './Navbar';
import "./index.css"
import Home from "./Home"

function App() {
  const title = "heading title"
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;

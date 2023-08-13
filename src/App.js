import './App.css';

import NavigationBar from "./Components/NavigationBar"
import "./style/landingPage.css"
import Intro from './Components/Intro';
import Trending from './Components/Trending';
import HorrorMovie from './Components/HorrorMovie';

function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar/>
      <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
     <div className='horror'>
      <HorrorMovie/>
     </div>
    </div>

  );
}

export default App;

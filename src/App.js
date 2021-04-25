import './App.css';
import Header from './components/Header/Header.js'
import Matches from './components/Matches/Matches.js'
import News from './components/News/News'
import PlayerBlocks from './components/PlayerBlocks/PlayerBlocks'
function App() {
  return (
    <div>
       <Header />
       <News />
       <Matches/>
       </div>
  );
}

export default App;

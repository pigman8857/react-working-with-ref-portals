import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targerTime={1}/>
        <TimerChallenge title="Not easy" targerTime={5}/>
        <TimerChallenge title="Getting tough" targerTime={10}/>
        <TimerChallenge title="Pros only" targerTime={15}/>
      </div>
    </>
  );
}

export default App;

import FullWidth from './sections/fullWidth/FullWidth';
import Left from './sections/left/Left';
import Right from './sections/right/Right';


function App() {

  return (
    <div className="main-section">
      <Left />
      <Right />
      <FullWidth/>
    </div>
  );
}

export default App;

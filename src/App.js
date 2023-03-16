import './App.css';
import { Addition } from './Addition';
import { Multiplication } from './Multiplication';
import { Division } from './Division';
import { Subtraction } from './Subtraction';

const props = [ 119, 76, 2908.2236, 6691.0471 ];

function App() {
  return (
    <div className="App">
      <h1>Welcome to this simple Hardcoded Math App!</h1>
      <h2>Here we go with your basic integers...</h2>
      <Addition a={12} b={19} />
      <Addition a={props[0]} b={props[1]} />
      <Subtraction a={556} b={235} />
      <Subtraction a={props[0]} b={props[1]} />
      <Multiplication a={7} b={22} />
      <Multiplication a={props[0]} b={props[1]} />
      <Division a={19} b={8} />
      <Division a={props[0]} b={props[1]} />
      <h2>And now, with decimals...</h2>
      <Addition a={.5564} b={0.4234} />
      <Addition a={props[2]} b={props[3]} />
      <Subtraction a={1.124} b={.991} />
      <Subtraction a={props[2]} b={props[3]} />
      <Multiplication a={8.11} b={1198.3} />
      <Multiplication a={props[2]} b={props[3]} />
      <Division a={1109.443} b={6.787} />
      <Division a={props[2]} b={props[3]} />
      <h2>And just for fun, Random Numbers!</h2>
      <Addition a={Math.floor(Math.random()* 12)} b={Math.floor(Math.random() * 19)} />
      <Addition a={(Math.random() * 10) * .5564} b={(Math.random() * 10) * .4234} />
      <Subtraction a={Math.floor(Math.random()* 556)} b={Math.ceil(Math.random() * 235)} />
      <Subtraction a={(Math.random() * 10) * 1.124} b={(Math.random() * 10) * .991} />
      <Multiplication a={Math.floor(Math.random()* 7)} b={Math.floor(Math.random() * 22)} />
      <Multiplication a={Math.random()* 8.11} b={Math.random() * 1198.3} />
      <Division a={Math.ceil(Math.random() * 19)} b={Math.floor(Math.random()* 8)} />
      <Division a={Math.random() * 1109.443} b={Math.random()* 8} />
    </div>
  );
}

export default App;

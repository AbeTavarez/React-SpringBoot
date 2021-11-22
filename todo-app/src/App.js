import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <Counter />
      </header>

    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>App</h1>
//       <FirstComponent />
//       <SecondComponent />
//       <ThirdComponent />
//       </header>

//     </div>
//   );
// }



export default App;

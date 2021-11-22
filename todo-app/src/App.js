import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      </header>

    </div>
  );
}



export default App;

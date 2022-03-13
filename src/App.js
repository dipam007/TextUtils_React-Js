import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title="LiveCricketScore" link1="https://reactjs.org/docs/introducing-jsx.html"/>

      <div className="container">
        <TextForm heading="Enter the text to analyze:"/>
      </div>
      
    </div>
  );
}

export default App;

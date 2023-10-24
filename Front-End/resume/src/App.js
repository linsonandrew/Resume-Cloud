import './App.css';
import './index.css';
import { NavBar } from './components/NavBar';
import { Editor } from './components/Editor';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Editor />
    </div>
  );
}

export default App;

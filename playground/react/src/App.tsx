import './App.css';
import test from './test.ts?raw';
const App = () => {
  console.log(test,'test')
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;

import './App.css';

function App() {
  return (
      // using css grid layout
      <div className="calculator-grid">
        <div className="outut">
          <div className="previous-operand">1234523 * 92788924</div>
          <div className="current-operand">4879987</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEl</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
  )
}

export default App;

import React from 'react';
import './App.css';
import Counter from './components/Counter';
import InputForm from './components/InputForm';
import ItemList from './components/itemList/ItemList';
function App() {
  
  return (
    <div className="App">
      <h2>useEffect</h2>
        <Counter/>
        <ItemList/>
    </div>
  );
}

export default App;

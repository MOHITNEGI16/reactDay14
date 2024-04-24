import AddExpenses from './AddExpenses';
import './App.css';
import Budget from './Budget';
import Expenses from './Expenses';


function App() {
  return (
    <div className="App">
      <Budget/>
      <AddExpenses/>
      <Expenses/>
    </div>
  );
}

export default App;

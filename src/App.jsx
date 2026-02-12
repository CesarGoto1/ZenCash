import { useReducer, useEffect, useMemo } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { expenseReducer } from './reducers/ExpenseReducer';

const App = () => {
  const [expenses, dispatch] = useReducer(expenseReducer, [], () => {
    const localData = localStorage.getItem('expenses');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const total = useMemo(() => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }, [expenses]);

  return (
    <div className="App">
      <header>
        <h1>ZenCash</h1>
        <div className="total-expenses">
          Total: <span>${total.toFixed(2)}</span>
        </div>
      </header>
      <main>
        <ExpenseForm dispatch={dispatch} />
        <ExpenseList expenses={expenses} dispatch={dispatch} />
      </main>
    </div>
  );
};

export default App;

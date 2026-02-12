import { useState } from 'react';

const ExpenseForm = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Comida');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || isNaN(amount) || amount <= 0) {
      // Basic validation
      return;
    }
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        category,
      },
    });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Agregar Gasto</h2>
      <div className="form-control">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Café"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Monto</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ej: 2.50"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="category">Categoría</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Comida">Comida</option>
          <option value="Transporte">Transporte</option>
          <option value="Ocio">Ocio</option>
          <option value="Hogar">Hogar</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <button type="submit" className="btn">Agregar Gasto</button>
    </form>
  );
};

export default ExpenseForm;

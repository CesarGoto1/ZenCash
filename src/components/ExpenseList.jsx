import ExpenseRow from './ExpenseRow';

const ExpenseList = ({ expenses, dispatch }) => {
  return (
    <div className="expense-list">
      <h3>Lista de Gastos</h3>
      {expenses.length === 0 ? (
        <p>No hay gastos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Monto</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;

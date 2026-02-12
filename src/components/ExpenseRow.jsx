const ExpenseRow = ({ expense, dispatch }) => {
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: { id: expense.id },
    });
  };

  return (
    <tr>
      <td data-label="Nombre">{expense.name}</td>
      <td data-label="Monto">${expense.amount.toFixed(2)}</td>
      <td data-label="Categoría">{expense.category}</td>
      <td data-label="Acción">
        <button onClick={handleDelete} className="btn delete-btn">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ExpenseRow;

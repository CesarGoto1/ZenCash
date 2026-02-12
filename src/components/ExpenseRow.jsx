const ExpenseRow = ({ expense, dispatch }) => {
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: { id: expense.id },
    });
  };

  return (
    <tr>
      <td>{expense.name}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
      <td>
        <button onClick={handleDelete} className="delete-btn">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ExpenseRow;

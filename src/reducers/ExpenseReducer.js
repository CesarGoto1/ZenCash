export const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload.id);
    case 'SET_EXPENSES':
        return action.payload;
    default:
      return state;
  }
};

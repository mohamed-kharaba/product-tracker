const ExpenseList = ({ expenses, onDelete }) => {
    if (expenses.length === 0) return null;

    return (
        <table className="table table-bordered">
            <thead>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </thead>
            <tbody>
                {expenses.map((expanse) => (
                    <tr key={expanse.id}>
                        <td>{expanse.description}</td>
                        <td> {expanse.amount} </td>
                        <td> {expanse.category} </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDelete(expanse.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;

import { categories } from "../App";
const ExpenseForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input id="description" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input id="amount" type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    category
                </label>
                <select id="category" className="form-select">
                    <option value=""> </option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button className="btn btn-info my-2">Submit</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
    const [selectCategory, setSelectCategory] = useState("");

    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 10, category: "Groceries" },
        { id: 3, description: "ccc", amount: 10, category: "Utilities" },
        { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
    ]);

    const visibleExpenses = selectCategory ? expenses.filter((e) => e.category === selectCategory) : expenses;

    return (
        <>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={(category) => setSelectCategory(category)} />
            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
        </>
    );
}

export default App;

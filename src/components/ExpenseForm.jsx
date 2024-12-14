import categories from "../categories";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    description: z.string().min(3, { message: "description should be at least 3 characters" }).max(50),
    amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category is required" }),
    }),
});

const ExpenseForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}
        >
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input {...register("description")} id="description" type="text" className="form-control" />
                {errors.description && <p className="py-2 text-danger"> {errors.description.message} </p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input {...register("amount", { valueAsNumber: true })} id="amount" type="number" className="form-control" />
                {errors.amount && <p className="py-2 text-danger"> {errors.amount.message} </p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    category
                </label>
                <select {...register("category")} id="category" className="form-select">
                    <option value=""> </option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && <p className="py-2 text-danger"> {errors.category.message} </p>}
                <button className="btn btn-info my-2" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;

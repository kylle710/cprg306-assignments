"use client";
import { useState } from "react";


export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce"); 

        function handleSubmit(event) {
        event.preventDefault();
        const item = { name, quantity, category };
        alert(`Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
        console.log(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
        }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
            />
            <div>
                <label>Quantity:</label>
                <input
                    id="quantity"
                    value={quantity}
                    type="number"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min={1}
                    max={99}
                />
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="houseHold">Household</option>
                        <option value="other">Other</option>
                </select>
            </div>

            <button type="submit">+</button>
        </form>
    );
}


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

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          value={quantity}
          type="number"
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
          max={99}
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
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

      <button type="submit" style={styles.button}>
        Add Item
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.25rem",
    fontSize: "0.9rem",
    color: "#ccc",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#222",
    color: "#fff",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#222",
    color: "#fff",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.75rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};

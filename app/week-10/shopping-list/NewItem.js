"use client";
import { useState } from "react";

const initialState = { name: "", quantity: 1, category: "produce" };

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState({
  name: "",
  quantity: 1,
  category: "produce",
  });

  const handleChange = (e) => {
  const { name, value, type } = e.target;
  setItem((prev) => ({...prev,[name]: type === "number" ? Number(value) : value,}));
  };

  function handleSubmit(event) {
  event.preventDefault();
  
  onAddItem(item);
  
  setItem(initialState);
}

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={item.name}
          onChange={handleChange}
          required
        style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          value={item.quantity}
          type="number"
          onChange={handleChange}
          min={1}
          max={99}
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Category</label>
        <select
          value={item.category}
          name="category"
          onChange={handleChange}
          style={styles.select}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
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
  form: 
  {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  field: 
  {
    display: "flex",
    flexDirection: "column",
  },
  label: 
  {
    marginBottom: "0.25rem",
    fontSize: "0.9rem",
    color: "#ccc",
  },
  input: 
  {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#222",
    color: "#fff",
  },
  select: 
  {
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

"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of the items
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      {/* Sorting Buttons */}
      <div className="mb-4 space-x-2">
        <button
          className={sortBy === "name" ? "font-bold" : ""}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={sortBy === "category" ? "font-bold" : ""}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Item List */}
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
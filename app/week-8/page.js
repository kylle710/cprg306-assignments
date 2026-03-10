"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas"; // 1. Import the new component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  // 2. Add state for the selected item name
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  // 3. New Event Handler to clean and set the item name
  const handleItemSelect = (item) => {
    // This cleans "chicken breast, 1 kg 🍗" -> "chicken breast"
    const cleanedName = item.name
      .split(",")[0]               // Take everything before the comma
      .replace(/[^\w\s]/gi, "")    // Remove emojis and special characters
      .trim();                     // Remove extra spaces
    
    setSelectedItemName(cleanedName);
  };

  return (
    // 4. Layout Changes: Added "flex" to put things side-by-side
    <main className="min-h-screen bg-zinc-900 flex p-8 gap-8">
      
      {/* Left Side: Shopping List */}
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        {/* 5. Pass handleItemSelect to ItemList */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </section>

      {/* Right Side: Meal Ideas */}
      <section className="flex-1 bg-zinc-800 p-6 rounded-xl text-white h-fit">
        <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
        {/* 6. Pass selectedItemName as the "ingredient" prop */}
        <MealIdeas ingredient={selectedItemName} />
      </section>

    </main>
  );
}







"use client";
import NewItem from "./NewItem";
import { useState } from "react";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
  setItems((prev) => [...prev, newItem]);
};


  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white">
        <h1 className="text-xl font-semibold text-center">
          Add New Item
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </section>
    </main>
  );
}
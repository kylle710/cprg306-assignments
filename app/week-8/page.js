"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas"; // 1. Import the new component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  
  // 2. State to hold the name of the clicked item
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  // 3. The Handler: This cleans the name and updates state
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(',')[0]               // Remove anything after a comma
      .replace(/[^\w\s]/gi, "")    // Remove emojis
      .trim();                     // Remove extra spaces
    
    setSelectedItemName(cleanedName);
  };

  return (
    // 4. Layout: Use "flex-row" to put the list and ideas side-by-side
    <main className="min-h-screen bg-zinc-900 p-8 flex justify-center gap-10">
      
      {/* Left Column: Input and List */}
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
        <h1 className="text-2xl font-bold text-center mb-4">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        {/* 5. Pass the handleItemSelect function to ItemList */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </section>

      {/* Right Column: Meal Ideas */}
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
        <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
        {/* 6. Pass the cleaned name as the 'ingredient' prop */}
        <MealIdeas ingredient={selectedItemName} />
      </section>

    </main>
  );
}
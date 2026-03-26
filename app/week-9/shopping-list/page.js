"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };


  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.split(',')[0].replace(/[^\w\s]/gi, "").trim());
  };

  const { user } = useUserAuth();

  return (
    <main className="min-h-screen bg-zinc-900 p-8 flex justify-center gap-10">
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
        <h1 className="text-2xl font-bold text-center mb-4">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </section>
        <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
          <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
          <MealIdeas ingredient={selectedItemName} />
      </section>

    </main>
  );
}
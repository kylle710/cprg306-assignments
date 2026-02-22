"use client";
import NewItem from "./NewItem";
import { useState } from "react";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white">
        <h1 className="text-xl font-semibold text-center mb-4">
          Add New Item
        </h1>
        <NewItem onAddItem={handleAddItem} />
      </section>
    </main>
  );
}
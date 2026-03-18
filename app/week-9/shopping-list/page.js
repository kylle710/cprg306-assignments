"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";
import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold">Access Denied</h1>
        <p className="mb-4">You must be logged in to view this page.</p>
        <Link href="/week-9" className="text-blue-500 underline">
          Click here to go back to the login page.
        </Link>
      </main>
    );
  }
  return (
    <main>
      <h1>Your Shopping List</h1>
    </main>
  );
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };


  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.split(',')[0].replace(/[^\w\s]/gi, "").trim());
  };

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
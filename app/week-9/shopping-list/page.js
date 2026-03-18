"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext"; // Import the hook
import ItemList from "./item-list"; // Adjust paths if needed
import NewItem from "./new-item";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth(); // Get the user object

  // 1. Initialize your state (from your Week 8 code)
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // 2. The Protection Check
  // If user is null, show the "Access Denied" message and STOP here.
  if (!user) {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold">Access Denied</h1>
        <p>You must be logged in to view this page.</p>
        <Link href="/week-9" className="text-blue-500 underline">
          Back to Login
        </Link>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-6 bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      <div className="flex gap-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
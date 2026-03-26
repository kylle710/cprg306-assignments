"use client";

import { useState, useEffect } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, loading } = useUserAuth();

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <p className="text-white text-xl animate-pulse">Loading your list...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center">
        <p className="text-white text-center mb-4">Please log in to see your list.</p>
        <a href="/week-10" className="text-blue-500 underline">Return to Login</a>
      </main>
    );
  }

  const loadItems = async () => {
    try {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, newItem);
        const itemWithId = { ...newItem, id: newItemId };
        setItems((prev) => [...prev, itemWithId]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.split(',')[0].replace(/[^\w\s]/gi, "").trim());
  };

  return (
    <main className="min-h-screen bg-zinc-900 p-8 flex justify-center gap-10">
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white h-fit">
        <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
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
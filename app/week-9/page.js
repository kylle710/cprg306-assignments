"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => 
  {
    try 
    {
      await gitHubSignIn();
    } 
    catch (error) 
    {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => 
  {
    try 
    {
      await firebaseSignOut();
    } 
    catch (error) 
    {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List App</h1>

      {user ? (
      <section>
        <p>Welcome, {user.displayName} ({user.email})</p>
      </section>
      ) : (
      <section>
        <p className="mb-4 text-gray-400">Please sign in to continue to your shopping list.</p>
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Login with GitHub
        </button>
      </section>
    )}
        </main>
  );
}
"use client";

// 1. Import the custom hook we made in Part 3
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // 2. Destructure the helpers from our context
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // 3. Define the handle functions for buttons
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List App</h1>

      {/* 4. Conditional Rendering Logic */}
      {user ? (
        // UI for Logged-In Users
        <section>
          <p className="mb-2">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex flex-col gap-2">
            <Link 
                href="/week-9/shopping-list" 
                className="text-blue-500 hover:underline"
            >
                Continue to your Shopping List
            </Link>
            <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded w-max"
            >
                Log Out
            </button>
          </div>
        </section>
      ) : (
        // UI for Guests
        <section>
          <button 
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </section>
      )}
    </main>
  );
}
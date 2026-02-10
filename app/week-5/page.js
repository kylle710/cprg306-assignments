import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <section className="bg-zinc-800 p-6 rounded-xl w-full max-w-md text-white">
        <h1 className="text-xl font-semibold text-center mb-4">
          Add New Item
        </h1>
        <NewItem />
      </section>
    </main>
  );
}

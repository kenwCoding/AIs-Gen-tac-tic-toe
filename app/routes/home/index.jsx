import { Link } from "react-router";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">MY AI PROJECT</h1>
      <nav>
        <Link to="/welcome" className="text-blue-600 dark:text-blue-400 hover:underline">Go to Welcome Page</Link>
      </nav>
    </main>
  );
}

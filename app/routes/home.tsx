import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">MY AI PROJECT</h1>;
}

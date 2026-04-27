import { Header } from "~/components/header";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beleza" },
    { name: "description", content: "Welcome to Beleza!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-170">
        <h1 className="text-6xl">Hello world!!</h1>
      </main>
    </>
  );
}

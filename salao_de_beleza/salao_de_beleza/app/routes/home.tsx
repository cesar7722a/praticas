import { HeaderMobile } from "~/components/header";
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
      <HeaderMobile />
      <h1 className="text-6xl text-black">Hello world!!</h1>
    </>
  );
}

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "Custom website developmet.", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
  My App
  </>;
}

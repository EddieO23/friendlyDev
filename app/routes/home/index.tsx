import type { Route } from './+types/index';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev || Welcome' },
    { name: 'Custom website developmet.', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  return <section>My App</section>;
}

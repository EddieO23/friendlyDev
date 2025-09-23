import type { Route } from './+types/index';
import Hero from '~/components/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev || Welcome' },
    { name: 'Custom website developmet.', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero name='Eddie'/>
    </section>
  );
}

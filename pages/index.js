import Head from 'next/head';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className="container mt-5">
      <Head>
        <title>Counter App</title>
      </Head>
      <h1 className="text-center mb-4">React Counter App</h1>
      <Counter label="Click Counter" />
    </div>
  );
}

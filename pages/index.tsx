import type { NextPage } from 'next';

import Head from 'next/head';

import Header from '../components/Header';
import Presentation from '../components/Presentation';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Articles is an open platform where you can read and share your writings on any topic."
        />
      </Head>

      <Header />
      <Presentation />

      <main className="w-full max-w-7xl mx-auto"></main>
    </div>
  );
};

export default Home;

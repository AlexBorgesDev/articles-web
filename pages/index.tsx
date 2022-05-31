import type { NextPage } from 'next';

import Head from 'next/head';

import Header from '../components/Header';
import Post from '../components/Post';
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

      <main className="w-full my-12 max-w-7xl mx-auto grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Post
          slug="prisma"
          title="Prisma: uma das melhores coisas que já aconteceu no ecossistema?"
          banner={{
            src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
            description: 'Montanha',
          }}
        />

        <Post
          slug="prisma"
          title="Prisma: uma das melhores coisas que já aconteceu no ecossistema?"
          banner={{
            src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
            description: 'Montanha',
          }}
        />

        <Post
          slug="prisma"
          title="Prisma: uma das melhores coisas que já aconteceu no ecossistema?"
          banner={{
            src: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80',
            description: 'Montanha',
          }}
        />
      </main>
    </div>
  );
};

export default Home;

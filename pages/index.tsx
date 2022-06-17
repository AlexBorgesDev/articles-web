import type { GetStaticProps, NextPage } from 'next';

import Head from 'next/head';

import Header from '../components/Header';
import Post from '../components/Post';
import Presentation from '../components/Presentation';

import api, { baseFilesURL } from '../services/api';

type HomeProps = { posts: HomePost[] };

const Home: NextPage<HomeProps> = ({ posts }) => {
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

      {posts.length === 0 && (
        <div className="w-full my-12 max-w-7xl mx-auto">
          <h3 className="mx-auto text-center text-xl font-medium">
            Ops! Ainda não foi publicado nenhuma artigo.
          </h3>
        </div>
      )}

      <main className="w-full my-12 max-w-7xl mx-auto grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(post => (
          <Post
            key={post.slug}
            slug={post.slug}
            title={post.title}
            banner={{
              src: `${baseFilesURL}${post.banner.filename}`,
              description: post.banner.description,
            }}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const { data } = await api.get<ResponsePosts>('post');
    return { props: { posts: data.data } };
  } catch (e) {
    return { props: { posts: [] } };
  }
};

export default Home;

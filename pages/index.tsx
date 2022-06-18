import type { GetStaticProps, NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Post from '../components/Post';
import Presentation from '../components/Presentation';

import api, { baseFilesURL } from '../services/api';

type HomeProps = { posts: HomePost[]; total: number; take: number };

const Home: NextPage<HomeProps> = ({ posts, take, total }) => {
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

      <footer className="w-full px-6 pb-6">
        <div className="w-full mx-auto flex justify-center text-base text-gray-400 font-semibold">
          <span>Página 1</span>

          {total >= take && (
            <Link href="page/2">
              <a className="ml-8" aria-label="Proximo">
                <FontAwesomeIcon icon={faRightLong} className="ml-3" />
              </a>
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
  try {
    const { data } = await api.get<ResponsePosts>('post?take=15');
    return { props: { posts: data.data, take: data.take, total: data.total } };
  } catch (e) {
    return { props: { posts: [], take: 15, total: 0 } };
  }
};

export default Home;

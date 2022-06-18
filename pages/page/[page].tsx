import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import Post from '../../components/Post';
import Presentation from '../../components/Presentation';

import api, { baseFilesURL } from '../../services/api';

const Page: NextPage<ResponsePosts> = props => {
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
        {props.data?.map(post => (
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
          <Link href={props.page === 2 ? '/' : `page/${props.page + 1}`}>
            <a className="mr-8" aria-label="Anterior">
              <FontAwesomeIcon icon={faLeftLong} className="mr-3" />
            </a>
          </Link>

          <span>Página {props.page}</span>

          {props.total >= props.take && (
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

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<ResponsePosts> = async context => {
  const { data } = await api.get<ResponsePosts>(
    `post?page=${context.params?.page}&take=15`
  );

  if (data.total === 0) {
    return { redirect: { destination: '/', permanent: false } };
  }

  return { props: data };
};

export default Page;

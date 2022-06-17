import 'moment/locale/pt-br';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import moment from 'moment';

import Header from '../../components/Header';
import ImageText from '../../components/ImageText';
import Paragraph from '../../components/Paragraph';

import api, { baseFilesURL } from '../../services/api';

moment.locale('pt-br');

const Post: NextPage<Post> = ({ banner, data, title, createdAt }) => {
  return (
    <div>
      <Head>
        <title>{title} - Articles</title>
      </Head>

      <Header />

      <section className="w-full h-72 sm:h-[28rem] relative">
        <Image
          src={`${baseFilesURL}${banner.filename}`}
          alt={banner.description}
          layout="fill"
          className="object-cover object-center"
        />
      </section>

      <main className="w-full max-w-[53rem] mx-auto my-16 px-5 sm:px-6">
        <h1 className="text-3.2xl sm:text-4.5xl text-gray-300 opacity-95 mx-auto text-center font-bold">
          {title}
        </h1>

        <p className="mt-4 text-base text-accent text-center font-semibold">
          {moment(createdAt).format('LL')}
        </p>

        <div className="w-full mt-16">
          {data.map((value, index) => {
            if (value.tag === 'image' && value.picture) {
              return (
                <ImageText
                  key={index}
                  src={`${baseFilesURL}${value.picture.filename}`}
                  alt={value.picture.description}
                  description={value.data}
                />
              );
            }

            return <Paragraph key={index}>{value.data}</Paragraph>;
          })}
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<ResponsePosts>('post');

  return {
    paths: data.data.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Post> = async context => {
  const { data } = await api.get<Post>(`post/${context.params?.slug}`);

  return { props: data };
};

export default Post;

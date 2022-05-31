import type { NextPage } from "next";

import Head from "next/head";

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

      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
};

export default Home;

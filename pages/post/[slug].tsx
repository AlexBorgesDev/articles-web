import type { NextPage } from 'next';
import Image from 'next/image';

import Header from '../../components/Header';
import ImageText from '../../components/ImageText';
import Paragraph from '../../components/Paragraph';

const Post: NextPage = () => {
  return (
    <div>
      <Header />

      <section className="w-full h-[28rem] relative">
        <Image
          src="https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Montanha"
          layout="fill"
          className="object-cover"
        />
      </section>

      <main className="w-full max-w-[53rem] mx-auto my-16 px-6">
        <h1 className="text-4.5xl text-gray-300 opacity-95 mx-auto text-center font-bold">
          Prisma: uma das melhores coisas que já aconteceu no ecossistema?
        </h1>

        <p className="mt-4 text-base text-accent text-center font-semibold">
          31 de Maio de 2022
        </p>

        <div className="w-full mt-16">
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            placeat eaque deleniti tempora harum facere sint quam, dolores id
            quaerat mollitia aperiam possimus labore ab? Quasi quaerat expedita
            eos quam.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            placeat eaque deleniti tempora harum facere sint quam, dolores id
            quaerat mollitia aperiam possimus labore ab? Quasi quaerat expedita
            eos quam.
          </Paragraph>

          <ImageText
            src="https://images.unsplash.com/photo-1653503547900-78720b703a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="House"
            width={488}
            height={568}
            description="Unsplash image"
          />

          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            placeat eaque deleniti tempora harum facere sint quam, dolores id
            quaerat mollitia aperiam possimus labore ab? Quasi quaerat expedita
            eos quam.
          </Paragraph>
        </div>
      </main>
    </div>
  );
};

export default Post;

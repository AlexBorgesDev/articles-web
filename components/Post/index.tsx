import Image from 'next/image';
import Link from 'next/link';

import { memo } from 'react';

type PostProps = {
  slug: string;
  title: string;
  banner: { src: string; description: string };
};

const Post = (props: PostProps) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <a className="group">
        <article className="h-full flex flex-col border transition ease-in-out border-blue-dark hover:border-primary rounded-lg overflow-hidden bg-surface">
          <div className="h-48 overflow-hidden relative">
            <Image
              src={props.banner.src}
              alt={props.banner.description}
              layout="fill"
              className="object-cover group-hover:scale-110 transition-transform ease-in-out"
            />
          </div>

          <div className="flex-1 p-5 flex flex-col">
            <h2 className="text-xl text-gray-300 font-semibold mb-2">
              {props.title}
            </h2>

            <span className="text-xs text-gray-400 font-medium mt-auto">
              há 12 dias
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default memo(Post);

import Image from 'next/image';

type ImageTextProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
};

const ImageText = (props: ImageTextProps) => {
  return (
    <figure className="w-full pt-5 mb-12">
      <div className="w-fit mx-auto">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          loading="lazy"
        />
      </div>

      <figcaption className="text-sm text-gray-400 font-medium text-center pt-1">
        {props.description}
      </figcaption>
    </figure>
  );
};

export default ImageText;

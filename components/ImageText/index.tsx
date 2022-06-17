/* eslint-disable @next/next/no-img-element */

type ImageTextProps = {
  src: string;
  alt: string;
  description?: string;
};

const ImageText = (props: ImageTextProps) => {
  return (
    <figure className="w-full pt-5 mb-12">
      <div className="w-fit mx-auto">
        <picture>
          <source srcSet={props.src} />
          <img
            src={props.src}
            alt={props.alt}
            className="max-h-[45rem] object-cover object-center"
          />
        </picture>
      </div>

      <figcaption className="text-sm text-gray-400 font-medium text-center pt-1">
        {props.description}
      </figcaption>
    </figure>
  );
};

export default ImageText;

import { ReactNode } from 'react';

type ParagraphProps = { children: ReactNode };

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-xl text-gray-300 opacity-95 mb-8">{children}</p>;
};

export default Paragraph;

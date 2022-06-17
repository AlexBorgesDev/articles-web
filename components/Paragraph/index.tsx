type ParagraphProps = { children: string };

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-lg tracking-[0.2px] font-medium sm:text-xl text-gray-300 opacity-95 mb-8">
      {children}
    </p>
  );
};

export default Paragraph;

import { memo } from 'react';

const Presentation = () => {
  return (
    <section className="w-full px-4 sm:py-28 py-20 bg-surface-two">
      <h1 className="mx-auto mb-5 text-center text-5xl font-bold font-['Fira_Code']">
        Articles
      </h1>

      <h2 className="mx-auto max-w-2xl text-center text-base sm:text-2xl font-medium font-['Fira_Code']">
        Articles is an open platform where you can read and share your writings
        on any topic.
      </h2>
    </section>
  );
};

export default memo(Presentation);

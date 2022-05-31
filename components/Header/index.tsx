import Link from 'next/link';

import { useEffect, useRef } from 'react';

const Header = () => {
  const ref = useRef<HTMLElement>(null);
  const oldScrollY = useRef(0);

  useEffect(() => {
    function scrollEvent() {
      if (window.scrollY < oldScrollY.current && ref.current) {
        ref.current.classList.remove('top-[-4rem]');
        ref.current.classList.add('top-0');
      } else if (ref.current) {
        ref.current.classList.add('top-[-4rem]');
        ref.current.classList.remove('top-0');
      }

      oldScrollY.current = window.scrollY;
    }

    document.addEventListener('scroll', scrollEvent);

    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="h-16 z-10 sticky bg-bg transition-all top-[-4rem]"
    >
      <header className="w-full h-full max-w-7xl mx-auto px-6 flex items-center">
        <Link href="/">
          <a>
            <h2 className="text-2xl font-bold">Articles</h2>
          </a>
        </Link>
      </header>
    </section>
  );
};

export default Header;

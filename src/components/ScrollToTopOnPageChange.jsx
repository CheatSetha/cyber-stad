'use  client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ScrollToTopOnPageChange = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {showButton && (
        <button onClick={scrollToTop}>Scroll to Top</button>
      )}
    </div>
  );
};

export default ScrollToTopOnPageChange;

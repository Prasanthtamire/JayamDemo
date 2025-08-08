import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.getElementById('scrollable-main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

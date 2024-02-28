import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => {
      setMatches(media.matches);
    };

    updateMatches();
    const listener = () => {
      updateMatches();
    };

    media.addEventListener('change', listener);
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
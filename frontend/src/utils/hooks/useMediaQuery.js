import React from 'react';

const useMediaQuery = (width = 768) => {
  const [isMatches, setIsMatches] = React.useState(false);
  React.useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width: ${width}px)`);
    if (matchMedia.matches !== isMatches) {
      setIsMatches(matchMedia.matches);
    }
    const onChange = () => setIsMatches(matchMedia.matches);
    window.addEventListener('resize', onChange);
    return () => matchMedia.removeEventListener('resize', onChange);
  }, [isMatches, width]);

  return isMatches;
};

export default useMediaQuery;

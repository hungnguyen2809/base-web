import { useState, useEffect } from 'react';

export interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  const hasWindow = typeof window !== 'undefined';
  if (!hasWindow) return { height: 0, width: 0 };

  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;

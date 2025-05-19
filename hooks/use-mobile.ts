import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleResize = () => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setIsMobile(isMobileView);
    };

    handleResize();

    mql.addEventListener('change', handleResize);

    // Cleanup
    return () => mql.removeEventListener('change', handleResize);
  }, []);

  return !!isMobile;
}

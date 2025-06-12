import { useRef, useEffect } from 'react';

function useAutoScroll(dependencies) {
        const containerRef = useRef(null)
      
        useEffect(() => {
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, dependencies);

        return containerRef;
    }

export default useAutoScroll;
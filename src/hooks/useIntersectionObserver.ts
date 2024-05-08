import React, { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  elementRef,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false },
  cb = () => {}
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const observerRef = useRef<IntersectionObserver>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = (entry) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerParams = { threshold, root, rootMargin };
    observerRef.current = new IntersectionObserver(updateEntry, observerParams);

    observerRef.current.observe(node);

    return () => observerRef.current.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, elementRef?.current, threshold, root, rootMargin, frozen]);

  return entry;
};

export default useIntersectionObserver;

import React from "react";

const useClickOutside = (callback) => {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useClickOutside;

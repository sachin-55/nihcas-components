import { useState, useCallback } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
        setIsCopied(false);
      });
  }, []);

  return [isCopied, copyToClipboard] as const;
};

export default useClipboard;

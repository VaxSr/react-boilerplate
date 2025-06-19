import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const useSanitizeContent = (initialContent: string): string => {
  const [sanitizedContent, setSanitizedContent] =
    useState<string>(initialContent);

  useEffect(() => {
    const sanitized = DOMPurify.sanitize(initialContent);
    setSanitizedContent(sanitized);
  }, [initialContent]);

  return sanitizedContent;
};

export default useSanitizeContent;

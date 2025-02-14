import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setShowCursor(false);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span class="inline-block">
      {displayText}
      {showCursor && <span class="font-mono animate-pulse">▋</span>}
    </span>
  );
};

export default TypewriterText

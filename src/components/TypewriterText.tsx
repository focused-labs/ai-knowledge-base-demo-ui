import React, { useState, useEffect } from 'react';

export const TypewriterText: React.FC<{
  text: string;
}> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingTimer);
      }
    }, 15); // Adjust the delay as needed
    return () => {
      clearInterval(typingTimer);
    };
  }, [currentIndex, text]);

  return (
    <div>
      {displayText.split('\n').map((line, index) => (
        <React.Fragment key={index.toString() + line}>
          {index !== 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </div>
  );
};

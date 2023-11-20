import React, { useState } from 'react';

const ReadMoreButton = ({ text, maxLength }) => {
  const [isFullText, setIsFullText] = useState(false);

  const truncatedText = text.slice(0, maxLength);
  const displayText = isFullText ? text : truncatedText;

  const toggleReadMore = () => {
    setIsFullText(!isFullText);
  };

  return (
    <div className="flex flex-col gap-4">
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button
          className="btn-secondary"
          onClick={toggleReadMore}
        >
          {isFullText ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreButton;

import React from 'react';

const AboutSection = (props) => {
  return (
    <div className="p-3 border border-success rounded-3">
      <h3 className="mb-3">{props.rightHeading}</h3>
      <p className="mb-2 text-break">
        TextTuner is your ultimate tool for effortless text manipulation. Whether you need to quickly format text, analyze content, or convert between different text cases, TextTuner has you covered. With a user-friendly interface, you can:
      </p>
      <ul className="list-unstyled mb-3 text-break">
        <li><strong>Convert Text:</strong> Switch between <strong>uppercase (AA)</strong>, <strong>lowercase (aa)</strong>, and <strong>title case (Aa)</strong> with ease.</li>
        <li><strong>Analyze Text:</strong> Get detailed word and character counts to better understand your content.</li>
        <li><strong>Trim Text:</strong> Remove unwanted whitespace and clean up your text.</li>
        <li><strong>Copy and Clear:</strong> Easily copy your formatted text to the clipboard or clear the input area for a fresh start.</li>
      </ul>
      <p className="mb-3">
        Designed for efficiency and simplicity, TextTuner helps you handle your text-related tasks in no time. Perfect for writers, editors, and anyone who deals with text regularly.
      </p>
    </div>
  );
}

export default AboutSection;

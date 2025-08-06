import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    const value = event?.target?.value;
    setText(value);
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const countSentences = (text) => {
    return text.split(/[.!?]/).filter(Boolean).length;
  };

  const countParagraphs = (text) => {
    return text.split(/\n\s*\n/).filter(Boolean).length;
  };

  const calculateReadingTime = (text) => {
    const words = countWords(text);
    const minutes = words / 200;
    return minutes.toFixed(2);
  };

  const calculateSpeakingTime = (text) => {
    const words = countWords(text);
    const minutes = words / 120;
    return minutes.toFixed(2);
  };

  const handleUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLowerCase = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const handleToTitleCase = () => {
    const lowerText = text.toLowerCase();
    const splitText = lowerText.split(" ");
    const capitalizeText = splitText.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const titleText = capitalizeText.join(" ");
    setText(titleText);
  };

  const handleClearText = () => {
    const clearText = "";
    setText(clearText);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    const trimText = text.trim().replace(/\s+/g, " ");
    setText(trimText);
  };

  const handleDownloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "text.txt";
    link.href = url;
    link.click();
  };

  const isTextPresent = text.trim().split(/\s+/).filter(Boolean).length > 0;

  const wordCount = countWords(text);
  const charCount = text.length;
  const sentenceCount = countSentences(text);
  const paragraphCount = countParagraphs(text);
  const readingTime = calculateReadingTime(text);
  const speakingTime = calculateSpeakingTime(text);

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleUpperCase}
      >
        AA
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleLowerCase}
      >
        aa
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleToTitleCase}
      >
        Aa
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleClearText}
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleCopyText}
      >
        Copy
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleExtraSpaces}
      >
        Trim
      </button>
      <button
        type="button"
        className="btn btn-outline-primary my-3 mx-2"
        disabled={!isTextPresent}
        onClick={handleDownloadText}
      >
        Download
      </button>

      <textarea
        className="form-control my-2"
        rows="8"
        placeholder={props.placeholder}
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <h3 className="my-3">
        {wordCount} words {charCount} characters
      </h3>
      <div className="border rounded-3 my-3 p-3 bg-secondary-subtle">
        <h4 className="my-3">Details</h4>
        <p>Total sentences: {sentenceCount}</p>
        <p>Total paragraphs: {paragraphCount}</p>
        <p>Estimated reading time: {readingTime} minutes</p>
        <p>Estimated speaking time: {speakingTime} minutes</p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

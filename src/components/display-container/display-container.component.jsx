import PracticeModes from "../practice/practice-modes.component";

const DisplayContainer = ({ content }) => {
  const { quoteBox, stats, textBox } = content;
  return (
    <div className="container">
      {content.map((components) => (
        <PracticeModes />
      ))}
    </div>
  );
};

export default DisplayContainer;

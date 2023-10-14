const Spinner = ({ text }: { text?: string }) => {
  text = text ?? "Loading...";
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">{text}</span>
      </div>
    </div>
  );
};

export default Spinner;

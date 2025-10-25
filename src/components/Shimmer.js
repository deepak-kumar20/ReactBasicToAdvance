const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img animate"></div>
            <div className="shimmer-title animate"></div>
            <div className="shimmer-tags animate"></div>
            <div className="shimmer-details animate"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

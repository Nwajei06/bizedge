function Loader() {
  const letters = "Bizedge".split("");

  return (
    <div className="loader-wrapper">
      <div className="brand-container">
        
        {/* Logo image */}
        <img style={{width:"200px", height:"200px"}}
          src="/images/bizsingle.png" 
          alt="Bizedge logo" 
          className="brand-icon"
        />

        {/* Animated Text */}
        <h1 className="brand-text">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

      </div>
    </div>
  );
}

export default Loader;

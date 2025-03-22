const ResultPage = ({ result }) => {
    return (
      <div>
        <h1>Result Page</h1>
        <h2>Score Summary:</h2>
        
        <ul>
            {result.map((item, index) => (
                <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.score}</p>
                </li>
            ))}
            </ul>
      </div>
    );
  };
  export default ResultPage;
const ResultPage = ({ result }) => {
    return (
      <div>
        <h1>Result Page</h1>
        <h2>Score Summary:</h2>
        
        <ul>
            {result.array.forEach(element => {
                
            })}
        </ul>
      </div>
    );
  };
  export default ResultPage;
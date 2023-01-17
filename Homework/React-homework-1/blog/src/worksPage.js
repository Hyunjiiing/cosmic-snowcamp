import { articles } from "./data";
function Works() {
  return (
    <div>
      <br></br>
      {articles.articlesSrc.map((a) => (
        <>
          <img src={a} width={300}></img>
          <br></br>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default Works;

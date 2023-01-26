import { items } from "../data";
function Articles() {
  return (
    <div className="text">
      <br></br>
      {items.map((value) => (
        <>
          <img src={value.src} width="20%"></img>
          <h4>{value.title}</h4>
          <p>{value.preview}</p>
          <p>{value.createDate}</p>
          <br></br>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default Articles;

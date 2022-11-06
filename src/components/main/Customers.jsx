
export default function Customers(props) {
  return (
    <div className="box">
      <img src="./img/quote-img.png" alt="" className="quote"/>
      <p>{props.ctn}</p>
      <img src={props.avt} className="user" alt="" />
      <h3>{props.name}</h3>
    </div>
  );
}

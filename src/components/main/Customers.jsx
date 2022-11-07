
export default function Customers({item}) {
  return (
    <div className="box">
      <img src="./img/quote-img.png" alt="" className="quote"/>
      <p>{item.ctn}</p>
      <img src={item.avt} className="user" alt="" />
      <h3>{item.name}</h3>
    </div>
  );
}

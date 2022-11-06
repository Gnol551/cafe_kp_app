

export default function Product({item}) {
  return (
    <div key={item.id} className="box">
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="content">
        <h3>{item.name}</h3>
        <div className="price">
          {item.price} <span> {item.prices}</span>
        </div>      
        <button className="btn">
          Thêm
        </button>
      </div>
    </div>
  );
}

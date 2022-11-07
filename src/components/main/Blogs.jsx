export default function Blogs({item}) {
  return (
    <div className="box">
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="content">
        <a href="#" className="title">
          {item.hd}
        </a>
        <span>{item.ad}</span>
        <p>{item.ctn}</p>
        <a href="#" className="btn">
          {item.btn}
        </a>
      </div>
    </div>
  );
}

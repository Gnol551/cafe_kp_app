export default function Blogs(props) {
  return (
    <div className="box">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <a href="#" className="title">
          {props.hd}
        </a>
        <span>{props.ad}</span>
        <p>{props.ctn}</p>
        <a href="#" className="btn">
          {props.btn}
        </a>
      </div>
    </div>
  );
}

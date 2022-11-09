import { FaHome } from 'react-icons/fa';
export default function Dashboard({ }) {
  return (
    <div className="dash">
      <header>
      <img src="./img/logo.png" alt="logo" className="logodash" /><span className="namedash">CAFENA</span>
      </header>
      <div>
        <div className="cottrai">
          <ul>
          <a href='#'><li><FaHome style={{color:'white'}}/> Home</li></a>
          <a href='#'><li><FaHome style={{color:'white'}}/> Products</li></a>
          <a href='#'><li><FaHome style={{color:'white'}}/> Menu</li></a>
          </ul>
        </div>
        <div className="cotchinh">
      
        </div>
      </div>
    </div>
  );
}

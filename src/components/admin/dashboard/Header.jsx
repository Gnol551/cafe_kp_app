import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    // 1/ xoa token
    localStorage.removeItem("token");
    // 2/ chuyen qua trang login
    navigate("/login");
  };

  return (
    <header>
      <img src="../../img/logo.png" alt="logo" className="logodash" />
      <span className="namedash">CAFENA</span>
      <UserOutlined
        onClick={() => {
          setOpen(!open);
        }}
        className="user-dash"
      />
      {open === true ? (
        <div className="open-logout">
          <button onClick={signOut}>Đăng xuất</button>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

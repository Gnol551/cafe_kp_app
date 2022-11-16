import { Link } from "react-router-dom";
import Cart from "./Cart";
import { HashLink } from "react-router-hash-link";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Header({ count, setCount }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="./img/logo.png" alt="logo" />
      </Link>

      <nav className="navbar">
        <HashLink smooth to="/#home">
          Trang chủ
        </HashLink>
        <HashLink smooth to="/#about">
          Giới thiệu
        </HashLink>
        <HashLink smooth to="/#menu">
          Thực đơn
        </HashLink>
        <HashLink smooth to="/#product">
          Sản phẩm
        </HashLink>
        <HashLink smooth to="/#review">
          Đánh giá
        </HashLink>
        <HashLink smooth to="/#contact">
          Liên hệ
        </HashLink>
        <HashLink smooth to="/#blogs">
          Bài viết
        </HashLink>
      </nav>
      <MenuOutlined
        className="hamburger-react"
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open === true ? (
        <div className="menu-left">
          <nav className="nav-mobile">
            <HashLink smooth to="/#home">
              Trang chủ
            </HashLink>
            <HashLink smooth to="/#about">
              Giới thiệu
            </HashLink>
            <HashLink smooth to="/#menu">
              Thực đơn
            </HashLink>
            <HashLink smooth to="/#product">
              Sản phẩm
            </HashLink>
            <HashLink smooth to="/#review">
              Đánh giá
            </HashLink>
            <HashLink smooth to="/#contact">
              Liên hệ
            </HashLink>
            <HashLink smooth to="/#blogs">
              Bài viết
            </HashLink>
          </nav>
        </div>
      ) : (
        <></>
      )}

      <Cart count={count} setCount={setCount} />
    </header>
  );
}

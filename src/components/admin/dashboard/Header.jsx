import { UserOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <header>
      <img src="../../img/logo.png" alt="logo" className="logodash" />
      <span className="namedash">CAFENA</span>
      <UserOutlined />
    </header>
  );
}

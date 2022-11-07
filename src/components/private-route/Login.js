import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

export default function Login({ isAuthenticated, setIsAuthenticated }) {
  // cho nay la de lam logic check coi co authen khong

  return (
    <>
      <section className="login" id="contact">
        <div className="row">
          <form action="">
            <h3>Đăng nhập</h3>
            <div className="inputBox">
              <span>
                <UserOutlined />
              </span>
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputBox">
              <span>
                <MailOutlined />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            
            <input type="submit" value="đăng nhập" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
}

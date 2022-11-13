import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      username: username,
      password: password,
    };

    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((result) => result.json())
      .then((info) => {
        if (info.success) {
          localStorage.setItem("token", info.data);
          navigate("/dashboard");
        } else {
          alert(info.message);
        }
      });
  };

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
              <input
                value={username}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  setUsername(value);
                }}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="inputBox" style={{ marginTop: "0px" }}>
              <span>
                <MailOutlined />
              </span>
              <input
                value={password}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  setPassword(value);
                }}
                type="password"
                placeholder="Password"
              />
            </div>

            <input
              type="button"
              value="đăng nhập"
              className="btn"
              onClick={(e) => submitHandler(e)}
            />
          </form>
        </div>
      </section>
    </>
  );
}

import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { HashLink } from "react-router-hash-link";

export default function Footer(params) {
  return (
    <section className="footer">
      <div className="share">
        <a href="/">
          <FacebookOutlined />
        </a>
        <a href="/">
          <TwitterOutlined />
        </a>
        <a href="/">
          <InstagramOutlined />
        </a>
        <a href="/">
          <LinkedinOutlined />
        </a>
        <a href="/">
          <YoutubeOutlined />
        </a>
      </div>
      <div className="links">
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
      </div>
    </section>
  );
}

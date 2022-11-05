import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";

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
        <a href="#home">Trang chủ</a>
        <a href="#about">Giới thiệu</a>
        <a href="#menu">Thực đơn</a>
        <a href="#product">Sản phẩm</a>
        <a href="#review">Đánh giá</a>
        <a href="#contact">Liên hệ</a>
        <a href="#blogs">Bài viết</a>
      </div>
    </section>
  );
}

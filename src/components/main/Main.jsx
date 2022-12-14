import Box from "./Box";
import Customers from "./Customers";
import Product from "./Product";
import { UserOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import Blogs from "./Blogs";
import menu from "../../data/list";

export default function Main({ count, setCount, itemInCart, setItemInCart }) {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Một tách cà phê vào buổi sáng</h3>
          <p>
            Một tách cà phê vào buổi sáng giúp bạn tỉnh táo và tăng khả năng tập
            trung của não bộ. Tuy nhiên, uống cafe buổi sáng có tốt không là
            thắc mắc của rất nhiều người.
          </p>
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="heading">
          <span>Về</span> Chúng tôi
        </h1>
        <div className="row">
          <div className="image">
            <img src="./img/about-img.jpeg" alt="" />
          </div>
          <div className="content">
            <h3>Cafe của chúng tôi có gì đặc biệt</h3>
            <p>
              Đặc biệt là chúng tôi đã dày công nguyên cứu, tìm ra công thức
              rang riêng. Công thức ấy dành riêng cho các bạn trẻ. Các bạn sẽ tự
              cảm nhận cái đặc biệt trong vị cà phê mà chúng tôi dành cho các
              bạn. Với chúng tôi đó là công thức rang, còn với các bạn nó là một
              hàm số với nhiều biến.
            </p>
            <p>
              Đơn giản cà phê đặc biệt là một cái tên đặc biệt dành cho các bạn.
              Cà phê đặc biệt là cà phê rang xay nguyên chất 100%. Đạt tiêu
              chuẩn UTZ, truy xuất nguồn gốc toàn cầu.
            </p>
            <a href="#" className="btn">
              Đọc thêm
            </a>
          </div>
        </div>
      </section>
      {/* end about
    menu */}
      <section className="menu" id="menu">
        <h1 className="heading">
          thực đơn <span>của chúng tôi</span>
        </h1>
        <div className="box-container">
          {menu?.map((item) => {
            if (item.category === "drink") {
              return (
                <Box
                  item={item}
                  count={count}
                  setCount={setCount}
                  itemInCart={itemInCart}
                  setItemInCart={setItemInCart}
                />
              );
            }
          })}
        </div>
      </section>
      {/* end menu
    product */}
      <section className="products" id="product">
        <h1 className="heading">
          Sản Phẩm <span>của chúng tôi</span>
        </h1>
        <div className="box-container">
          {menu?.map((item) => {
            if (item.category === "product") {
              return <Product item={item} />;
            }
          })}
        </div>
      </section>
      {/* end product
    review */}
      <section className="review" id="review">
        <h1 className="heading">
          Khách hàng <span>đánh giá</span>
        </h1>
        <div className="box-container">
        {menu?.map((item) => {
            if (item.category === "customers") {
              return <Customers item={item} />;
            }
          })}
        </div>
      </section>
      {/* end review
    contact */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>liên hệ</span> với chúng tôi
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9184659261323!2d106.63840031428676!3d10.740767262789134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7b2a19979b%3A0xe90d60e621f86cb5!2zNTUxLzUgxJDGsOG7nW5nIFBo4bqhbSBWxINuIENow60sIFBoxrDhu51uZyA3LCBRdeG6rW4gNiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1657308919303!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>liên lạc</h3>
            <div className="inputBox">
              <span>
                <UserOutlined />
              </span>
              <input type="text" placeholder="Họ và Tên" />
            </div>
            <div className="inputBox">
              <span>
                <MailOutlined />
              </span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span>
                <PhoneOutlined />
              </span>
              <input type="number" placeholder="Số điện thoại" />
            </div>
            <input type="submit" value="liên hệ" className="btn" />
          </form>
        </div>
      </section>
      {/* end contact
    blogs */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Bài <span>viết</span>
        </h1>
        <div className="box-container">
          {menu?.map((item) => {
            if (item.category === "blogs") {
              return <Blogs item={item} />;
            }
          })}
        </div>
      </section>
    </>
  );
}

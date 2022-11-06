import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function AppLayout({ children, count, setCount }) {
  return (
    <>
      <Header count={count} setCount={setCount} />
      {children}
      <Footer />
    </>
  );
}

import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

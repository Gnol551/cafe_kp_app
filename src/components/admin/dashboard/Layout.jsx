import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="dash">
      <Header />
      <div>
        <Sidebar />
        <div className="cotchinh">{children}</div>
      </div>
    </div>
  );
}

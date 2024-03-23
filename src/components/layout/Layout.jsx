import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
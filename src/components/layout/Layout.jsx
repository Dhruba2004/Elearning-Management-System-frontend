import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen lg:w-[1534px] w-full overflow-x-hidden">{children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;

import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen font-lato">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Shops from "@/components/Shops";

export default function Home() {
  return (
    <div className="w-[100%] h-screen box-border">
        <Navbar/>
        <Header/>
        <Shops/>
        <Products/>
        <Footer/>
    </div>
  );
}

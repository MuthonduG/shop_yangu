import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="w-[100%] h-screen box-border">
        <Navbar/>
        <Header/>
        <Products/>
    </div>
  );
}

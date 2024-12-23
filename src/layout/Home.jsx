import ProductList from "@/components/ProductList";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductList />
      {/* <Wishlist /> */}
      <Footer />
    </>
  );
};

export default Home;

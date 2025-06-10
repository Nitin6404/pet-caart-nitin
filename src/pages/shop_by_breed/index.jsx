import Adaptability from "./components/Adaptability";
import Category from "./components/Category";
import Diet from "./components/Diet";
import GermanShepherdIntro from "./components/GermanShepherdIntro";
import Traits from "./components/Traits";
import ApplodBanner from "../../components/ApplodBanner";
import Header from "../../components/Header";
import CategoryNavbar from "../../components/Navbar";
import Training from "./components/Training";

const ShopByBreed = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Header />
      <CategoryNavbar />
        <Category />
      <div className="my-10">
      <GermanShepherdIntro />
      </div>
      <div className="my-10">
        <Adaptability />
      </div>
      <div className="my-10">
        <Traits />
      </div>
      <div className="my-10">
        <Diet />
      </div>
      <div className="my-10">
        <ApplodBanner />
      </div>
      <div className="my-10">
        <Training />
      </div>
      <div className="mt-10">
        <ApplodBanner />
      </div>
    </div>
  );
};

export default ShopByBreed;

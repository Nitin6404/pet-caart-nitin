import EarlyAccessPage from "../pages/early_access";
import EarlyAccessResponsePage from "../pages/early_access_response";
import {Routes, Route} from "react-router-dom";
import ShopByBreed from "../pages/shop_by_breed";
import HomePage from "../pages/home_page";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<EarlyAccessPage />} />
            <Route path="/records" element={<EarlyAccessResponsePage />} />
            <Route path="/shop-by-breed" element={<ShopByBreed />} />
            <Route path="/home-page" element={<HomePage />} />
        </Routes>
    );
}

export default Router;
import EarlyAccessPage from "../pages/early_access";
import EarlyAccessResponsePage from "../pages/early_access_response";
import {Routes, Route} from "react-router-dom";
import ShopByBreed from "../pages/shop_by_breed";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<EarlyAccessPage />} />
            <Route path="/records" element={<EarlyAccessResponsePage />} />
            <Route path="/shop-by-breed" element={<ShopByBreed />} />
        </Routes>
    );
}

export default Router;
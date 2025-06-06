import EarlyAccessPage from "../pages/early_access";
import EarlyAccessResponsePage from "../pages/early_access_response";
import {Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<EarlyAccessPage />} />
            <Route path="/get-response" element={<EarlyAccessResponsePage />} />
        </Routes>
    );
}

export default Router;
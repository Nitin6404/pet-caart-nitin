import { apiService } from "../../../api/api_service/apiService";
import { endpoints } from "../../../api/endpoint/endpoint";

 const getPetCaartResponse = async () => {
  try {
    const apiResponse = await apiService({
      endpoint: endpoints.pet_cart_response,
    });
    return apiResponse;
  } catch (error) {
    console.error(error);
  }
};

export default getPetCaartResponse
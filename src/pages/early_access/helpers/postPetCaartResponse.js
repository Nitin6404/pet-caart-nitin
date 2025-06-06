import { apiService } from "../../../api/api_service/apiService";
import { endpoints } from "../../../api/endpoint/endpoint";

 const postPetCaartResponse = async (payload) => {
  try {
    const apiResponse = await apiService({
      endpoint: endpoints.pet_cart_response,
      method: "POST",
      data: payload,
    });
    return apiResponse;
  } catch (error) {
    console.error(error);
  }
};

export default postPetCaartResponse
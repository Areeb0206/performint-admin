import { ca } from "date-fns/locale";
import { DataService } from "../../config/dataService/dataService";

const getIBODetails = async () => {
  try {
    const response = await DataService.get("/user/");
    return response;
  } catch (err) {
    throw err;
  }
};

const addIBO = async (body) => {
  try {
    const response = await DataService.post("/user", body);
    return response;
  } catch (err) {
    throw err;
  }
};

export { getIBODetails, addIBO };

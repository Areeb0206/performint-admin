import { DataService } from "../../config/dataService/dataService";

const getPlaidLinkToken = async (body) => {
  const response = await DataService.post("/complaint/upload", body);
  return response;
};

export { getPlaidLinkToken };

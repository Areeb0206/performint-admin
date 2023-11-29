import { DataService } from "../../config/dataService/dataService";

const getPlaidLinkToken = async () => {
  const response = await DataService.get("/plaid/get_link_token");
  return response;
};

const createLinkToken = async () => {
  const response = await DataService.post("/plaid/create_link_token");
  return response;
};

const creatAccessToken = async (body) => {
  const response = await DataService.post("/plaid/create_access_token", body);
  return response;
};

export { getPlaidLinkToken, createLinkToken, creatAccessToken };
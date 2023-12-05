import { DataService } from "../../config/dataService/dataService";

const getPlaidLinkToken = async (id) => {
  const response = await DataService.get(`/plaid/get_link_token/${id}`);
  return response;
};

const createLinkToken = async (id) => {
  const response = await DataService.post(`/plaid/create_link_token/${id}`);
  return response;
};

const creatAccessToken = async (body) => {
  const response = await DataService.post("/plaid/create_access_token", body);
  return response;
};

export { getPlaidLinkToken, createLinkToken, creatAccessToken };

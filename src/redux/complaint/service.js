import { DataService } from '../../config/dataService/dataService';

const uploadComplaintFile = async (body) => {
  const response = await DataService.post('/complaint/upload', body);
  return response;
};

const getComplaintConversation = async (complaintId) => {
  const response = await DataService.get(`/complaintConversation/${complaintId}`);
  return response;
};

const addComplaintConversation = async (complaintId, body) => {
  const response = await DataService.post(`/complaintConversation/${complaintId}`, body);
  return response;
};

export { uploadComplaintFile, getComplaintConversation, addComplaintConversation };

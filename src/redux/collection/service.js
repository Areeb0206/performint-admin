import { DataService } from '../../config/dataService/dataService';

const acceptCollectionComplaint = async (complaintId) => {
  const response = await DataService.post(`/collection/complaints/${complaintId}/accept`);
  return response;
};

export { acceptCollectionComplaint };
